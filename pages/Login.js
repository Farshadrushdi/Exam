import React from 'react'
import { useState,useEffect } from 'react'


function Login() {
    const [login, setLogin] = useState(false)
    console.log(login);

   
    
    return (
        <div>
            <button onClick={() => { setLogin(true); console.log("changed by setState");
             console.log(value)}}>Login
            </button>

        </div>
    )
}

export default Login