import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setApproval, setMain } from '../Management';
import { setPassword } from '../Management';
import { setUser } from '../Management';


function Login() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.loginControl.username);
  const password = useSelector((state) => state.loginControl.password);
  const approval = useSelector((state) => state.loginControl.approval);
  const main = useSelector((state) => state.loginControl.main);

  const handleLogin = () => {
    if (username === 'kayıtlı_kullanıcı_adı' && password === 'kayıtlı_kullanıcı_şifresi') {
      dispatch(setApproval(true));
      dispatch(setMain(true));
    } else {
      console.log('Hatalı kullanıcı adı veya şifre');
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
        <button className="userButton" onClick={handleLogin}>
          Giriş
        </button>
      </div>
    </div>
  );
}

export default Login;
