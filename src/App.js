import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import './App.css';
import { useSelector } from 'react-redux';
import Contact from './components/contact/Contact';
import { useState } from 'react';

function App() {
  const [active,setActive] = useState(false)
  const [homeActive,setHomeActive] = useState(false)
  const approval = useSelector((state) => state.loginControl.approval)
  console.log(approval)

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
          <NavLink 
            onClick={()=>setHomeActive(true)} 
            className={`homeLink ${homeActive && 'Göktuğ'}`} 
            to="/" 
            isActive={() => homeActive}
          >
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
