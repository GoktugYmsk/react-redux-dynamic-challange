import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setPassword, setApproval, setMain } from '../Management';

import './index.css';

function Login() {
  const dispatch = useDispatch();
  const password = useSelector((state) => state.loginControl.password);
  const user = useSelector((state) => state.loginControl.user);
  const approval = useSelector((state) => state.loginControl.approval);
  const main = useSelector((state) => state.loginControl.main);

  const handleClick = () => {
    if (user === 'Göktuğ' && password === 'kesan1238') {
      console.log('Çalıştı');
      dispatch(setApproval(true));
      dispatch(setMain(true));
    } else if (user !== 'Göktuğ') {
      console.log('Hatalı kullanıcı adı');
    } else if (password !== 'kesan1238') {
      console.log('Hatalı kullanıcı girişi');
    }
  };

  if (approval && !main) {
    return null; 
  }

  return (
    <div className="loginPage">
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
        <button className="userButton" onClick={handleClick}>
          Giriş
        </button>
      </div>
    </div>
  );
}

export default Login;
