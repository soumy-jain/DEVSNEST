import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { loginContext } from '../App'

export default function Login() {
    const getContext = useContext(loginContext)
    return (
        <div className='login'>
            <input type="text" placeholder="username" />
            <br/>
            <input type="text" placeholder="password" />
            <br/>
            <div className="adjust">
                <NavLink to='/loggedin'>
                    <button onClick={ getContext.setLogin }>&nbsp; &nbsp; &nbsp; Login</button>
                </NavLink>
            </div>
        </div>
    )
}
