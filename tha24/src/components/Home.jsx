import React, { useContext } from 'react'
import { loginContext } from '../App'

export default function Home() {
    const getContext = useContext(loginContext);
    return (
        <div>
            {getContext.login?<h1>Welcome Sir!</h1>:<h1>Please log in</h1>}
        </div>
    )
}
