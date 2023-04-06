import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import User from './components/user/User';
import { setActiveBar } from './components/Management';
import './App.css';

function App() {
  const [active, setActive] = useState(false)
  const approval = useSelector((state) => state.loginControl.approval)
  const activeBar = useSelector((state) => state.loginControl.activeBar)
  const [signActive, setSignActive] = useState(false)
  const dispatch = useDispatch()

  const loginClick = () => {
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
        {active && (
          <NavLink className='contact' to='/Contact' >İletişim</NavLink>
        )}

        <NavLink
          className='login'
          to='/Login'
          onClick={loginClick}
        >
          {!signActive && 'Login '}
        </NavLink>
        <NavLink onClick={() => setSignActive(true)} className='signup' to='/Sign' >
        {!signActive && 'Signup'}
        </NavLink>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sign" element={<User />} />
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
