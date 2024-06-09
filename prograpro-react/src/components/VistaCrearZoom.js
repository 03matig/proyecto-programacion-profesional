import React from "react";
import { Navbar } from "./Navbar";
import './styles/VistaCrearZoom_styles.css';
import { useNavigate } from "react-router-dom";

export const VistaCrearZoom = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/Course');
    };

    return (
        <div>
            <div id="topofscroll" class="main-inner">
                <div class="container">
                    <header id="page-header" class="header-maxwidth d-print-none">
                        <div class="w-100 header-wrapper">
                            <div class="d-flex flex-wrap">
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
                                <div class="">
                                    <div class="page-context-header">
                                        <div class="page-header-image mr-2">
                                            <div class="content activityiconcontainer modicon_assign" style={{backgroundColor:'#399be2'}}>
                                                <img class="icon activityicon" alt="" aria-hidden="true" src="https://webc.uai.cl/theme/image.php/remui/url/1715241806/monologo?filtericon=1">
                                                </img>
                                            </div>
                                        </div>
                                        <div class="page-header-headings">
                                            <div class="text-muted text-uppercase small line-height-3">FUNCTION</div>
                                            <h1 class="h2 header-heading">Crear Link de Zoom</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="header-actions-container " data-region="header-actions-container">
                                </div>
                            </div>
                        </div>
                    </header>
                    <div id="page-content" class="pb-4 d-print-block">
                        <div id="region-main-box">
                            <div role="main" >
                                <div class="urlworkaround">Haga clic en el enlace <a href="https://www.npmjs.com/package/react-i18next">Multilenguaje - react-i18next</a> para abrir el recurso.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
