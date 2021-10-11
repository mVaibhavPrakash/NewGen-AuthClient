import React, { useState } from 'react'
import Input from './Input'
import '../css/loginform.css'

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');

    const onUsernameChange = (e) =>{
        e.preventDefault();
        setUsername(e.target.value)
    }

    const onPasswordChange = (e) =>{
        e.preventDefault()
        setPassword(e.target.value)
    }

    return (
        <div id='loginform'>
            <label htmlFor='username'>Enter Username</label>
            <br />
            <Input typ='email' nam ='username' max={48} onChangeFun={onUsernameChange}/>
            <label htmlFor='password'>Enter Password</label>
            <br />
            <Input typ='password' nam='password' max={32} onChangeFun={onPasswordChange}/>
            <button >Login!</button>
        </div>
    )
}

export default LoginForm
