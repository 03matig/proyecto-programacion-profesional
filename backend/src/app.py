from flask import Flask, request, jsonify, render_template 
import subprocess
import json
from bson import ObjectId, Binary
from flask_pymongo import PyMongo
from flask_cors import CORS
from uuid import UUID
from pymongo import MongoClient
import bcrypt

# Establezco la instancia y la llamo por medio de una variable.
app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/Universidad' #acá se puede ver que se accede a la base de datos MongoDB, llamada "Universidad" alojada en el localhost en el puerto 27017
mongo = PyMongo(app)

#Configuraciones
CORS(app) 

# Base de Datos
db = mongo.db

#@app.route('/')
#def index():
#    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']

    app.logger.debug('Received login request for username: %s', username)

    # Buscar al usuario en la base de datos
    user = mongo.db.users.find_one({'username': username})

    if user:
        # Comparar la contraseña hasheada
        hashed_password = user['password']

        app.logger.debug('User found in database: %s', user)

        if bcrypt.checkpw(password.encode('utf-8'), hashed_password):
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


#NECESITO EL OUTPUT DE "SHOW USERS" || "db.getUsers();"
@app.route('/showusers', methods=['GET'])
def showUsers():
    users = []
    # Ejecutar el comando 'show users' en la shell de MongoDB y capturar la salida
    output = subprocess.check_output(['mongo', '--eval', 'db.getUsers()'], universal_newlines=True)
    # Convertir la salida en una lista de diccionarios
    user_docs = json.loads(output)
    for user_doc in user_docs:
        users.append({
            '_id': user_doc.get('_id',''),
            'user': user_doc.get('user',''),
            'db': user_doc.get('db',''),
            'roles': user_doc.get('roles','')
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



#PRUEBAS
# Endpoint para obtener la información de usuarios
@app.route('/usersinfo', methods=['GET'])
def get_users_info():
    # Obtener la colección de usuarios
    users_collection = mongo.db.Login.command('db.getUsers()')

    # Consultar la información de usuarios
    #users_info = users_collection.find()

    # Lista para almacenar la información de los usuarios
    users_data = []

    # Procesar la información de usuarios
    for user_info in users_collection:
        user_data = {
            '_id': str(user_info['_id']),
            'nombre': user_info['nombre'],
            'correo': user_info['correo'],
            'contraseña': user_info['contraseña']
        }
        users_data.append(user_data)

    # Retornar la información de usuarios como JSON
    return jsonify(users_data)

if __name__ =="__main__":
    app.run(host='localhost', port=5000, debug=True) #acá se establece dónde se desea ejecutar la aplicación de flask.


    #como se puede apreciar en el directorio, se creó un ambiente virtual para el desarrollo de este backend. el ambiente virtual contiene los paquetes importados en las primeras líneas de código.
    #están correctamente importados, por algún motivo sale sin color los imports.
