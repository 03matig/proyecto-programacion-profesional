import unittest
from unittest.mock import patch
from app import app

class TestGetUserRole(unittest.TestCase):
    def test_get_user_role_success(self):
        with app.test_client() as client:
            # Simular una solicitud GET válida con un ID de usuario válido
            user_id = '666764fedc657d4600ddc394'
            response = client.get('/get_user_role?user_id=666764fedc657d4600ddc394')
            data = response.get_json()
            
            # Verificar que la respuesta sea exitosa y contenga el rol del usuario
            self.assertEqual(response.status_code, 200)
            self.assertIn('role', data)

    def test_get_user_role_missing_id(self):
        with app.test_client() as client:
            # Simular una solicitud GET sin un ID de usuario
            response = client.get('/get_user_role')
            data = response.get_json()
            
            # Verificar que la respuesta sea un error 400
            self.assertEqual(response.status_code, 400)
            self.assertIn('error', data)

    def test_get_user_role_user_not_found(self):
        with app.test_client() as client:
            # Simular una solicitud GET con un ID de usuario no válido
            invalid_user_id = '666764fedc657d4600ddc3ff'
            response = client.get('/get_user_role?user_id=666764fedc657d4600ddc3ff')
            data = response.get_json()
            # Verificar que la respuesta sea un error 404
            self.assertEqual(response.status_code, 404)
            self.assertIn('error', data)

if __name__ == '__main__':
    unittest.main()
