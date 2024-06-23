import React, {useState, useEffect} from "react";
import './styles/Participantes_styles.css';


export const Participantes = () => {
    const [alumnos, setAlumnos] = useState([]);
    const nombre = localStorage.getItem('nombre');
    const userId = localStorage.getItem('userId');
    const carrera = localStorage.getItem('carrera');
    const rol = localStorage.getItem("userRole");

    const fetchAlumnos = async () => {
        console.log("Enviando request al backend");
        try {
            const response = await fetch('http://localhost:5000/alumnos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                console.info("API Fetch exitoso");
                const data = await response.json();
                setAlumnos(data);
            } else {
                const errorData = await response.json();
                console.error('Error fetching alumnos:', response.status, response.statusText, errorData);
            }
        } catch (error) {
            console.error('Error fetching alumnos:', error);
        }
    };

    useEffect(() => {
        fetchAlumnos();
    }, []);

    const inscribirProfesor = async (alumnoUsername) => {
        try {
            const response = await fetch('http://localhost:5000/inscribir_profesor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    alumno_username: alumnoUsername,
                    profesor_id: userId,
                    profesor_nombre: nombre,
                    profesor_carrera: carrera
                })
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Profesor inscrito con éxito:', data.message);
                // Actualizamos la lista de alumnos después de inscribir un profesor
                fetchAlumnos();
            } else {
                console.error('Error inscribiendo profesor:', data.error);
            }
        } catch (error) {
            console.error('Error inscribiendo profesor:', error);
        }
    };

    return (
        <div>
            <h1 className="titulo">Participantes</h1>
            <div className="table-container">
                {alumnos.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Comisión</th>
                                <th className="table-capacity">Capacidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumnos.map(alumno => (
                                <tr key={alumno.username}>
                                    <td>{alumno.nombre}</td>
                                    <td>
                                        <button onClick={() => inscribirProfesor(alumno.username)}>
                                            Inscribirse
                                        </button>
                                    </td>
                                    <td className="table-capacity">
                                        {alumno.profesores 
                                            ? `${Object.values(alumno.profesores).filter(prof => prof.Nombre).length}/3`
                                            : '0/3'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};
