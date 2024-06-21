from flask import Flask, request, jsonify
import subprocess
import json
from bson import ObjectId, Binary
from flask_pymongo import PyMongo
from flask_cors import CORS
from uuid import UUID
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import logging

# Establezco la instancia y la llamo por medio de una variable.
app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://MatiasGarin:31102023@cluster0.hck92kq.mongodb.net/Universidad'
#app.config['MONGO_URI] = 'mongodb://localhost:27017/Universidad'
app.config['JWT_SECRET_KEY'] = 'JSONWebToken_secret_key'
mongo = PyMongo(app) 
bcrypt = Bcrypt(app)

#Configuraciones
CORS(app) 
jwt = JWTManager(app)

# Base de Datos
db = mongo.db


def crear_usuario_automatico(username, nombre, password, carrera, año, rol):
    #Hashear y saltear la contraseña
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Insertar usuario en la base de datos
    db.users.insert_one({
        'username': username,
        'nombre': nombre,
        'password': hashed_password,
        'carrera': carrera,
        'año': año,
        'rol': rol
    })


# Crear usuario automáticamente al iniciar la aplicación Flask
def crear_usuarios_automaticamente():
    # Datos de los usuarios a crear
    usuarios = [
        {'username': 'magarin@alumnos.uai.cl', 'nombre': 'Matías Garín', 'password': 'testpassword1', 'carrera': 'Ingeniería Civil Informática', 'año': '4to año','rol': 'alumno'},
        {'username': 'jacofre@alumnos.uai.cl', 'nombre': 'Javiera Cofré', 'password': 'testpassword2', 'carrera': 'Ingeniería Civil Industrial', 'año': '4to año', 'rol': 'alumno'},
        {'username': 'profesor1@uai.cl', 'nombre': 'Profesor N°1', 'password': 'testpassword3', 'carrera': 'null', 'año': 'null', 'rol': 'profesorUniversidad'},
        {'username': 'admin@admin.uai.cl', 'nombre': 'Admin', 'password': 'admin123', 'carrera': 'null', 'año': 'null', 'rol': 'adminUniversidad'}
    ]

    # Eliminar los usuarios existentes
    for usuario_data in usuarios:
        result = db.users.delete_one({'username': usuario_data['username']})
        print(f"Deleted {result.deleted_count} user(s) with username {usuario_data['username']}")

    # Crear los usuarios
    for usuario_data in usuarios:
        crear_usuario_automatico(usuario_data['username'], usuario_data['nombre'], usuario_data['password'], usuario_data['carrera'], usuario_data['año'], usuario_data['rol'])
        print(f"Created user with username {usuario_data['username']}")

#crear_usuarios_automaticamente()

#Acá verificaré la creación automática del usuario
@app.route('/verificar_usuario_automatico', methods=['GET'])
def verificar_creacion_automatica():
    # Obtener el usuario creado automáticamente
    usuario = db.users.find_one({'username': 'magarin@alumnos.uai.cl'})

    if usuario:
        usuario['_id'] = str(usuario['_id'])
        return jsonify({'message': 'Usuario creado automáticamente:', 'usuario': usuario})
    else:
        return jsonify({'message': 'No se encontró el usuario creado automáticamente'})


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    #nombre = data['nombre']

    app.logger.debug('Received login request for username: %s', username)

    # Buscar al usuario en la base de datos
    user = mongo.db.users.find_one({'username': username})

    if user:
        # Comparar la contraseña directamente
        stored_password = user['password']

        app.logger.debug('User found in database: %s', user)

            

        # Verificar la contraseña proporcionada contra el hash almacenado
        if bcrypt.check_password_hash(stored_password, password):
            access_token = create_access_token(identity=str(user['_id']))
            return jsonify({
                'message': 'Login successful',
                'username': username,
                'access_token': access_token,
                '_id': str(user['_id']),
                'nombre': user['nombre'],
                'rol': user['rol'],
            }), 200
        else:
            return jsonify({'message': 'Invalid username or password'}), 401
    else:
        return jsonify({'message': 'User not found'}), 404

@app.route('/get_user_role', methods=['GET'])
def get_user_role():
    user_id = request.args.get('user_id')
    if not user_id:
        return jsonify({'error': 'User ID is required'}), 400

    user = db.users.find_one({'_id': ObjectId(user_id)})
    if user:
        return jsonify({'role': user.get('rol')}), 200
    else:
        return jsonify({'error': 'User not found'}), 404

# Consultas API para la funcionalidad de Crear Comisiones:
@app.route('/alumnos', methods=['GET'])
def get_alumnos():
    alumnos = db.Comisiones.find({"rol": "alumno"})
    alumnos_list = []
    for alumno in alumnos:
        alumnos_list.append({
            "username": alumno["username"],
            "nombre": alumno["nombre"],
            "carrera": alumno["carrera"],
            "rol": alumno["rol"],
            "profesores": alumno.get("profesores-a-cargo", {
                "Profesor N°1": {"id": "", "Nombre": "", "Carrera": ""},
                "Profesor N°2": {"id": "", "Nombre": "", "Carrera": ""},
                "Profesor N°3": {"id": "", "Nombre": "", "Carrera": ""}
            })
        })
    return jsonify(alumnos_list), 200

@app.route('/inscribir_profesor', methods=['POST'])
def inscribir_profesor():
    data = request.get_json()
    alumno_username = data['alumno_username']
    profesor_id = data['profesor_id']
    profesor_nombre = data['profesor_nombre']
    profesor_carrera = data['profesor_carrera']

    # Buscar la comisión del alumno
    comision = db.Comisiones.find_one({'username': alumno_username})

    if not comision:
        return jsonify({'error': 'Comisión no encontrada'}), 404

    # Contar el número de profesores ya inscritos
    profesores_inscritos = len([prof for prof in comision['profesores-a-cargo'].values() if prof['Nombre']])
    
    if profesores_inscritos >= 3:
        return jsonify({'error': 'La comisión ya tiene 3 profesores inscritos'}), 400

    # Verificar si el profesor ya está inscrito
    for prof in comision['profesores-a-cargo'].values():
        if prof['id'] == profesor_id:
            return jsonify({'error': 'El profesor ya está inscrito en esta comisión'}), 400

    # Verificar si ya hay un profesor con la misma carrera
    carreras_profesores = [prof['Carrera'] for prof in comision['profesores-a-cargo'].values() if prof['Nombre']]
    if profesor_carrera not in carreras_profesores and len(carreras_profesores) < 2:
        # Inscribir al profesor en el siguiente puesto disponible
        for key, prof in comision['profesores-a-cargo'].items():
            if not prof['Nombre']:
                comision['profesores-a-cargo'][key] = {
                    'id': profesor_id,
                    'Nombre': profesor_nombre,
                    'Carrera': profesor_carrera
                }
                break
    else:
        if profesor_carrera in carreras_profesores and profesores_inscritos < 3:
            for key, prof in comision['profesores-a-cargo'].items():
                if not prof['Nombre']:
                    comision['profesores-a-cargo'][key] = {
                        'id': profesor_id,
                        'Nombre': profesor_nombre,
                        'Carrera': profesor_carrera
                    }
                    break
        elif profesores_inscritos == 2 and profesor_carrera not in carreras_profesores:
            for key, prof in comision['profesores-a-cargo'].items():
                if not prof['Nombre']:
                    comision['profesores-a-cargo'][key] = {
                        'id': profesor_id,
                        'Nombre': profesor_nombre,
                        'Carrera': profesor_carrera,
                        'President': 'yes'
                    }
                    break

    db.Comisiones.update_one(
        {'username': alumno_username},
        {'$set': {'profesores-a-cargo': comision['profesores-a-cargo']}}
    )

    return jsonify({'message': 'Profesor inscrito con éxito'}), 200
    
@app.route('/mostrar_usuarios', methods=['GET'])
def mostrar_usuarios():
    try:
        # Ejecutar el comando show users
        resultado = db.command('usersInfo')
        # Eliminar el atributo 'userId' de cada usuario
        for usuario in resultado['users']:
            del usuario['userId']
        # Devolver el resultado como JSON utilizando jsonify
        return jsonify(resultado)
    
    except Exception as e:
        return f'Error al ejecutar el comando: {e}'  #mongodb usersinfo <username>


@app.route('/usuarios', methods=['POST'])
def createUser():       
    return 'received'


@app.route('/users', methods=['GET'])
def getUsers():
    users = []
    for doc in db.users.find(): #db.find() => db.Login.find();
        #if 'userId' in doc:
            users.append({
                '_id': str(ObjectId(doc['_id'])),
                'nombre': doc.get('nombre', ''),
                'correo': doc.get('correo', ''),
                'contraseña': doc.get('contraseña', '')
            })         
    return jsonify(users) 


@app.route('/user/<id>', methods=['GET'])
def getUser(id):
    user1 = db.Login.find_one({'_id': ObjectId(id)})
    print (user1)
    return jsonify({
      '_id': str(ObjectId(user1['_id'])),
      'nombre': user1['nombre'],
      'correo': user1['correo'],
      'contraseña': user1['contraseña']
  })


@app.route('/users/<id>', methods=['PUT'])
def updateUser(id):
    db.Login.update_one({'_id': ObjectId(id)}, {'$set': {
        'nombre': request.json['nombre'],
        'contraseña': request.json['contraseña']
    }})
    return jsonify({'msg': 'User Updated'})


if __name__ =="__main__":
    app.run(host='localhost', port=5000, debug=True) #acá se establece dónde se desea ejecutar la aplicación de flask.
