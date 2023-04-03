import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Login() {
    const dispatch = useDispatch()
    const password = useSelector((state)=>state.loginControl.password)
    return (
        <div>
            <div className='userLogin' >
                <br />
                <input placeholder='Kullanıcı adı' onChange={(e)=>dispatch(setUser(e.target.value))} />
                <br />
                <input type='password' placeholder='Şifre' onChange={(e) => dispatch(setPassword(e.target.value))} />
                <br />
                <button>Giriş</button>
            </div>
        </div>
    )
}

export default Login
