//import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { NavBar } from './components/NavBar';
import { Home } from './components/home';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState([])

  return (
    <body>
      {
        !user.length > 0
        ?<Login setUser={setUser} />
        : <Home user={user} setUser={setUser}/>
      }
    </body>
  );
}

export default App;
