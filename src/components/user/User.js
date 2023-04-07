import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { setUser, setUserPassword, setOpenLogin, setUserName } from '../Management';
import './index.css'

function User() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.loginControl.open)

  const handleSignup = () => {
    dispatch(setUserName(''))
    dispatch(setUserPassword(''))
    dispatch(setOpenLogin(true))
  }

  return (
    <div className='containerSignup'>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      {!open &&
        <div className='userSignUp' >
          <input
            placeholder='kullanıcı adı'
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type='password'
            placeholder='şifre'
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button className='saveUser' onClick={handleSignup}>Kayıt Ol</button>
        </div>}
    </div>
  )
}

export default User;
