import { useState } from 'react'
import Input from './Input'
import Label from './Label'
import login from '../js/login'
import '../css/loginform.css'

const LoginForm = () => {

    const [loginData,setLoginData] = useState({username:'',password:''});

    return (
        <div className='AuthClient-loginform'>
            <Label forr='username' text='Enter username'/>
            <br />
            <Input typ='email' nam ='username' max={48} onChange={(e)=>{e.preventDefault();setLoginData({username:e.target.value,password:loginData.password})}}/>
            <Label forr='password' text='Enter Password' />
            <br />
            <Input typ='password' nam='password' max={32} onChange={(e)=>{e.preventDefault();setLoginData({username:loginData.username,password:e.target.value})}}/>
            <button onClick={(e) => login(e,username,password)}>Login!</button>
            <div>
                <Label text="Don't have account?"/><a>Click here to Signup</a>
            </div>
        </div>
    )
}

export default LoginForm
