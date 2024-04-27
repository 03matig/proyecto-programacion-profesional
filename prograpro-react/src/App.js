//import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Course } from './components/Course';

function App() {

  const [user, setUser] = useState([])

  return (
    <Router>
     <div>
       <Routes>
         <Route path="/" element={<Login setUser={setUser}/>} />
         <Route path="/Home" element={<Home user={user} setUser={setUser}/>} />
         <Route path="/Course" element={<Course/>} />
       </Routes>
     </div>
     </Router>
   );
 };
//  return (
//    <body>
//      {
//        !user.length > 0
//        ?<Login setUser={setUser} />
//        : <Home user={user} setUser={setUser}/>
//      }
//    </body>
//  );
//}

export default App;


