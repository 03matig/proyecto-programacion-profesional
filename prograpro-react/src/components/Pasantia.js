import React, {useState} from "react";
import { Navbar } from "./Navbar";
import './styles/Pasantia_styles.css';
import { useNavigate } from "react-router-dom";

export const Pasantia = () => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/Course')
    }

    
    const openModal = (modalType) => {
        if (modalType === 'edit') {
            setEditModalOpen(true);
        } else if (modalType === 'delete') {
            setDeleteModalOpen(true);
        }
    };

    const closeModal = (modalType) => {
        if (modalType === 'edit') {
            setEditModalOpen(false);
        } else if (modalType === 'delete') {
            setDeleteModalOpen(false);
        }
    };


    return (
        <div>
            <div id ="topofscroll" class="main-inner">
                <div class="container">
                    <header id = "page-header" class="header-maxwidth d-print-none">
                        <div class="w-100 header-wrapper">
                            <div class = "d-flex flex-wrap">
                                <div id="page-navbar">
                                        <nav aria-label="Barra de navegación">
                                            <ol class="breadcrumb m-0">
                                                <li class="breadcrumb-item" onClick={handleNavigation}>
                                                    <a href="" title="PASANTÍA Sec.1 STGO S-SEM. 2024/1">PASANTÍA Sec.1 STGO S-SEM. 2024/1</a>
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>  
                            </div>
                            <div class="d-flex align-items-center">
                            <div class="dashboard-bar-wrapper">
                                <div class="page-context-header">
                                    <div class="page-header-image mr-2">
                                        <div class="assessment activityiconcontainer modicon_assign">
                                            <img class="icon activityicon" alt="" aria-hidden="true" src="https://webc.uai.cl/theme/image.php/remui/assign/1715241806/monologo">
                                            </img>
                                        </div>
                                    </div>
                                    <div class="page-header-headings">
                                        <div class="text-muted text-uppercase small line-height-3">Tarea</div>
                                        <h1 class="h2 header-heading">Entrega Informe de Pasantía</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="header-actions-container " data-region="header-actions-container">
                            </div>
                            </div>
                        </div>
                    </header>
                    <div id="page-content" class="pb-4 d-print-block">
                        <div id="box-reg-ppal">
                            <div class="activity-header" data-for="page-activity-header" styles={{color: '#657187'}}>
                                <div data-region="activity-information" data-activityname="Entrega Video Presentación de Avance 1" class="activity-information">
                                    <div data-region="activity-dates" class="activity-dates">
                                        <div class="description-inner">
                                            <div>
                                                <strong>Apertura:</strong> viernes, 26 de abril de 2024, 00:00
                                            </div>
                                            <div>
                                                <strong>Cierre:</strong> domingo, 28 de abril de 2024, 23:59
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="activity-description" id="intro">
                                    <div class="box py-3 generalbox boxaligncenter">
                                        <div class="no-overflow">
                                            <p>Registre directamente el link de YouTube.</p><p>Solo es necesaria una entrega por grupo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="main-caja-blanca" role="main" styles = {{background: '#fff', padding: '32px', borderRadius: '8px',boxShadow: '0 13px 37px rgba(92, 107, 121, .1)'}}>
                                <div class="mb-4">
                                    <div class="row">
                                        <div class="col-xs-6 mr-3">
                                                    <div class="singlebutton">
                                                        <form method="get" action="">
                                                                <input type="hidden" name="id" value="445618"></input>
                                                                <input type="hidden" name="action" value="editsubmission"></input>
                                                            <button type="submit" class="btn btn-secondary" id="single_button6661de3a2ce976" onClick={() => openModal('edit')}>Editar entrega</button>
                                                        </form>
                                                    </div>
                                        </div>
                                        <div class="col-xs-6">
                                                <div class="singlebutton">
                                                    <form method="get" action="">
                                                            <input type="hidden" name="id" value="445618"></input>
                                                            <input type="hidden" name="action" value="removesubmissionconfirm"></input>
                                                        <button type="submit" class="btn btn-secondary" id="single_button6661de3a2ce977" onClick={() => openModal('delete')}>Borrar entrega</button>
                                                    </form>
                                                </div>
                                        </div>
                                    </div>
                                    {isEditModalOpen && (
                                        <div className="modal">
                                            <div className="modal-content">
                                                <span className="close" onClick={() => closeModal('edit')}>&times;</span>
                                                <p>Edita tu entrega aquí...</p>
                                            </div>
                                        </div>
                                    )}
                                    {isDeleteModalOpen && (
                                        <div className="modal">
                                            <div className="modal-content">
                                                <span className="close" onClick={() => closeModal('delete')}>&times;</span>
                                                <p>¿Estás seguro de que deseas borrar tu entrega?</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div class="submissionstatustable">
                                    <h3>Estado de la entrega</h3>
                                    <div class="box py-3 boxaligncenter submissionsummarytable">
                                        <div class="table-responsive">
                                            <table class="generaltable table-bordered">
                                                <tbody>
                                                    <tr class="">
                                                        <th class="cell c0" scope="row">Grupo</th>
                                                        <td class="cell c1 lastcol">Sin asignar</td>
                                                        </tr>
                                                        <tr class="">
                                                        <th class="cell c0" scope="row">Estado de la entrega</th>
                                                        <td class="submissionstatussubmitted cell c1 lastcol">Enviado para calificar</td>
                                                        </tr>
                                                        <tr class="">
                                                        <th class="cell c0" scope="row">Estado de la calificación</th>
                                                        <td class="submissionnotgraded cell c1 lastcol">Sin calificar</td>
                                                        </tr>
                                                        <tr class="">
                                                        <th class="cell c0" scope="row">Tiempo restante</th>
                                                        <td class="latesubmission cell c1 lastcol">La tarea fue enviada 1 hora 33 minutos después</td>
                                                        </tr>
                                                        <tr class="">
                                                        <th class="cell c0" scope="row">Última modificación</th>
                                                        <td class="cell c1 lastcol">lunes, 29 de abril de 2024, 01:32</td>
                                                        </tr>
                                                        <tr class="">
                                                        <th class="cell c0" scope="row">Texto en línea</th>
                                                        <td class="cell c1 lastcol">
                                                            <div class="box py-3 boxaligncenter plugincontentsummary summary_assignsubmission_onlinetext_772639">
                                                                <a class="expandsummaryicon expand_assignsubmission_onlinetext_772639" aria-label="Ver completo" role="button" aria-expanded="false" href="">
                                                                </a>
                                                            </div>
                                                        </td>
                                                        </tr>
                                                        <tr class="lastrow">
                                                        <th class="cell c0" scope="row">Comentarios de la entrega</th>
                                                        <td class="cell c1 lastcol">
                                                            <div class="box py-3 boxaligncenter plugincontentsummary summary_assignsubmission_comments_772639">
                                                                <div class="commentscontainer">
                                                                    <div style={{display:'none'}} id="cmt-tmpl">
                                                                        <div class="comment-message">
                                                                            <div class="comment-message-meta mr-3">
                                                                                <span class="picture">___picture___</span>
                                                                                <span class="user">___name___</span> - <span class="time">___time___</span>
                                                                            </div>
                                                                            <div class="text">___content___</div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="mdl-left">
                                                                        <a class="comment-link" id="comment-link-6661de3a466a5" href="#" role="button" aria-expanded="false">
                                                                            <i class="icon fa fa-caret-right fa-fw " title="Comentarios" role="img" aria-label="Comentarios"></i>
                                                                            <span id="comment-link-text-6661de3a466a5">Comentarios (0)</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
