import { useState } from 'react'
import Input from './Input'
import Label from './Label'
import login from '../js/login'
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
        <div className='loginform'>
            <Label forr='username' text='Enter username'/>
            <Input typ='email' nam ='username' max={48} onChangeFun={onUsernameChange}/>
            <Label forr='password' text='Enter Password' />
            <Input typ='password' nam='password' max={32} onChangeFun={onPasswordChange}/>
            <button onClick={(e) => login(e,username,password)}>Login!</button>
        </div>
    )
}

export default LoginForm
