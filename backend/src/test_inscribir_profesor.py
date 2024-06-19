#Hay que instalar:
#pip install pytest
#pip install mongomock
#pip install pytest-cov

import pytest
import mongomock
import sys
import os
from app import app, db

# Mock data
mock_comision = {
    "username": "alumno18@alumnos.uai.cl",
    "nombre": "Alumno N°18",
    "carrera": "Ingeniería Civil en Obras Civiles",
    "rol": "alumno",
    "id": "66650d3277a3c95416ad199a",
    'profesores-a-cargo': {
        'Profesor N°1': { 'id': '', 'Nombre': '', 'Carrera': '' },
        'Profesor N°2': { 'id': '', 'Nombre': '', 'Carrera': '' },
        'Profesor N°3': { 'id': '', 'Nombre': '', 'Carrera': '' }
    }
}

@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['MONGO_URI'] = 'mongodb://localhost:27017/testdb'
    db.connection = mongomock.MongoClient().db
    client = app.test_client()

    yield client

def test_inscribir_profesor(client):
    db.Comisiones.insert_one(mock_comision)

    response = client.post('/inscribir_profesor', json={
        'alumno_username': 'alumno18@alumnos.uai.cl',
        'profesor_id': 'prof1',
        'profesor_nombre': 'Profesor N°1',
        'profesor_carrera': 'Ingeniería Civil en Obras Civiles'
    })
    assert response.status_code == 200
    data = response.get_json()
    assert data['message'] == 'Profesor inscrito con éxito'

def test_comision_no_encontrada(client):
    response = client.post('/inscribir_profesor', json={
        'alumno_username': 'nonexistent@alumnos.uai.cl',
        'profesor_id': 'prof1',
        'profesor_nombre': 'Profesor N°1',
        'profesor_carrera': 'Ingeniería Civil en Obras Civiles'
    })
    assert response.status_code == 404
    data = response.get_json()
    assert data['error'] == 'Comisión no encontrada'

def test_maximo_profesores(client):
    db.Comisiones.insert_one(mock_comision)
    for i in range(3):
        client.post('/inscribir_profesor', json={
            'alumno_username': 'alumno18@alumnos.uai.cl',
            'profesor_id': f'prof{i+1}',
            'profesor_nombre': f'Profesor N°{i+1}',
            'profesor_carrera': 'Ingeniería Civil en Obras Civiles'
        })

    response = client.post('/inscribir_profesor', json={
        'alumno_username': 'alumno18@alumnos.uai.cl',
        'profesor_id': 'prof4',
        'profesor_nombre': 'Profesor N°4',
        'profesor_carrera': 'Ingeniería Civil en Obras Civiles'
    })
    assert response.status_code == 400
    data = response.get_json()
    assert data['error'] == 'La comisión ya tiene 3 profesores inscritos'

def test_profesor_ya_inscrito(client):
    db.Comisiones.insert_one(mock_comision)
    client.post('/inscribir_profesor', json={
        'alumno_username': 'alumno18@alumnos.uai.cl',
        'profesor_id': 'prof1',
        'profesor_nombre': 'Profesor N°1',
        'profesor_carrera': 'Ingeniería Civil en Obras Civiles'
    })

    response = client.post('/inscribir_profesor', json={
        'alumno_username': 'alumno18@alumnos.uai.cl',
        'profesor_id': 'prof1',
        'profesor_nombre': 'Profesor N°1',
        'profesor_carrera': 'Ingeniería Civil en Obras Civiles'
    })
    assert response.status_code == 400
    data = response.get_json()
    assert data['error'] == 'El profesor ya está inscrito en esta comisión'

def test_asignacion_presidente(client):
    db.Comisiones.insert_one(mock_comision)
    client.post('/inscribir_profesor', json={
        'alumno_username': 'alumno18@alumnos.uai.cl',
        'profesor_id': 'prof1',
        'profesor_nombre': 'Profesor N°1',
        'profesor_carrera': 'Ingeniería Civil en Obras Civiles'
    })

    response = client.post('/inscribir_profesor', json={
        'alumno_username': 'alumno18@alumnos.uai.cl',
        'profesor_id': 'prof2',
        'profesor_nombre': 'Profesor N°2',
        'profesor_carrera': 'Ingeniería Civil en Obras Civiles'
    })

    comision = db.Comisiones.find_one({'username': 'alumno18@alumnos.uai.cl'})
    assert comision['profesores-a-cargo']['Profesor N°1']['President'] == 'yes'
