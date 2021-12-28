import { useState } from 'react'
import Input from './Input'
import Label from './Label'
import login from '../js/signup'
import '../css/signupform.css'

const SignupForm = () => {

    const [signupData,setSignupData] = useState({name:'',username:'',password:''});

    return (
        <div className='AuthClient-Signupform'>
            <Label forr='name' text='Enter name'/>
            <br />
            <Input typ='text' nam ='name' max={48} onChange={(e)=>{e.preventDefault();setSignupData({name:e.target.value,username:signupData.username,password:signupData.password})}}/>
            <Label forr='username' text='Enter username'/>
            <br />
            <Input typ='email' nam ='username' max={48} onChange={(e)=>{e.preventDefault();setSignupData({name:signupData.name,username:e.target.value,password:signupData.password})}}/>
            <Label forr='password' text='Enter Password' />
            <br />
            <Input typ='password' nam='password' max={32} onChange={(e)=>{e.preventDefault();setSignupData({name:signupData.name,username:signupData.username,password:e.target.value})}}/>
            <button onClick={(e) => login(e,username,password)}>Login!</button>
        </div>
    )
}

export default SignupForm
