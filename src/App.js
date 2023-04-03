import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavLink to='/' >Anasayfa</NavLink>
      <NavLink to='/Login' >Login</NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
