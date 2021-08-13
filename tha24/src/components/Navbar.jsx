import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { loginContext } from '../App';

export default function Navbar() {

    const getContext = useContext(loginContext);
    return (
        <div className="nav">
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/about'>
                About
            </NavLink>
            {(getContext.login)
              ?
            <NavLink to='/' onClick={getContext.setLogin} className='door'>
                Logout
            </NavLink>
              :
            <NavLink to='/login' className='door'>
                Login
            </NavLink>}
        </div>
    )
}
