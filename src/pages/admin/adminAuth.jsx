import React, {useEffect, useState} from 'react'

import {api} from '../../main/api'
import Admin from './admin'

import './adminAuth.css'

export default props => {
    const [token, setToken] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function updateToken(value){
        setToken(value)
        localStorage.setItem('authToken', value)
    }

    async function doLogin(){
        try{
            const response = await api.post('/login', {
                username,
                password
            })
            updateToken(response.data.token)
        } catch(err){
            console.log(err.response.data)
        }
        setUsername('')
        setPassword('')
    }
    async function doLogoff(){
        updateToken('')
    }
    useEffect(()=> {
        setToken(localStorage.authToken)
    })

    return (
        <>
           {

                token.length ? 
                <div>
                    <Admin token={token} doLogoff={doLogoff}/>
                </div>
                :
                    <>
                        <div className='login-container'>
                            <div className="login-box">
                                <label htmlFor="userInput">Username:</label>
                                <input type="text" id="userInput" onChange={e => setUsername(e.target.value)} value={username} />
                                <label htmlFor="passInput">Password:</label>
                                <input type="text" id="passInput" onChange={e => setPassword(e.target.value)} value={password} />
                                <button onClick={doLogin}>Logar</button>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}