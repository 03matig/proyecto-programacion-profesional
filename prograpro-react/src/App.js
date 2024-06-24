import './App.css';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Course } from './components/Course';
import { Dashboard } from './components/Dashboard';
import { Pasantia } from './components/Pasantia';
import { VistaCrearZoom } from './components/VistaCrearZoom';
import { Navbar } from './components/Navbar';
import { Participantes } from './components/Participantes';

function App() {
  const [user, setUser] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route
          path="/*"
          element={
            <>
              <Navbar user={user} setUser={setUser} />
              <Routes>
                <Route path="/Home" element={<Home user={user} setUser={setUser} />} />
                <Route path="/Course" element={<Course user={user} setUser={setUser} />} />
                <Route path="/Participantes" element={<Participantes user={user} setUser={setUser} />} />
                <Route path="/Pasantia" element={<Pasantia user={user} setUser={setUser} />} />
                <Route path="/VistaCrearZoom" element={<VistaCrearZoom user={user} setUser={setUser} />} />
              </Routes>
            </>
          }
        />
        <Route path="/Dashboard" element={<Dashboard user={user} />} />
      </Routes>
    </Router>
  );
};
 
 export default App;
