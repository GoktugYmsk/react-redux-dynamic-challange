import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/Login';
import './App.css';
import { useSelector } from 'react-redux';
import Contact from './components/contact/Contact';

function App() {
  const approval = useSelector((state) => state.loginControl.approval)
  console.log(approval)

  return (
    <div className="App">
      <NavLink to='/Contact' >İletişim</NavLink>
      <NavLink to='/Login' >Login</NavLink>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      {approval && <Home />}
    </div>
  );
}

export default App;
