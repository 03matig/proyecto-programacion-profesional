import React from 'react';
import { NavBar } from './NavBar';

export function Home ({ user, setUser }) {
    const handleLogout = () => {
        setUser([])
    }
    return (
        //<NavBar/>
        <div>
            <h1>Bienvenido!</h1>
            <h2>{user}</h2>
            <button onClick = {handleLogout}> Cerrar Sesión </button>
        </div>
    )



}