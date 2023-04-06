import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Home from './components/home/Home';
import Login from './components/login/Login';
import Contact from './components/contact/Contact';
import { setActiveBar } from './components/Management';
import './App.css';

function App() {
  const [active, setActive] = useState(false)
  const approval = useSelector((state) => state.loginControl.approval)
  const activeBar = useSelector((state) => state.loginControl.activeBar)
  const dispatch = useDispatch()

  const loginClick = ()=>{
    setActive(true)
    dispatch(setActiveBar(false))
  }

  return (
    <div className="App">
      {activeBar &&
        <div className='navbarApp' >
          <h1>Devam etmek için Login ekranına tıklayınız</h1>
          <ul className='listApp' >
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      }
      <div className='routerPart' >
        {!active && (
          <NavLink className='contact' to='/Contact' >İletişim</NavLink>
        )}
        <NavLink
          className='login'
          to='/Login'
          onClick={loginClick}
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
