import React, {useState} from 'react';
import './styles/Navbar_styles.css';

export const Navbar = () => {


return (

<div>
        
<nav class="navbar fixed-top navbar-expand 0  " aria-label="Navegación del sitio">
    
    <a href="https://webc.uai.cl/" class="navbar-brand d-none d-md-flex align-items-center m-0 aabtn" aria-label="WebcursosUAIPregrado - Nombre de la marca" title="WebcursosUAIPregrado">
                <img src="//webc.uai.cl/pluginfile.php/1/theme_remui/logo/1712049482/logo.png" class="navbar-brand-logo logo"/>



    </a>

    <div class="sub-nav">
        <div class="navbar-toggler-wrapper">
            <button class="navbar-toggler aabtn d-block d-lg-none border-0 h-100 p-0" data-toggler="drawers" data-action="toggle" data-target="theme_remui-drawers-primary" data-disabled-toggle="undefined" data-toggle="undefined" data-original-title="" title="">
                <span class="edw-icon edw-icon-Mobile-menu"></span>
                <span class="sr-only">Panel lateral</span>
            </button>
        </div>

            <div class="primary-navigation">
                <nav class="moremenu navigation observed">
                    <ul id="moremenu-660c1c3e91285-navbar-nav" role="menubar" class="nav more-nav navbar-nav">
                                <li data-key="coursecat" class="dropdown nav-item" role="none" data-forceintomoremenu="false">
                                    <a class="dropdown-toggle nav-link  catselector-menu " id="drop-down-660c1c3e91285" role="menuitem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#" aria-controls="drop-down-menu-660c1c3e91285" tabindex="-1" title="Categorías">
                                        Categorías
                                    </a>
                                    <div class="dropdown-menu" role="menu" id="drop-down-menu-660c1c3e91285" aria-labelledby="drop-down-660c1c3e91285"><div class="simplesearchform edw-search-field catsearchfield p-3"><div class="input-group d-flex align-items-center"><label for="header-category-searchinput"><span class="sr-only">Search</span></label><div class="input-group-prepend"><button type="submit" class="btn btn-submit" data-action="submit"><span class="edw-icon edw-icon-Search"></span><span class="sr-only">Buscar categorías</span></button></div><input tabindex="1" type="text" id="header-category-searchinput" class="catsearch form-control withclear navigation-text" placeholder="Buscar categorías" aria-label="Buscar categorías" name="catsearch"/></div></div>
                                                    <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/index.php?categoryid=all" tabindex="-1">Todas las categorías</a>
                                                    <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/index.php?categoryid=2" tabindex="-1"><div class="text_to_html">FACULTAD DE PREGRADO</div></a>
                                                    <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/index.php?categoryid=16" tabindex="-1"><div class="text_to_html">FACULTAD DE PREGRADO/CURSOS ADMIN STGO-VIÑA (DA...</div></a>
                                                    <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/index.php?categoryid=26" tabindex="-1"><div class="text_to_html">FACULTAD DE PREGRADO/CURSOS ADMIN STGO-VIÑA (DA.../SANTIAGO</div></a>
                                                    <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/index.php?categoryid=27" tabindex="-1"><div class="text_to_html">FACULTAD DE PREGRADO/CURSOS ADMIN STGO-VIÑA (DA.../VIÑA DEL MAR</div></a>
                                                    <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/index.php?categoryid=5" tabindex="-1"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO</div></a>
                                                    <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/index.php?categoryid=218" tabindex="-1"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO/CURSOS MANUALES (COORDINACI...</div></a>
                                                    <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/index.php?categoryid=29" tabindex="-1"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO/DEPORTE</div></a>
                                                    <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/index.php?categoryid=241" tabindex="-1"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO/2024</div></a>
                                                    <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/index.php?categoryid=242" tabindex="-1"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO/2024/PRIMER SEMESTRE</div></a>
                                                    <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/index.php?categoryid=243" tabindex="-1"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO/2024/PRIMER SEMESTRE/METACURSOS</div></a>
                                                    <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/index.php?categoryid=197" tabindex="-1"><div class="text_to_html">FACULTAD DE PREGRADO/SEGUNDO CICLO (QUINTOS AÑO.../2024/SANTIAGO/TRIMESTRAL - (PER)</div></a>
                                                    <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/index.php?categoryid=207" tabindex="-1"><div class="text_to_html">FACULTAD DE PREGRADO/SEGUNDO CICLO (QUINTOS AÑO.../2024/SANTIAGO/TRIMESTRAL - (PER)/TRIMESTRE I</div></a>
                                                    <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/index.php?categoryid=220" tabindex="-1"><div class="text_to_html">RESTAURACIÓN DE CURSOS</div></a>
                                    </div>
                                </li>
                                <li data-key="home" class="nav-item" role="none" data-forceintomoremenu="false" title="Página Principal">
                                            <a role="menuitem" class="nav-link active " href="https://webc.uai.cl/" aria-current="true">
                                                Página Principal
                                            </a>
                                </li>
                                <li data-key="myhome" class="nav-item" role="none" data-forceintomoremenu="false" title="Área personal">
                                            <a role="menuitem" class="nav-link  " href="https://webc.uai.cl/my/" tabindex="-1">
                                                Área personal
                                            </a>
                                </li>
                                <li data-key="mycourses" class="nav-item" role="none" data-forceintomoremenu="false" title="Mis cursos">
                                            <a role="menuitem" class="nav-link  " href="https://webc.uai.cl/my/courses.php" tabindex="-1">
                                                Mis cursos
                                            </a>
                                </li>
                                <li data-key="" class="dropdown nav-item" role="none" data-forceintomoremenu="false">
                                    <a class="dropdown-toggle nav-link  " id="drop-down-660c1c3e91078" role="menuitem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#" aria-controls="drop-down-menu-660c1c3e91078" tabindex="-1" title="Webcursos">
                                        Webcursos
                                    </a>
                                    <div class="dropdown-menu" role="menu" id="drop-down-menu-660c1c3e91078" aria-labelledby="drop-down-660c1c3e91078">
                                                    <a class="dropdown-item" role="menuitem" href="http://webc.uai.cl/course/index.php" tabindex="-1">Todos los Cursos</a>
                                                    <a class="dropdown-item" role="menuitem" href="https://www.youtube.com/channel/UCohQl-NGcjQnsKlpQmvHdAw" tabindex="-1">Tutoriales</a>
                                                    <a class="dropdown-item" role="menuitem" href="http://webcursos.uai.cl/terminos.html" tabindex="-1">Términos y Condiciones</a>
                                                    <a class="dropdown-item" role="menuitem" href="https://webcursos.uai.cl/mod/page/view.php?id=907698" tabindex="-1">Propiedad Intelectual</a>
                                    </div>
                                </li>
                                <li data-key="" class="dropdown nav-item" role="none" data-forceintomoremenu="false">
                                    <a class="dropdown-toggle nav-link  " id="drop-down-660c1c3e910c8" role="menuitem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#" aria-controls="drop-down-menu-660c1c3e910c8" tabindex="-1" title="UAI">
                                        UAI
                                    </a>
                                    <div class="dropdown-menu" role="menu" id="drop-down-menu-660c1c3e910c8" aria-labelledby="drop-down-660c1c3e910c8">
                                                    <a class="dropdown-item" role="menuitem" href="https://alumno.uai.cl/" tabindex="-1">Alumnos</a>
                                                    <a class="dropdown-item" role="menuitem" href="https://docentes.uai.cl/" tabindex="-1">Profesores</a>
                                                    <a class="dropdown-item" role="menuitem" href="http://correo.uai.cl/" tabindex="-1">Correo UAI</a>
                                                    <a class="dropdown-item" role="menuitem" href="http://www.uai.cl/biblioteca" tabindex="-1">Biblioteca</a>
                                                    <a class="dropdown-item" role="menuitem" href="http://webti.uai.cl/" tabindex="-1">Soporte TI</a>
                                    </div>
                                </li>
                        <li role="none" class="nav-item dropdown dropdownmoremenu d-none" data-region="morebutton">
                            <a class="dropdown-toggle nav-link " href="#" id="moremenu-dropdown-660c1c3e91285" role="menuitem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" tabindex="-1">
                                <span class="edw edw-icon-more"></span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-left" data-region="moredropdown" aria-labelledby="moremenu-dropdown-660c1c3e91285" role="menu">
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>


        <div id="usernavigation" class="navbar-nav ml-auto">
                <div class="edwiser-navigation">
                    <nav class="moremenu navigation observed">
                        <ul id="moremenu--" role="menubar" class="nav more-nav ">
                                    <li data-key="recentcourses" class="dropdown nav-item" role="none" data-forceintomoremenu="false">
                                        <a class="dropdown-toggle nav-link  " id="drop-down-" role="menuitem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#" aria-controls="drop-down-menu-" tabindex="0" aria-label="Menú de cursos recientes" title="Recientes" aria-current="true">
                                            Recientes
                                        </a>
                                        <div class="dropdown-menu" role="menu" id="drop-down-menu-" aria-labelledby="drop-down-">
                                                        <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/view.php?id=1542" tabindex="-1"><div class="text_to_html">AUTOSERVICIO</div></a>
                                                        <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/view.php?id=10630" tabindex="-1"><div class="text_to_html">PROGRAMACIÓN PROFESIONAL Sec.2 STGO S-SEM. 2024/1</div></a>
                                                        <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/view.php?id=8476" tabindex="-1"><div class="text_to_html">SEGURIDAD EN TI Sec.1 STGO S-SEM. 2023/2</div></a>
                                                        <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/view.php?id=10263" tabindex="-1"><div class="text_to_html">GESTIÓN DE OPERACIONES Sec.2 STGO S-SEM. 2024/1</div></a>
                                                        <a class="dropdown-item" role="menuitem" href="https://webc.uai.cl/course/view.php?id=10623" tabindex="-1"><div class="text_to_html">ESTRUCTURA DE DATOS Y ALGORITMOS Sec.1 STGO S-SEM. 2024/1</div></a>
                                        </div>
                                    </li>
                            <li role="none" class="nav-item dropdown dropdownmoremenu d-none" data-region="morebutton">
                                <a class="dropdown-toggle nav-link " href="#" id="moremenu-dropdown-" role="menuitem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" tabindex="-1">
                                    <span class="edw edw-icon-more"></span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-left" data-region="moredropdown" aria-labelledby="moremenu-dropdown-" role="menu">
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            <div class="popover-region collapsed popover-region-notifications" id="nav-notification-popover-container" data-userid="345024" data-region="popover-region">
<div class="popover-region-toggle nav-link icon-no-margin" data-region="popover-region-toggle" role="button" aria-controls="popover-region-container-660c1c3eab190660c1c3ea94a02" aria-haspopup="true" aria-label=" Mostrar la ventana de notificaciones cuando no hay ninguna   " tabindex="0">
            <i class="icon fa edw-icon edw-icon-Notification fa-fw " title="Mostrar/ocultar menú de notificaciones" role="img" aria-label="Mostrar/ocultar menú de notificaciones"></i>
    <div class="count-container hidden" data-region="count-container" aria-hidden="true">
        0
    </div>

</div>
<div id="popover-region-container-660c1c3eab190660c1c3ea94a02" class="popover-region-container" data-region="popover-region-container" aria-expanded="false" aria-hidden="true" aria-label="Ventana de notificación" role="region">
    <div class="popover-region-header-container">
        <h3 class="popover-region-header-text h-semibold-4" data-region="popover-region-header-text">Notificaciones</h3>
        <div class="popover-region-header-actions" data-region="popover-region-header-actions">        <a class="mark-all-read-button edw-paragraph-color  text-link-regular" href="#" title="Marcar como leído" data-action="mark-all-read" role="button" aria-label="Marcar como leído">
        <p class="m-0 text-link-regular">Mark all read</p>
        <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Cargando" role="img" aria-label="Cargando"></i></span>
    </a>
        <a href="https://webc.uai.cl/message/notificationpreferences.php" title="Preferencias de notificación" aria-label="Preferencias de notificación">
            <i class="icon fa edw-icon edw-icon-Setting fa-fw " aria-hidden="true"></i></a>
</div>
    </div>
    <div class="popover-region-content-container" data-region="popover-region-content-container">
        <div class="popover-region-content" data-region="popover-region-content">
                    <div class="all-notifications" data-region="all-notifications" role="log" aria-busy="false" aria-atomic="false" aria-relevant="additions"></div>
    <div class="empty-message" tabindex="0" data-region="empty-message">No tienes notificaciones</div>

        </div>
        <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Cargando" role="img" aria-label="Cargando"></i></span>
    </div>
            <a class="see-all-link" href="https://webc.uai.cl/message/output/popup/notifications.php">
                <div class="popover-region-footer-container">
                    <div class="popover-region-seeall-text text-link-regular">Ver todas las notificaciones</div>
                </div>
            </a>
</div>
</div><div class="popover-region collapsed popover-region-message" id="nav-message-popover-container" data-region="popover-region-messages">
<a id="message-drawer-toggle-660c1c3eabe51660c1c3ea94a03" class="nav-link popover-region-toggle position-relative icon-no-margin" href="#" role="button">
    <i class="icon fa edw-icon edw-icon-Comment-03 fa-fw " title="Mostrar/ocultar cajón de mensajería" role="img" aria-label="Mostrar/ocultar cajón de mensajería"></i>
    <div class="count-container hidden" data-region="count-container">
        <span aria-hidden="true">0</span>
        <span class="sr-only">Hay 0 conversaciones sin leer</span>
    </div>
</a>
<span class="sr-only sr-only-focusable" data-region="jumpto" tabindex="-1"></span></div>

            <div class="d-flex usermenu-wrapper">
                <div class="divider  h-75 align-self-center"></div>
                <div class="d-flex align-items-stretch usermenu-container" data-region="usermenu">
                    <div class="usermenu">
                            <div class="dropdown show">
                                <a href="#" role="button" id="user-menu-toggle" data-toggle="dropdown" aria-label="Menú de usuario" aria-haspopup="true" aria-controls="user-action-menu" class="btn dropdown-toggle" title="Menú de usuario">
                                    <span class="userbutton">
                                        <span class="avatars">
                                                <span class="avatar current">
                                                    <span class="userinitials size-35">FS</span>
                                                </span>
                                        </span>
                                    </span>
                                </a>
                                <div id="user-action-menu" class="dropdown-menu dropdown-menu-right">
                                    <div id="usermenu-carousel" class="carousel slide" data-touch="false" data-interval="false" data-keyboard="false">
                                        <div class="carousel-inner">
                                            <div id="carousel-item-main" class="carousel-item active" role="menu" tabindex="-1" aria-label="Usuario">
                                                        <a href="https://webc.uai.cl/user/profile.php" class="dropdown-item" role="menuitem" tabindex="-1" title="Perfil">
                                                            <span class="edw-icon edw-icon-User"></span>
                                                
                                                            Perfil
                                                        </a>
                                                    
                                                        <a href="https://webc.uai.cl/grade/report/overview/index.php" class="dropdown-item" role="menuitem" tabindex="-1" title="Calificaciones">
                                                            <span class="edw-icon edw-icon-Grade"></span>
                                                
                                                            Calificaciones
                                                        </a>
                                                    
                                                        <a href="https://webc.uai.cl/calendar/view.php?view=month" class="dropdown-item" role="menuitem" tabindex="-1" title="Calendario">
                                                            <span class="edw-icon edw-icon-Calendar"></span>
                                                
                                                            Calendario
                                                        </a>
                                                    
                                                        <a href="https://webc.uai.cl/user/files.php" class="dropdown-item" role="menuitem" tabindex="-1" title="Archivos privados">
                                                            <span class="edw-icon edw-icon-Private-Files"></span>
                                                
                                                            Archivos privados
                                                        </a>
                                                    
                                                        <a href="https://webc.uai.cl/reportbuilder/index.php" class="dropdown-item" role="menuitem" tabindex="-1" title="Informes">
                                                            <span class="edw-icon edw-icon-Report"></span>
                                                
                                                            Informes
                                                        </a>
                                                    
                                                    <div class="dropdown-divider"></div>
                                                        <a href="https://webc.uai.cl/user/preferences.php" class="dropdown-item" role="menuitem" tabindex="-1" title="Preferencias">
                                                            <span class="edw-icon edw-icon-Preferences"></span>
                                                
                                                            Preferencias
                                                        </a>
                                                    
                                                        <a href="#" class="carousel-navigation-link dropdown-item" role="menuitem" tabindex="-1" data-carousel-target-id="carousel-item-660c1c3e9156b" title="Idioma">
                                                            <span class="edw-icon edw-icon-Language"></span>
                                                            Idioma
                                                        </a>
                                                    <div class="dropdown-divider"></div>
                                                        <a href="https://webc.uai.cl/login/logout.php?sesskey=96DY7SqkKR" class="dropdown-item" role="menuitem" tabindex="-1" title="Cerrar sesión">
                                                            <span class="edw-icon edw-icon-Logout"></span>
                                                
                                                            Cerrar sesión
                                                        </a>
                                                    
                                            </div>
                                                <div id="carousel-item-660c1c3e9156b" class="carousel-item submenu" tabindex="-1" aria-label="Selector de idioma">
                                                    <div class="d-flex flex-column h-100">
                                                        <div class="header">
                                                            <button type="button" class="btn btn-icon carousel-navigation-link text-decoration-none text-body" data-carousel-target-id="carousel-item-main" aria-label="Ir atrás al menú de usuario">
                                                                <span class="dir-rtl-hide"><img class="icon " alt="" aria-hidden="true" src="https://webc.uai.cl/theme/image.php/remui/core/1712049482/i/arrow-left"/></span>
                                                                <span class="dir-ltr-hide"><img class="icon " alt="" aria-hidden="true" src="https://webc.uai.cl/theme/image.php/remui/core/1712049482/i/arrow-right"/></span>
                                                            </button>
                                                            <span class="pl-2" id="carousel-item-title-660c1c3e9156b">Selector de idioma</span>
                                                        </div>
                                                        <div class="dropdown-divider"></div>
                                                        <div class="items h-100 overflow-auto" role="menu" aria-labelledby="carousel-item-title-660c1c3e9156b">
                                                                    <a href="https://webc.uai.cl/?lang=en" class="dropdown-item" role="menuitem" tabindex="-1" lang="en" title="English ‎(en)‎">
                                                                        English ‎(en)‎
                                                                    </a>
                                                                    <a href="#" class="dropdown-item" role="menuitem" tabindex="-1" aria-current="true" title="Español - Internacional ‎(es)‎">
                                                                        Español - Internacional ‎(es)‎
                                                                    </a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="divider  h-75 align-self-center"></div>
            </div>

            
        </div>
    </div>

</nav>


<div class="drawer drawer-left drawer-primary d-print-none show" data-region="fixed-drawer" id="theme_remui-drawers-primary" data-preference="" data-state="show-drawer-primary" data-forceopen="0" data-close-on-resize="1">
    <div class="drawerheader" id="yui_3_17_2_1_1713594697267_71">
        <a href="https://webc.uai.cl/" class="navbar-brand align-items-center m-0 aabtn" aria-label="WebcursosUAIPregrado - Nombre de la marca" title="WebcursosUAIPregrado">
                    <img src="//webc.uai.cl/pluginfile.php/1/theme_remui/logo/1712049482/logo.png" class="logo"/>



        </a>
        <button class="btn drawertoggle icon-no-margin d-flex" data-toggler="drawers" data-action="closedrawer" data-target="theme_remui-drawers-primary" data-placement="right" data-disabled-toggle="tooltip" data-toggle="tooltip" data-original-title="Cerrar caja" data-lastused="false" id="yui_3_17_2_1_1713594697267_70">
            <span class="edw-icon edw-icon-Cancel" id="yui_3_17_2_1_1713594697267_69"></span>
        </button>
    </div>
    <div class="drawercontent drag-container" data-usertour="scroller">
                <div class="list-group">
                <a id="drop-down-catselector-menu" href="#" class="list-group-item list-group-item-action icons-collapse-expand collapsed d-flex justify-content-between coursecat" data-toggle="collapse" data-target="#drop-down-menu-catselector-menu" aria-expanded="false" aria-controls="drop-down-menu-catselector-menu">
                    Categorías
                    <span class=" expanded-icon icon-no-margin ">
                       <span class="edw-icon edw-icon-UpArrow"></span>
                        <span class="sr-only">
                            Colapsar
                        </span>
                    </span>
                    <span class="collapsed-icon icon-no-margin ">
                        <span class="edw-icon edw-icon-Down-Arrow"></span>
                        <span class="sr-only">
                            Expandir
                        </span>
                    </span>
                </a>
                <div class="collapse list-group-item p-0 border-0" role="menu" id="drop-down-menu-catselector-menu" aria-labelledby="drop-down-catselector-menu">
                             <a href="https://webc.uai.cl/course/index.php?categoryid=all" class="list-group-item list-group-item-action">Todas las categorías</a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=2" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=16" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/CURSOS ADMIN STGO-VIÑA (DA...</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=26" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/CURSOS ADMIN STGO-VIÑA (DA.../SANTIAGO</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=27" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/CURSOS ADMIN STGO-VIÑA (DA.../VIÑA DEL MAR</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=28" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/CURSOS ADMIN STGO-VIÑA (DA.../INNOVACIÓN PREGRADO</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=5" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=218" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO/CURSOS MANUALES (COORDINACI...</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=29" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO/DEPORTE</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=172" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO/DEPORTE/2023</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=111" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO/2023</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=184" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO/2023/SEGUNDO SEMESTRE</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=186" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO/2023/SEGUNDO SEMESTRE/CURSOS MANUALES/METACURSOS</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=232" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO/2023/SEMESTRE DE VERANO</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=241" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO/2024</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=242" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO/2024/PRIMER SEMESTRE</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=243" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/PREGRADO SANTIAGO/2024/PRIMER SEMESTRE/METACURSOS</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=119" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/INCOMING</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=120" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/INCOMING/CURSOS MANUALES</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=121" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/INCOMING/CURSOS MANUALES/2023</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=160" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/SEGUNDO CICLO (QUINTOS AÑO...</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=200" class="list-group-item list-group-item-action"><div class="text_to_html">FACULTAD DE PREGRADO/SEGUNDO CICLO (QUINTOS AÑO.../2023</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=127" class="list-group-item list-group-item-action"><div class="text_to_html">DESARROLLO</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=128" class="list-group-item list-group-item-action"><div class="text_to_html">DESARROLLO/2023</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=253" class="list-group-item list-group-item-action"><div class="text_to_html">DESARROLLO/2024</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=254" class="list-group-item list-group-item-action"><div class="text_to_html">DESARROLLO/2024/Mindfree</div></a>
                             <a href="https://webc.uai.cl/course/index.php?categoryid=220" class="list-group-item list-group-item-action"><div class="text_to_html">RESTAURACIÓN DE CURSOS</div></a>
                </div>
                <a href="https://webc.uai.cl/" class="list-group-item list-group-item-action active  home" aria-current="true">
                    Página Principal
                </a>
                <a href="https://webc.uai.cl/my/" class="list-group-item list-group-item-action   myhome">
                    Área personal
                </a>
                <a href="https://webc.uai.cl/my/courses.php" class="list-group-item list-group-item-action   mycourses">
                    Mis cursos
                </a>
                <a id="drop-down-1" href="#" class="list-group-item list-group-item-action icons-collapse-expand collapsed d-flex justify-content-between " data-toggle="collapse" data-target="#drop-down-menu-1" aria-expanded="false" aria-controls="drop-down-menu-1">
                    Webcursos
                    <span class=" expanded-icon icon-no-margin ">
                       <span class="edw-icon edw-icon-UpArrow"></span>
                        <span class="sr-only">
                            Colapsar
                        </span>
                    </span>
                    <span class="collapsed-icon icon-no-margin ">
                        <span class="edw-icon edw-icon-Down-Arrow"></span>
                        <span class="sr-only">
                            Expandir
                        </span>
                    </span>
                </a>
                <div class="collapse list-group-item p-0 border-0" role="menu" id="drop-down-menu-1" aria-labelledby="drop-down-1">
                             <a href="http://webc.uai.cl/course/index.php" class="list-group-item list-group-item-action">Todos los Cursos</a>
                             <a href="https://www.youtube.com/channel/UCohQl-NGcjQnsKlpQmvHdAw" class="list-group-item list-group-item-action">Tutoriales</a>
                             <a href="http://webcursos.uai.cl/terminos.html" class="list-group-item list-group-item-action">Términos y Condiciones</a>
                             <a href="https://webcursos.uai.cl/mod/page/view.php?id=907698" class="list-group-item list-group-item-action">Propiedad Intelectual</a>
                </div>
                <a id="drop-down-10" href="#" class="list-group-item list-group-item-action icons-collapse-expand collapsed d-flex justify-content-between " data-toggle="collapse" data-target="#drop-down-menu-10" aria-expanded="false" aria-controls="drop-down-menu-10">
                    UAI
                    <span class=" expanded-icon icon-no-margin ">
                       <span class="edw-icon edw-icon-UpArrow"></span>
                        <span class="sr-only">
                            Colapsar
                        </span>
                    </span>
                    <span class="collapsed-icon icon-no-margin ">
                        <span class="edw-icon edw-icon-Down-Arrow"></span>
                        <span class="sr-only">
                            Expandir
                        </span>
                    </span>
                </a>
                <div class="collapse list-group-item p-0 border-0" role="menu" id="drop-down-menu-10" aria-labelledby="drop-down-10">
                             <a href="https://alumno.uai.cl/" class="list-group-item list-group-item-action">Alumnos</a>
                             <a href="https://docentes.uai.cl/" class="list-group-item list-group-item-action">Profesores</a>
                             <a href="http://correo.uai.cl/" class="list-group-item list-group-item-action">Correo UAI</a>
                             <a href="http://www.uai.cl/biblioteca" class="list-group-item list-group-item-action">Biblioteca</a>
                             <a href="http://webti.uai.cl/" class="list-group-item list-group-item-action">Soporte TI</a>
                </div>
                <a id="drop-down-" href="#" class="list-group-item list-group-item-action icons-collapse-expand collapsed d-flex justify-content-between recentcourses" data-toggle="collapse" data-target="#drop-down-menu-" aria-expanded="false" aria-controls="drop-down-menu-">
                    Recientes
                    <span class=" expanded-icon icon-no-margin ">
                       <span class="edw-icon edw-icon-UpArrow"></span>
                        <span class="sr-only">
                            Colapsar
                        </span>
                    </span>
                    <span class="collapsed-icon icon-no-margin ">
                        <span class="edw-icon edw-icon-Down-Arrow"></span>
                        <span class="sr-only">
                            Expandir
                        </span>
                    </span>
                </a>
                <div class="collapse list-group-item p-0 border-0" role="menu" id="drop-down-menu-" aria-labelledby="drop-down-">
                             <a href="https://webc.uai.cl/course/view.php?id=10623" class="list-group-item list-group-item-action"><div class="text_to_html">ESTRUCTURA DE DATOS Y ALGORITMOS Sec.1 STGO S-SEM. 2024/1</div></a>
                             <a href="https://webc.uai.cl/course/view.php?id=10626" class="list-group-item list-group-item-action"><div class="text_to_html">BASES DE DATOS Sec.2 STGO S-SEM. 2024/1</div></a>
                             <a href="https://webc.uai.cl/course/view.php?id=10879" class="list-group-item list-group-item-action"><div class="text_to_html">DISEÑO DE PROCESOS Y SERVICIOS Sec.2 STGO S-SEM. 2024/1</div></a>
                             <a href="https://webc.uai.cl/course/view.php?id=10425" class="list-group-item list-group-item-action"><div class="text_to_html">ORGANIZACIÓN INDUSTRIAL Sec.1 STGO S-SEM. 2024/1</div></a>
                             <a href="https://webc.uai.cl/course/view.php?id=1463" class="list-group-item list-group-item-action"><div class="text_to_html">Centro de Estudiantes Facultad Ingeniería y Ciencias(CEEFIC)</div></a>
                </div>
        </div>

    </div>
</div>

        </div>
      )
}

