import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, setPassword } from '../Management';
import './index.css'

function User() {
  const [username, setUsername] = useState('');
  const [savePassword, setSavePassword] = useState('');
  const dispatch = useDispatch();

  const handleSignup = () => {
    dispatch(setUser(username));
    dispatch(setPassword(savePassword));
    setUsername('');
    setSavePassword('');
  };

  return (
    <div className='containerSignup'>
      <div className='userSignUp' >
        <input 
          placeholder='kullanıcı adı'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type='password' 
          placeholder='şifre' 
          value={savePassword}
          onChange={(e) => setSavePassword(e.target.value)}
        />
        <button className='saveUser' onClick={handleSignup}>Kayıt Ol</button>
      </div>
    </div>
  )
}

export default User;
