import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { setApproval, setMain } from '../Management';
import { setPassword } from '../Management';
import { setUser } from '../Management';
import './index.css'

function Login() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.loginControl.username);
  const password = useSelector((state) => state.loginControl.password);
  const approval = useSelector((state) => state.loginControl.approval);
  const userPassword = useSelector((state) => state.loginControl.userPassword);
  const user = useSelector((state) => state.loginControl.user);
  const open = useSelector((state) => state.loginControl.open)
  const main = useSelector((state) => state.loginControl.main);
  const [close, setClose] = useState(false)

  const handleLogin = () => {
    if (username === user && password === userPassword) {
      console.log('Kullanıcı kayıtlı.');
      dispatch(setApproval(true));
      dispatch(setMain(true));
    } else {
      console.log('Hatalı kullanıcı adı veya şifre');
    }
  };
  const closeLogin = () => {
    setClose(true)
  }

  if (approval && !main) {
    return null;
  }

  return (
    <div className="loginPage">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="userLogin">
        <h3>Hoşgeldiniz</h3>
        <p>Devam etmek için giriş yapınız</p>
        <br />
        <input
          className="userInput"
          placeholder="Kullanıcı adı"
          onChange={(e) => dispatch(setUser(e.target.value))}
        />
        <br />
        <input
          className="userPassword"
          type="password"
          placeholder="Şifre"
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
        <br />
        <button className="userButton" onClick={handleLogin}>
          Giriş
        </button>
      </div>
      <button onClick={closeLogin} >Kayıt ekranı</button>
    </div>
  );
}

export default Login;
