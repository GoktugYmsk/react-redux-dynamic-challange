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
  const [homeActive, setHomeActive] = useState(false)
  const approval = useSelector((state) => state.loginControl.approval)

  return (
    <div className="App">
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
          <NavLink className='homeLink' to="/" isActive={() => homeActive}>
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
