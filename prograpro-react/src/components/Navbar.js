import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Navbar_styles.css';
import logo from './imagenes/webc-logo.png';

export const Navbar = () => {
    const [webcursosOpen, setWebcursosOpen] = useState(false);
    const [uaiOpen, setUaiOpen] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate();

    const userId = localStorage.getItem('userId');
  
    const toggleWebcursos = () => {
      setWebcursosOpen(!webcursosOpen);
    };
  
    const toggleUai = async () => {
        setUaiOpen(!uaiOpen);
    
        console.log("Asking to backend if user role is 'profesorUniversidad' or superior")
        if (!uaiOpen) {
          try {
            const response = await fetch(`http://localhost:5000/get_user_role?user_id=${userId}`);
            const data = await response.json();

            if (response.ok) {
                console.info(`User role fetched successfully: ${data.role}`);
                setUserRole(data.role);
            } else {
              console.error(data.error);
            }
          } catch (error) {
            console.error('Error fetching user role:', error);
          }
        }
      };

    const handleDashboardClick = () => {
        navigate('/Dashboard'); 
      };

    return (
      <nav className="navbar">
        <div className="navbar-container">
          <a href="https://webc.uai.cl/" class="navbar-brand d-none d-md-flex align-items-center m-0 aabtn" aria-label="WebcursosUAIPregrado - Nombre de la marca" title="WebcursosUAIPregrado">
            <img src="//webc.uai.cl/pluginfile.php/1/theme_remui/logo/1715241806/logo.png" alt="Logo" className="navbar-logo-img" />
          </a>
          <div class="sub-nav">
            <div class="primary-navigation">
                <ul className="navbar-menu">
                  <li class="navbar-item"><a href="#" className="navbar-link">Página Principal</a></li>
                  <li class="navbar-item"><a href="#" className="navbar-link">Área personal</a></li>
                  <li class="navbar-item"><a href="#" className="navbar-link">Mis cursos</a></li>
                  <li className="navbar-item ">
                    <a href="#" className="navbar-link dropdown-toggle" onClick={toggleWebcursos}>Webcursos</a>
                    <ul className={`dropdown-menu ${webcursosOpen ? 'show' : ''}`}>
                      <li><a href="#" className="dropdown-item">Todos los cursos</a></li>
                      <li><a href="#" className="dropdown-item">Tutoriales</a></li>
                      <li><a href="#" className="dropdown-item">Términos y Condiciones</a></li>
                      <li><a href="#" className="dropdown-item">Propiedad Intelectual</a></li>
                    </ul>
                  </li>
                  <li class="navbar-item">
                  <a href="#" className="navbar-link dropdown-toggle" onClick={toggleUai}>UAI</a>
                    <ul className={`dropdown-menu ${uaiOpen ? 'show' : ''}`}>
                      <li><a href="#" className="dropdown-item">Alumnos</a></li>
                      <li><a href="#" className="dropdown-item">Profesores</a></li>
                      <li><a href="#" className="dropdown-item">Correo UAI</a></li>
                      <li><a href="#" className="dropdown-item">Biblioteca</a></li>
                      <li><a href="#" className="dropdown-item">Soporte TI</a></li>
                      {userRole === 'profesorUniversidad' || userRole === 'adminUniversidad' ? (
                      <>
                      <li className="dropdown-divider"></li>
                      <li><a href="#" className="dropdown-item" onClick={handleDashboardClick}>Statistics Dashboard</a></li>
                      </>
                      ) : null}
                    </ul>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    );    
};
  
