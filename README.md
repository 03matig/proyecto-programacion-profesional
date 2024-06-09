# Proyecto "Convenios y Defensas"

Este proyecto es la continuación del proyecto "Pasantías UAI" y está diseñado para gestionar convenios y defensas de pasantías en la Universidad Adolfo Ibáñez (UAI).

## Descripción del Proyecto

"Convenios y Defensas" es una aplicación web que facilita la gestión de convenios con empresas y la organización de defensas de pasantías. La aplicación permite a los estudiantes subir sus informes finales, a los profesores crear comisiones de evaluación y a los administradores gestionar todos los aspectos relacionados con las defensas.

## Características Principales

1. **Subida de Informe Final**:
   - Los estudiantes pueden subir su informe final de pasantía a la plataforma.

2. **Gestión de Convenios**:
   - Registro de empresas y estado de sus convenios (en trámite, firmado, rechazado).
   - Dashboard con estadísticas de empresas, notas, evaluaciones, y número de alumnos por empresa y carrera.

3. **Creación de Comisiones**:
   - Portal para que los profesores seleccionen las defensas en las que desean participar.
   - Visualización del título, día, y hora de cada defensa.
   - Descarga de PDF del informe.
   - Inscripción y desinscripción de profesores en defensas.

4. **Asignación de Links de Zoom**:
   - Envío de notificaciones por correo con los enlaces de las defensas.

5. **Evaluación y Notificación**:
   - Registro de evaluaciones de las defensas.
   - Envío de notificaciones y cierre de procesos de evaluación.

6. **Dashboard y Comunicación Masiva**:
   - Analítica y estadísticas de alumnos por curso, generación y carrera.
   - Lista de estudiantes en las comisiones con detalle de notas finales y feedback.
   - Envío de correos según filtros (carrera, generación, número de paso).

7. **Inscripción Inicial**:
   - Subida de un archivo CSV con información de alumnos y profesores.
   - Opciones para borrar o agregar estudiantes.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales: el backend y el frontend.

### Backend
- **Ubicación**: `backend/src`
- **Lenguaje**: Python
- **Framework**: Flask
- **Archivo Principal**: `app.py`
- **Dependencias**: Listadas en `requirements.txt`
- **Docker**: Archivo `Dockerfile` para construir la imagen Docker.
- **Deploy con Docker**:
   - Primer paso: Construir la Imágen Docker
      ```bash
      cd backend/src
      docker build -t <nombre-de-la-imagen-docker-frontend> .
      ```
   - Segundo paso: Ejecutar la Imágen Docker
      ```bash
      docker run -p 5000:5000 <nombre-de-la-imagen-docker-frontend>
      ```
- **Deployment normal**:
     - Paso N°1: Descargamos la librería para crear un entorno virtual
         ```bash
         pip install virtualenv
         ```
     - Paso N°2: Creamos el entorno virtual
         ```bash
         cd backend
         python -m venv .venv
         ```
     - Paso N°3: Activamos el entorno virtual
         - En caso de estar ocupando PowerShell en Windows:
            ```bash
            PS C:\> .venv\Scripts\Activate.ps1
            ```
         - En caso de estar ocupando Command Prompt en Windows (cmd):
            ```bash
            C:\> .venv\Scripts\activate.bat
            ```
         - En caso de estar ocupando Terminal de Linux o Mac:
            ```bash
            source .venv/bin/activate
            ```

     - Paso N°4: Instalamos los requerimientos
         ```bash
         cd src
         pip install -r requirements.txt
         ```
     - Paso N°5: Desplegamos la aplicación Flask.
        - Alternativa N°1 (preferente)
            ```bash
            python app.py
            ```
        - Alternativa N°2 (no tan preferente)
            ```bash
            flask run
            ```

### Frontend
- **Ubicación**: `prograpro-react`
- **Lenguaje**: JavaScript
- **Framework**: React
- **Componentes Principales**:
  - `Dashboard.js`
  - `Home.js`
  - `Login.js`
  - `Navbar.js`
  - `Pasantia.js`
  - `VistaCrearZoom.js`
- **Estilos**: Archivos CSS en `styles`
- **Docker**: Archivo `Dockerfile` para construir la imagen Docker.
- **Deploy con Docker**:
   - Primer paso: Construir la Imágen Docker
      ```bash
      cd prograpro-react
      docker build -t <nombre-de-la-imagen-docker-frontend> .
      ```
   - Segundo paso: Ejecutar la Imágen Docker
      ```bash
      docker run -p 3000:3000 <nombre-de-la-imagen-docker-frontend>
      ```
- **Deployment normal**:
   - Primer paso: Entrar a la carpeta del frontend
         ```bash
         cd prograpro-react
         ```
   - Segundo paso: Iniciar la aplicación React
         ```bash
         npm start
         ```

### Base de Datos
- **MongoDB**: Archivos de respaldo ubicados en `backup-mongodb/Universidad`

## Requisitos Técnicos

- **Backend**: Python 3.x, Flask
- **Frontend**: Node.js, React
- **Base de Datos**: MongoDB
- **Docker**: Para contenedores de backend y frontend

## Instalación y Configuración

### Clonar el Repositorio
```bash
git clone https://github.com/03matig/APP-PROGRAPROFESIONAL.git
```
