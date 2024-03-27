import React from 'react'
import './imagenes/webc-logo.png'
import { useState } from 'react';

export function Login ({setUser}) {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (usuario == "" || contraseña == ""){
            setError(true);
            return
        }
        setError(false);
        setUser([usuario])
    }
                return (
                    <div class="login-wrapper" id="yui_3_17_2_1_1711466503022_33" style= {{display: 'flex' , alignItems: 'center' , justifyContent: 'center' , height: '100%', padding: '32px'}}>
                        <div class="login-container" style={{width:'422px', height:'auto', padding: '32px'}}>
                            <div class="logo-area r-mb-16" style = {{padding: '5px', textAlign: 'center', boxSizing: 'border-box'}}>
                                <img src="//webc.uai.cl/pluginfile.php/1/theme_remui/loginpanellogo/1711007324/logo_pregrado.png" class="navbar-brand-logo logo" style={{ width: '200px', height: 'auto', verticalAlign : 'middle', justifyContent: 'center', alignItems : 'center' }}>
                                </img>
                            </div>
                            <div role="main"><span id="maincontent"></span><div class="loginform d-flex flex-column flex-gap-8">
                                <div class="login-welcome-wrapper d-flex flex-column flex-gap-1 text-center" style={{ verticalAlign : 'middle', justifyContent: 'center', alignItems : 'center', textAlign: 'center' }}>
                                    <h2 class="h-bold-3 m-0">
                                        Hola, bienvenido a UAI Webcursos Pregrado
                                    </h2>
                                    <p class="para-regular-3 m-0">Ingrese sus datos para iniciar sesión en su cuenta</p>
                                </div>
                                <form class="login-form" action="https://webc.uai.cl/login/index.php" onSubmit={handleSubmit} method="post" id="login" style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>                        <div class="login-form-username form-group">
                                    <label for="username" class="sr-only">
                                        Nombre de usuario
                                    </label>
                                    <label class="text-link-semibold form-label-color" tabindex="-1">
                                        Nombre de usuario<br></br>
                                    </label>
                                    <input type="text" name="username" id="username" class="form-control form-control-lg" value= {usuario} onChange = {e => setUsuario(e.target.value)} placeholder="Nombre de usuario" autocomplete="username"style={{textAlign:'center'}}></input>
                                </div>
                                <div class="login-form-password form-group" style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
                                    <label for="password" class="sr-only">
                                        Contraseña
                                    </label>
                                    <label class="text-link-semibold form-label-color" tabindex="-1">
                                        Contraseña <br></br>
                                    </label>
                                    <div class="position-relative password-field-eye">
                                        <input type="password" name="password" id="password" value={contraseña} onChange = { e => setContraseña(e.target.value)} class="form-control form-control-lg" placeholder="Contraseña" autocomplete="current-password" style={{textAlign:'center'}}></input>                                            
                                        <span class="edw-icon edw-icon-Show show-password-icon"></span>
                                    </div>
                                </div>
                                <div class="login-form-forgotpassword form-group text-right small-info-semibold">
                                    <a href="https://webc.uai.cl/login/forgot_password.php">¿Olvidó su contraseña?</a>
                                </div>
                                <div class="login-form-submit form-group">
                                    <button class="btn btn-primary btn-lg btn-block" type="submit" id="loginbtn">Acceder</button>
                                </div>
                        </form>
                        {error && <p style={{textAlign:'center'}}>Todos los campos son obligatorios!</p>}

                    <div class="login-identityproviders d-flex flex-column flex-gap-6" style={{ verticalAlign : 'middle', justifyContent: 'center', alignItems : 'center', textAlign: 'center' }}>
                        <h2 class="login-heading text-align-middle h-semibold-6 m-0">O inicie sesión con su cuenta</h2>

                        <div class="login-identityprovider-btn-wrapper d-flex flex-gap-6 justify-content-center">
                            <a class="login-identityprovider-btn border-0" href="https://webc.uai.cl/auth/oauth2/login.php?id=1&amp;wantsurl=https%3A%2F%2Fwebc.uai.cl%2F&amp;sesskey=63Xl0NSz5X" title="Microsoft">
                                <img src="https://www.microsoft.com/favicon.ico" alt="" width="24" height="24"></img>
                            </a>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div class="d-flex justify-content-center flex-gap-8 cookies-section" style={{ verticalAlign : 'middle', justifyContent: 'center', alignItems : 'center', textAlign: 'center' }}>
                            <div class="login-languagemenu text-link-semibold">
                                <div class="action-menu moodle-actionmenu" id="action-menu-0" data-enhance="moodle-core-actionmenu">

                                    <div class="menubar d-flex " id="action-menu-0-menubar">
                            
                                        
                            
                            
                                            <div class="action-menu-trigger">
                                                <div class="dropdown">
                                                    <a href="#" tabindex="0" class=" dropdown-toggle icon-no-margin" id="action-menu-toggle-0" aria-label="Español - Internacional ‎(es)‎" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-controls="action-menu-0-menu">
                                                        
                                                        Español - Internacional ‎(es)‎
                                                            
                                                        <b class="caret"></b>
                                                    </a>
                                                        <div class="dropdown-menu menu dropdown-menu-right" id="action-menu-0-menu" data-rel="menu-content" aria-labelledby="action-menu-toggle-0" role="menu">
                                                                                                            <a href="https://webc.uai.cl/login/index.php?lang=en" class="dropdown-item menu-action" data-lang="en" lang="en" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-1">
                                                            <span class="menu-action-text" id="actionmenuaction-1">English ‎(en)‎</span>
                                                    </a>
                                                                                                            <a href="#" class="dropdown-item menu-action" role="menuitem" tabindex="-1" aria-labelledby="actionmenuaction-2">
                                                            <span class="menu-action-text" id="actionmenuaction-2">Español - Internacional ‎(es)‎</span>
                                                    </a>
                                                        </div>
                                                </div>
                                            </div>
                            
                                    </div>
                            
                            </div>
                        </div>
                    <a class="text-link-semibold" href="#" data-modal="alert" data-modal-title-str="[&quot;cookiesenabled&quot;, &quot;core&quot;]" data-modal-content-str="[&quot;cookiesenabled_help_html&quot;, &quot;core&quot;]">Aviso de Cookies</a>
                </div>
            </div></div>
                                </div></div>
    )
}