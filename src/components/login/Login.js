import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setPassword, setApproval } from '../../management/Management'

function Login() {
    const dispatch = useDispatch()
    const password = useSelector((state) => state.loginControl.password)
    const user = useSelector((state) => state.loginControl.user)

    const handleClick = () => {
        if (user === 'Göktuğ' && password === 'kesan1238') {
            console.log('Çalıştı')
            dispatch(setApproval(true))
        } else if (user !== 'Göktuğ') {
            console.log('Hatalı kullanıcı adı')
        } else if (password !== 'kesan1238') {
            console.log('Hatalı kullanıcı girişi')
        }
    }

    return (
        <div>
            <div className='userLogin'>
                <br />
                <input placeholder='Kullanıcı adı' onChange={(e) => dispatch(setUser(e.target.value))} />
                <br />
                <input type='password' placeholder='Şifre' onChange={(e) => dispatch(setPassword(e.target.value))} />
                <br />
                <button onClick={handleClick}>Giriş</button>
            </div>
        </div>
    )
}

export default Login
