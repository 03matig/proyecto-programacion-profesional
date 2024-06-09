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
