import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/VistaCrearZoom_styles.css';

export const VistaCrearZoom = () => {
    const navigate = useNavigate();
    const [meetingDetails, setMeetingDetails] = useState({
        topic: '',
        start_time: '',
        duration: '',
        agenda: ''
    });
    const [meetingData, setMeetingData] = useState(null);
    const [error, setError] = useState(null);

    const handleNavigation = () => {
        navigate('/Course');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeetingDetails({ ...meetingDetails, [name]: value });
    };

    const createMeeting = async () => {
        try {
            const response = await fetch('http://localhost:5000/zoom/create_meeting', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include', // Incluye las credenciales (cookies)
                body: JSON.stringify(meetingDetails)
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error al crear la reunión');
            }
    
            const data = await response.json();
            setMeetingData(data);
            setError(null); // Limpia cualquier error previo
            
        } catch (error) {
            console.error('Error al crear la reunión:', error);
            setError(error.message);
            if (error.message.includes("Not authenticated")) {
                window.location.href = "http://localhost:5000/zoom/login";
            }
        }
    };

    return (
        <div>
            <div id="topofscroll" className="main-inner">
                <div className="container">
                    <header id="page-header" className="header-maxwidth d-print-none">
                        <div className="w-100 header-wrapper">
                            <div className="d-flex flex-wrap">
                                <div id="page-navbar">
                                    <nav aria-label="Barra de navegación">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item" onClick={handleNavigation}>
                                                <a href="#" title="PASANTÍA Sec.1 STGO S-SEM. 2024/1">PASANTÍA Sec.1 STGO S-SEM. 2024/1</a>
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="">
                                    <div className="page-context-header">
                                        <div className="page-header-image mr-2">
                                            <div className="content activityiconcontainer modicon_assign" style={{ backgroundColor: '#399be2' }}>
                                                <img className="icon activityicon" alt="" aria-hidden="true" src="https://webc.uai.cl/theme/image.php/remui/url/1715241806/monologo?filtericon=1">
                                                </img>
                                            </div>
                                        </div>
                                        <div className="page-header-headings">
                                            <div className="text-muted text-uppercase small line-height-3">FUNCTION</div>
                                            <h1 className="h2 header-heading">Crear Link de Zoom</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-actions-container " data-region="header-actions-container">
                                </div>
                            </div>
                        </div>
                    </header>
                    <div id="page-content" className="pb-4 d-print-block">
                        <div id="region-main-box">
                            <div role="main">
                                <div className="urlworkaround">
                                    <form onSubmit={(e) => { e.preventDefault(); createMeeting(); }}>
                                        <label>
                                            Tema:
                                            <input type="text" name="topic" value={meetingDetails.topic} onChange={handleChange} required />
                                        </label>
                                        <br />
                                        <label>
                                            Hora de inicio (YYYY-MM-DDTHH:MM:SSZ):
                                            <input type="datetime-local" name="start_time" value={meetingDetails.start_time} onChange={handleChange} required />
                                        </label>
                                        <br />
                                        <label>
                                            Duración (minutos):
                                            <input type="number" name="duration" value={meetingDetails.duration} onChange={handleChange} required />
                                        </label>
                                        <br />
                                        <label>
                                            Agenda:
                                            <textarea name="agenda" value={meetingDetails.agenda} onChange={handleChange} required />
                                        </label>
                                        <br />
                                        <button type="submit" className="zoom-button">Crear Link de Zoom</button>
                                    </form>
                                    {error && <p className="error">{error}</p>}
                                    {meetingData && (
                                        <div className="meeting-details">
                                            <h3>Detalles de la Reunión:</h3>
                                            <p>Tema: {meetingData.topic}</p>
                                            <p>Inicio: {meetingData.start_time}</p>
                                            <p>Duración: {meetingData.duration} minutos</p>
                                            <p>Enlace: <a href={meetingData.join_url} target="_blank" rel="noopener noreferrer">Unirse a la reunión</a></p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
