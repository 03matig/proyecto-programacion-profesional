import React from 'react';
import './styles/Home_styles.css';
import { useNavigate } from 'react-router-dom';
import './imagenes/plataforma-academica-pregrado.png';
import { Navbar } from './Navbar';


export function Home ({ user, setUser }) {
    const navigate = useNavigate()
    const nombre = localStorage.getItem('nombre')

    const handleclick = () => {
        navigate("/Course");
    };

    return (
        <div>
            <div id="page" data-region="mainpage" data-usertour="scroller" class="drag-container">
                <section id="region-fullwidthtop-blocks" class="has-blocks" aria-label="region top blocks">
                    <div role="main">
                        <aside id="block-region-full-width-top" class="block-region" data-blockregion="full-width-top" data-droptarget="1">
                        </aside>
                    </div>
                </section>
                <div id="topofscroll" class="main-inner">
                    <div class="frontpage-sections container-fluid p-0">
                        <section id="edwiser-slider">
                            <div class="cover card card-inverse rem-staticimage border-0">
                                <div id="header-image" class="col-12" className="col-12"></div>
                                <div class="carousel-caption cover-background centered card-img-overlay white">
                                <div class="text_to_html"></div>
                                </div>
                            </div>
                        </section>        
                    </div>
                    <div class="container">
                        <header id="page-header" class="header-maxwidth d-print-none">
                            <div class="w-100 header-wrapper">
                                <div class="d-flex flex-wrap">
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="dashboard-bar-wrapper">
                                        <div class="page-context-header">
                                            <div class="page-header-headings">
                                                <h1 class="h2 header-heading">
                                                    ¡Hola, {nombre}!
                                                </h1>
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="header-actions-container " data-region="header-actions-container">
                                    </div>
                                </div>
                            </div>
                        </header>

        <div id="page-content" class="pb-3 d-print-block">
            <div id="region-main-box">
                <section id="region-main" aria-label="Contenido">
                    <span class="notifications" id="user-notifications"></span>
                    <div role="main"><span id="maincontent"></span>
                    <div id="frontpage-course-list"><h2>Mis cursos</h2><div class="courses frontpage-course-list-enrolled"><div class="coursebox clearfix odd first" data-courseid="11217" data-type="1"><div class="info"><h3 class="coursename"><a class="aalink" href="https://webc.uai.cl/course/view.php?id=11217">Alumnos S-SEM. 2024/1</a></h3><div class="moreinfo"></div><div class="enrolmenticons"><i class="icon fa fa-sign-in fa-fw " title="Auto-matriculación" role="img" aria-label="Auto-matriculación"></i></div></div><div class="content"><div class="d-flex image-flex"><div class="flex-grow-1"><div class="customfields-container"><div class="customfield customfield_select customfield_edwskilllevel">
            
            </div></div></div></div></div></div><div class="coursebox clearfix even" data-courseid="10626" data-type="1"><div class="info"><h3 class="coursename"><button onClick={() => handleclick()}  className="aalink">PASANTÍA Sec.1 STGO S-SEM. 2024/1</button></h3><div class="moreinfo"></div><div class="enrolmenticons"><i class="icon fa fa-sign-in fa-fw " title="Auto-matriculación" role="img" aria-label="Auto-matriculación"></i></div></div><div class="content"><div class="d-flex"><div class="flex-grow-1"><ul class="teachers"><li className='marker'><span class="font-weight-bold">Profesor guía: </span> <button onClick={() => handleclick()} className="profesor" ><span className="profesor">Jorge Almirón</span></button></li></ul><div class="customfields-container"><div class="customfield customfield_select customfield_edwskilllevel">
            
            </div></div></div></div></div></div><div class="coursebox clearfix odd" data-courseid="1526" data-type="1"><div class="info"><h3 class="coursename"><a class="aalink" href="https://webc.uai.cl/course/view.php?id=1526">Centro de Asesoramiento y Desarrollo Estudiantil Santiago (CADE STGO.)</a></h3><div class="moreinfo"></div><div class="enrolmenticons"><i class="icon fa fa-sign-in fa-fw " title="Auto-matriculación" role="img" aria-label="Auto-matriculación"></i></div></div><div class="content"><div class="d-flex"><div class="flex-grow-1"><div class="customfields-container"><div class="customfield customfield_select customfield_edwskilllevel">
            
            </div></div></div></div></div></div><div class="coursebox clearfix even" data-courseid="1740" data-type="1"><div class="info"><h3 class="coursename"><a class="aalink" href="https://webc.uai.cl/course/view.php?id=1740">DAE Santiago</a></h3><div class="moreinfo"></div><div class="enrolmenticons"><i class="icon fa fa-sign-in fa-fw " title="Auto-matriculación" role="img" aria-label="Auto-matriculación"></i></div></div><div class="content"><div class="d-flex"><div class="flex-grow-1"><div class="summary"><div class="no-overflow"><p>Revisa toda la información de la universidad y nuestro campus Peñalolén: Iniciativas estudiantiles, Becas, Talleres, Eventos y más</p></div></div><div class="customfields-container"><div class="customfield customfield_select customfield_edwskilllevel">
                            
            </div></div></div></div></div></div><div class="coursebox clearfix even" data-courseid="3743" data-type="1"><div class="info"><h3 class="coursename"><a class="aalink" href="https://webc.uai.cl/course/view.php?id=3743">SECRETARÍA GENERAL UAI</a></h3><div class="moreinfo"></div></div><div class="content"><div class="d-flex"><div class="flex-grow-1"><div class="summary"><div class="no-overflow"><p>En este curso&nbsp;encontrarán un Boletín con temas legales relevantes para ustedes, y carpetas con información importante de <a class="autolink" title="TEMAS ACADÉMICOS" href="https://webc.uai.cl/mod/folder/view.php?id=185881">temas académicos</a>, disciplinarios, entre otros.</p></div></div><div class="customfields-container"><div class="customfield customfield_select customfield_edwskilllevel">
            
            </div></div></div></div></div></div>
            <div class="paging paging-morelink"><a class="btn btn-secondary" href="https://webc.uai.cl/course/index.php">Todos los cursos</a></div></div></div><span class="skip-block-to" id="skipmycourses"></span><br/></div>
                    
                    

                </section>
            </div>
        </div>




        </div>
            </div>
            </div>
        </div>
    )

}
