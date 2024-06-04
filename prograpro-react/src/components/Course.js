import React, {useState} from 'react';
import './styles/Course_styles.css';
import { Navbar }   from './Navbar';
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu, DropdownDivider, DropdownToggle, NavDropdown, Popover,  } from 'react-bootstrap';

export const Course = () => {


return (
<div> 
<Navbar />
<div id="page" data-region="mainpage" data-usertour="scroller" class="drag-container">
        
        <section id="region-fullwidthtop-blocks" class="has-blocks" aria-label="region top blocks">
            <div role="main">
                
                <aside id="block-region-full-width-top" class="block-region" data-blockregion="full-width-top" data-droptarget="1"></aside>
            </div>
        </section>
        <div id="topofscroll" class="main-inner">
            

                

            <div class="container" id="yui_3_17_2_1_1712096122004_606">
            <div class="drawer-toggles d-flex" id="yui_3_17_2_1_1712096122004_605">
                    <div class="drawer-toggler drawer-left-toggle open-nav d-print-none" id="yui_3_17_2_1_1712096122004_604">
                    </div>
                    
            </div>
            <header id="page-header" class="header-maxwidth d-print-none">
    <div class="w-100 header-wrapper" id="yui_3_17_2_1_1712096122004_613">
        <div class="d-flex flex-wrap">
            <div id="page-navbar">
                <nav aria-label="Barra de navegación">
    <ol class="breadcrumb m-0"></ol>
</nav>
            </div>
        </div>
        <div class="d-flex align-items-center" id="yui_3_17_2_1_1712096122004_612">
            <div class="dashboard-bar-wrapper" id="yui_3_17_2_1_1712096122004_611">
                        <div class="page-context-header" id="yui_3_17_2_1_1712096122004_610"><div class="page-header-headings"><h1 class="h2 header-heading">PASANTÍA Sec.1 STGO S-SEM. 2024/1</h1></div></div>
            </div>
            <div class="header-actions-container " data-region="header-actions-container">
            </div>
        </div>
    </div>
</header>



                <div class="secondary-navigation edw-tabs-navigation d-print-none">
                    <nav class="moremenu navigation observed">
                        <ul id="moremenu-660c83787c4fc-nav-tabs" role="menubar" class="nav more-nav nav-tabs">
                                        <li data-key="coursehome" class="nav-item" role="none" data-forceintomoremenu="false" title="Curso">
                                                    <a role="menuitem" class="nav-link active active_tree_node " href="https://webc.uai.cl/course/view.php?id=8075" aria-current="true">
                                                        Curso
                                                    </a>
                                        </li>
                                        <li data-key="participants" class="nav-item" role="none" data-forceintomoremenu="false" title="Participantes">
                                                    <a role="menuitem" class="nav-link  " href="https://webc.uai.cl/user/index.php?id=8075" tabindex="-1">
                                                        Participantes
                                                    </a>
                                        </li>
                                        <li data-key="grades" class="nav-item" role="none" data-forceintomoremenu="false" title="Calificaciones">
                                                    <a role="menuitem" class="nav-link  " href="https://webc.uai.cl/grade/report/index.php?id=8075" tabindex="-1">
                                                        Calificaciones
                                                    </a>
                                        </li>
                                        <li data-key="competencies" class="nav-item" role="none" data-forceintomoremenu="false" title="Competencias">
                                                    <a role="menuitem" class="nav-link  " href="https://webc.uai.cl/admin/tool/lp/coursecompetencies.php?courseid=8075" tabindex="-1">
                                                        Competencias
                                                    </a>
                                        </li>
                                        
                            <li role="none" class="nav-item dropdown dropdownmoremenu" data-region="morebutton">
                                <a class="dropdown-toggle nav-link " href="#" id="moremenu-dropdown-660c83787c4fc" role="menuitem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" tabindex="-1">
                                    <span class="edw edw-icon-more"></span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-left" data-region="moredropdown" aria-labelledby="moremenu-dropdown-660c83787c4fc" role="menu">
                                <li data-key="unenrolself" class="nav-item" role="none" data-forceintomoremenu="true" title="Darme de baja en pasantia-1-1-2024">
                                                    <a role="menuitem" class="dropdown-item" href="https://webc.uai.cl/enrol/self/unenrolself.php?enrolid=32703" tabindex="-1">
                                                        Darme de baja en pasantia-1-1-2024
                                                    </a>
                                        </li></ul>
                            </li>
                        </ul>
                    </nav>
                </div>

<div id="page-content" class="pb-4 d-print-block">
    <div id="region-main-box">
        <section id="region-main" aria-label="Contenido">
            <span class="notifications" id="user-notifications"></span>
            <div role="main"><span id="maincontent"></span><div class="course-content"><div id="course-format-660c8378ddac8660c83787226530" class="stateready">
    <h2 class="accesshide">Diagrama de temas</h2>
    
    <ul class="topics" data-for="course_sectionlist">
                <li id="section-0" class="section course-section main  clearfix
                             
                            " data-sectionid="0" data-sectionreturnid="0" data-for="section" data-id="111648" data-number="0" data-indexed="true">
                    <div class="course-section-header d-flex" data-for="section_title" data-id="111648" data-number="0">
                                
                                        <div class="d-flex align-items-center justify-content-between position-relative w-100">
                                            <h3 class="sectionid-111648-title sectionname course-content-item d-flex align-self-stretch align-items-center mb-0 h-bold-3" id="coursecontentsection0" data-for="section_title" data-id="111648" data-number="0">
                                                General
                                            </h3>
                                            <a role="button" data-toggle="collapse" href="#coursecontentcollapse0" id="collapssesection0" aria-expanded="true" aria-controls="coursecontentcollapse0" class="border-0 p-0 m-0 btn icons-collapse-expand justify-content-center
                                                    stretched-link 
                                                   " aria-label="General">
                                            <span class="expanded-icon icon-no-margin" title="Colapsar">
                                                <span class="edw-icon edw-icon-Down-Arrow large"></span>
                                            </span>
                                            <span class="collapsed-icon icon-no-margin" title="Expandir">
                                                <span class="dir-rtl-hide p-0">
                                                    <span class="edw-icon edw-icon-Right-Arrow large"></span>
                                                </span>
                                                <span class="dir-ltr-hide p-0">
                                                    <span class="edw-icon edw-icon-Left-Arrow large"></span>
                                                </span>
                                            </span>
                                            </a>
                                        </div>
                            <div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
                            </div>
                            <div class="flex-fill d-flex justify-content-end align-self-center collapse-all-menu">
                                <a id="collapsesections" class="section-collapsemenu small-info-semibold" href="#" aria-expanded="true" role="button" data-toggle="toggleall" aria-controls="collapssesection0 collapssesection1 collapssesection2 collapssesection3 collapssesection4 collapssesection5 collapssesection6 collapssesection7 collapssesection8 collapssesection9 collapssesection10">
                                    <span class="collapseall text-nowrap">Colapsar todo</span>
                                    <span class="expandall text-nowrap">Expandir todo</span>
                                </a>
                                </div>
                            </div>
                            <div id="coursecontentcollapse0" class="content 
                                    course-content-item-content collapse show
                                ">
                                <div class=" r-my-6" data-for="sectioninfo">
                                        <div class="section_availability course-description-item">
                                        </div>
                            </div>
                                    <ul class="section m-0 p-0 img-text  d-block " data-for="cmlist">
                                                <li class="activity activity-wrapper forum modtype_forum   " id="module-332560" data-for="cmitem" data-id="332560" data-indexed="true">
                                                        <div class="activity-item " data-activityname="Avisos">

                                                                <div class="activity-basis d-flex align-items-center">
                                                                    <div class="d-flex flex-column flex-md-row w-100 align-self-start">
                                                                                    <div class="activity-instance d-flex flex-column">
                                                                                        <div class="activitytitle media  modtype_forum position-relative align-self-start">
                                                                                            <div class="activityiconcontainer collaboration courseicon align-self-start mr-3">
                                                                                                <img src="https://webc.uai.cl/theme/image.php/remui/forum/1712049482/monologo?filtericon=1" class="activityicon " alt="forum icon" loading="lazy"/>
                                                                                            </div>
                                                                                            <div class="media-body align-self-center">
                                                                                                <div class="small h-regular-5 text-font-small">
                                                                                                    Foro
                                                                                                </div>
                                                                                                <div class="activityname h-bold-4 color-font-headings">
                                                                                                                <a href="https://webc.uai.cl/mod/forum/view.php?id=332560" class=" aalink stretched-link" onclick="">        <span class="instancename">Avisos <span class="accesshide "> Foro</span></span>    </a>
                                                                                                            
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                
                                                                            <div class="activity-info mt-1 mt-md-0">
                                                                                    <div data-region="activity-information" data-activityname="Avisos" class="activity-information">
                                                                                    </div>
                                                                            </div>
                                                                    </div>
                                                                
                                                                </div>
                                                                
                                                                <div class="description">
                                                                </div>
                                                        </div>
                                                </li>
                                                <li class="activity activity-wrapper resource modtype_resource   " id="module-344094" data-for="cmitem" data-id="344094" data-indexed="true">
                                                        <div class="activity-item " data-activityname="PROGRAMA DEL CURSO">

                                                                <div class="activity-basis d-flex align-items-center">
                                                                    <div class="d-flex flex-column flex-md-row w-100 align-self-start">
                                                                                    <div class="activity-instance d-flex flex-column">
                                                                                        <div class="activitytitle media  modtype_resource position-relative align-self-start">
                                                                                            <div class="activityiconcontainer content courseicon align-self-start mr-3">
                                                                                                <img src="https://webc.uai.cl/theme/image.php/remui/core/1712049482/f/document-24" class="activityicon " alt="resource icon" loading="lazy"/>
                                                                                            </div>
                                                                                            <div class="media-body align-self-center">
                                                                                                <div class="small h-regular-5 text-font-small">
                                                                                                    Recurso
                                                                                                </div>
                                                                                                <div class="activityname h-bold-4 color-font-headings">
                                                                                                                <a href="https://webc.uai.cl/mod/resource/view.php?id=344094" class=" aalink stretched-link" onclick="">        <span class="instancename">PROGRAMA DEL CURSO <span class="accesshide "> Archivo</span></span>    </a>
                                                                                                            
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                
                                                                            <div class="activity-info mt-1 mt-md-0">
                                                                                    <div data-region="activity-information" data-activityname="PROGRAMA DEL CURSO" class="activity-information">
                                                                                    </div>
                                                                            </div>
                                                                    </div>
                                                                
                                                                </div>
                                                                
                                                                <div class="description">
                                                                </div>
                                                        </div>
                                                </li>
                                               
                                                
                                                
                                        </ul>
                            
                    </div>
                </li>
                <li id="section-1" class="section course-section main  clearfix
                             
                            " data-sectionid="1" data-sectionreturnid="0" data-for="section" data-id="111649" data-number="1" data-indexed="true">
                    <div class="course-section-header d-flex" data-for="section_title" data-id="111649" data-number="1">
                                
                                        <div class="d-flex align-items-center justify-content-between position-relative w-100">
                                            <h3 class="sectionid-111649-title sectionname course-content-item d-flex align-self-stretch align-items-center mb-0 h-bold-3" id="coursecontentsection1" data-for="section_title" data-id="111649" data-number="1">
                                                Feedback entregas pasantía
                                            </h3>
                                            <a role="button" data-toggle="collapse" href="#coursecontentcollapse1" id="collapssesection1" aria-expanded="true" aria-controls="coursecontentcollapse1" class="border-0 p-0 m-0 btn icons-collapse-expand justify-content-center
                                                    stretched-link 
                                                   " aria-label="FEEDBACK">
                                            <span class="expanded-icon icon-no-margin" title="Colapsar">
                                                <span class="edw-icon edw-icon-Down-Arrow large"></span>
                                            </span>
                                            <span class="collapsed-icon icon-no-margin" title="Expandir">
                                                <span class="dir-rtl-hide p-0">
                                                    <span class="edw-icon edw-icon-Right-Arrow large"></span>
                                                </span>
                                                <span class="dir-ltr-hide p-0">
                                                    <span class="edw-icon edw-icon-Left-Arrow large"></span>
                                                </span>
                                            </span>
                                            </a>
                                        </div>
                            <div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
                            </div>
                            </div>
                            <div id="coursecontentcollapse1" class="content 
                                    course-content-item-content collapse show
                                ">
                                <div class=" r-my-6" data-for="sectioninfo">
                                        <div class="section_availability course-description-item">
                                        </div>
                            </div>
                                    <ul class="section m-0 p-0 img-text  d-block " data-for="cmlist">
                                        </ul>
                            
                    </div>
                </li>

                <li id="section-3" class="section course-section main  clearfix
                             
                            " data-sectionid="3" data-sectionreturnid="0" data-for="section" data-id="111651" data-number="3" data-indexed="true">
                    <div class="course-section-header d-flex" data-for="section_title" data-id="111651" data-number="3">
                                
                                        <div class="d-flex align-items-center justify-content-between position-relative w-100">
                                            <h3 class="sectionid-111651-title sectionname course-content-item d-flex align-self-stretch align-items-center mb-0 h-bold-3" id="coursecontentsection3" data-for="section_title" data-id="111651" data-number="3">
                                                AVANCES
                                            </h3>
                                            <a role="button" data-toggle="collapse" href="#coursecontentcollapse3" id="collapssesection3" aria-expanded="true" aria-controls="coursecontentcollapse3" class="border-0 p-0 m-0 btn icons-collapse-expand justify-content-center
                                                    stretched-link 
                                                   " aria-label="PROYECTOS">
                                            <span class="expanded-icon icon-no-margin" title="Colapsar">
                                                <span class="edw-icon edw-icon-Down-Arrow large"></span>
                                            </span>
                                            <span class="collapsed-icon icon-no-margin" title="Expandir">
                                                <span class="dir-rtl-hide p-0">
                                                    <span class="edw-icon edw-icon-Right-Arrow large"></span>
                                                </span>
                                                <span class="dir-ltr-hide p-0">
                                                    <span class="edw-icon edw-icon-Left-Arrow large"></span>
                                                </span>
                                            </span>
                                            </a>
                                        </div>
                            <div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
                            </div>
                            </div>
                            <div id="coursecontentcollapse3" class="content 
                                    course-content-item-content collapse show
                                ">
                                <div class=" r-my-6" data-for="sectioninfo">
                                        <div class="section_availability course-description-item">
                                        </div>
                            </div>
                                    <ul class="section m-0 p-0 img-text  d-block " data-for="cmlist">
            
                                                <li class="activity activity-wrapper turnitintooltwo modtype_turnitintooltwo   " id="module-391568" data-for="cmitem" data-id="391568" data-indexed="true">
                                                        <div class="activity-item " data-activityname="TURNITIN ENTREGA INFORME 3 Y FINAL">

                                                                <div class="activity-basis d-flex align-items-center">
                                                                    <div class="d-flex flex-column flex-md-row w-100 align-self-start">
                                                                                    <div class="activity-instance d-flex flex-column">
                                                                                        <div class="activitytitle media  modtype_turnitintooltwo position-relative align-self-start">
                                                                                            <div class="activityiconcontainer other courseicon align-self-start mr-3">
                                                                                                <img src="https://webc.uai.cl/theme/image.php/remui/turnitintooltwo/1712049482/monologo" class="activityicon " alt="turnitintooltwo icon" loading="lazy"/>
                                                                                            </div>
                                                                                            <div class="media-body align-self-center">
                                                                                                <div class="small h-regular-5 text-font-small">
                                                                                                    Ejercicio 2 de Turnitin
                                                                                                </div>
                                                                                                <div class="activityname h-bold-4 color-font-headings">
                                                                                                                <a href="https://webc.uai.cl/mod/turnitintooltwo/view.php?id=391568" class=" aalink stretched-link" onclick="">        <span class="instancename">Entrega avance 1 <span class="accesshide "> Ejercicio 2 de Turnitin</span></span>    </a>
                                                                                                            
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                
                                                                            <div class="activity-info mt-1 mt-md-0">
                                                                                    <div data-region="activity-information" data-activityname="TURNITIN ENTREGA INFORME 3 Y FINAL" class="activity-information">
                                                                                    </div>
                                                                            </div>
                                                                    </div>
                                                                
                                                                </div>
                                                                
                                                                <div class="description">
                                                                </div>
                                                        </div>
                                                </li>
                                                
                                        </ul>
                            
                    </div>
                </li>


                <li id="section-6" class="section course-section main  clearfix
                             
                            " data-sectionid="6" data-sectionreturnid="0" data-for="section" data-id="111654" data-number="6" data-indexed="true">
                    <div class="course-section-header d-flex" data-for="section_title" data-id="111654" data-number="6">
                                
                                        <div class="d-flex align-items-center justify-content-between position-relative w-100">
                                            <h3 class="sectionid-111654-title sectionname course-content-item d-flex align-self-stretch align-items-center mb-0 h-bold-3" id="coursecontentsection6" data-for="section_title" data-id="111654" data-number="6">
                                                Nuevo tema
                                            </h3>
                                            <a role="button" data-toggle="collapse" href="#coursecontentcollapse6" id="collapssesection6" aria-expanded="true" aria-controls="coursecontentcollapse6" class="border-0 p-0 m-0 btn icons-collapse-expand justify-content-center
                                                    stretched-link 
                                                   " aria-label="Tema 6">
                                            <span class="expanded-icon icon-no-margin" title="Colapsar">
                                                <span class="edw-icon edw-icon-Down-Arrow large"></span>
                                            </span>
                                            <span class="collapsed-icon icon-no-margin" title="Expandir">
                                                <span class="dir-rtl-hide p-0">
                                                    <span class="edw-icon edw-icon-Right-Arrow large"></span>
                                                </span>
                                                <span class="dir-ltr-hide p-0">
                                                    <span class="edw-icon edw-icon-Left-Arrow large"></span>
                                                </span>
                                            </span>
                                            </a>
                                        </div>
                            <div data-region="sectionbadges" class="sectionbadges d-flex align-items-center">
                            </div>
                            </div>
                            <div id="coursecontentcollapse6" class="content 
                                    course-content-item-content collapse show
                                ">
                                <div class=" r-my-6" data-for="sectioninfo">
                                        <div class="section_availability course-description-item">
                                        </div>
                            </div>
                                    <ul class="section m-0 p-0 img-text " data-for="cmlist">
                                        </ul>
                            
                    </div>
                </li>
                
    </ul>
</div></div></div>
            
            

        </section>
    </div>
</div>


</div>
    </div>
    </div>
    </div>
)
}
