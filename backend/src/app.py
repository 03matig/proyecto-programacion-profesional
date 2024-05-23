from flask import Flask, request, jsonify
import subprocess
import json
from bson import ObjectId, Binary
from flask_pymongo import PyMongo
from flask_cors import CORS
from uuid import UUID
from flask_bcrypt import Bcrypt

# Establezco la instancia y la llamo por medio de una variable.
app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://MatiasGarin:31102023@cluster0.hck92kq.mongodb.net/Universidad'
#app.config['MONGO_URI'] = 'mongodb://localhost:27017/Universidad'
mongo = PyMongo(app) 
bcrypt = Bcrypt(app)

#Configuraciones
CORS(app) 

# Base de Datos
db = mongo.db


def crear_usuario_automatico(username, nombre, password, rol):
    #Hashear y saltear la contraseña
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Insertar usuario en la base de datos
    db.users.insert_one({
        'username': username,
        'nombre': nombre,
        'password': hashed_password,
        'rol': rol
    })


# Crear usuario automáticamente al iniciar la aplicación Flask
def crear_usuarios_automaticamente():
    # Datos de los usuarios a crear
    usuarios = [
        {'username': 'magarin@alumnos.uai.cl', 'nombre': 'Matías Garín', 'password': 'testpassword1', 'rol': 'alumno'},
        {'username': 'jacofre@alumnos.uai.cl', 'nombre': 'Javiera Cofré', 'password': 'testpassword2', 'rol': 'profesorUniversidad'},
        {'username': 'admin@admin.uai.cl', 'nombre': 'Admin', 'password': 'admin123', 'rol': 'adminUniversidad'}
    ]

    # Eliminar los usuarios existentes
    for usuario_data in usuarios:
        result = db.users.delete_one({'username': usuario_data['username']})
        print(f"Deleted {result.deleted_count} user(s) with username {usuario_data['username']}")

    # Crear los usuarios
    for usuario_data in usuarios:
        crear_usuario_automatico(usuario_data['username'], usuario_data['nombre'], usuario_data['password'], usuario_data['rol'])
        print(f"Created user with username {usuario_data['username']}")

crear_usuarios_automaticamente()

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

    app.logger.debug('Received login request for username: %s', username)

    # Buscar al usuario en la base de datos
    user = mongo.db.users.find_one({'username': username})

    if user:
        # Comparar la contraseña directamente
        stored_password = user['password']

        app.logger.debug('User found in database: %s', user)

        # Verificar la contraseña proporcionada contra el hash almacenado
        if bcrypt.check_password_hash(stored_password, password):
            return jsonify({'message': 'Login successful'})
        else:
            return jsonify({'message': 'Invalid username or password'}), 401
    else:
        return jsonify({'message': 'User not found'}), 404


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
def createUser():       #esta funcionalidad, sería, dentro de las funcionalidades CRUD (create, read, update, delete), la de Create. Dado que se intenta emular el sistema de registro de la Universidad, 
                        #no se hace uso de esta funcionalidad, por ende, se deja vacía, y se usa a modo de testeo de la recepción de señal o, dicho en otras palabras, si se escucha el request del API GET.
    return 'received'


@app.route('/users', methods=['GET'])
def getUsers():
    users = []
    for doc in db.Login.find(): #db.find() => db.Login.find();
        #if 'userId' in doc:
            users.append({
                '_id': str(ObjectId(doc['_id'])),
                'nombre': doc.get('nombre', ''),
                'correo': doc.get('correo', ''),
                'contraseña': doc.get('contraseña', '')
            })          #éste vendría siendo la funcionalidad R del CRUD, es decir, la de lectura. se utilizaría en función del inicio de sesión, que es requisito para esta entrega. por lo mismo, es la única desarrollada.
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

    #como se puede apreciar en el directorio, se creó un ambiente virtual para el desarrollo de este backend. el ambiente virtual contiene los paquetes importados en las primeras líneas de código.
    #están correctamente importados, por algún motivo sale sin color los imports.
