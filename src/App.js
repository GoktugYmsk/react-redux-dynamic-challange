import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Home from './components/home/Home';
import Login from './components/login/Login';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  const [active, setActive] = useState(false)
  const approval = useSelector((state) => state.loginControl.approval)

  return (
    <div className="App">
      <div className='navbarApp' >
      <h1>Devam etmek için Log in ekranına tıklayınız</h1>
      <ul className='listApp' >
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </div>
      <div className='routerPart' >
        {!active && (
          <NavLink className='contact' to='/Contact' >İletişim</NavLink>
        )}
        <NavLink
          className='login'
          to='/Login'
          onClick={() => setActive(true)}
        >
          {!active && 'Login'}
        </NavLink>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
      {approval && (
        <>
          <NavLink className='homeLink' to="/" >
            Anasayfa
          </NavLink>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
