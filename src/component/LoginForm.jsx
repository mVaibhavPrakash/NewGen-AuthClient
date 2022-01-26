import { useRef, useState } from 'react'
import {Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock} from '@fortawesome/free-solid-svg-icons'
import img1 from '../../../../../public/img/wave.png'
import img2 from '../../../../../public/img/bg.png'
import img3 from '../../../../../public/img/avatar.png'
import login from '../js/login'
import '../css/loginform.css'

const LoginForm = () => {

    const [loginData,setLoginData] = useState({fullname:'',username:'',password:''});
    const oneRef= useRef(null)
	const userRef = useRef(null)
	const usernameRef= useRef(null)
	const passRef = useRef(null)
	const pwdRef=useRef(null)
	const passwordRef = useRef(null)
	const [username,setUsername] = useState('')
	const [password,setPassword] = useState('')
	
    return (
    <>
		<img className="auth-wave" src={img1}/>
		<div className="auth-container">
			<div className="auth-img">
				<img src={img2}/>
			</div>
			<div className="auth-login-content">
				<div className='auth-form'>
					<img src={img3} />
					<h2 className="auth-title">Welcome</h2>
					<div className="auth-input-div one" ref={oneRef}>
					<div className="auth-i" ref={userRef}>
						<FontAwesomeIcon className='auth-ii' icon={faUser}/>
					</div>
					<div className="auth-div">
							<h5 ref={usernameRef}>Username</h5>
							<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} onBlur={()=>{oneRef.current.style.borderBottom='2px solid #abaaaa';userRef.current.style.color='#abaaaa';!username ? usernameRef.current.textContent='Username':''}} onFocus={(e)=>{oneRef.current.style.borderBottom='2px solid #38d39f';usernameRef.current.textContent='';userRef.current.style.color='#38d39f'}} className="auth-input" />
					</div>
					</div>
					<div className="auth-input-div pass" ref={passRef}>
					<div className="auth-i" ref={pwdRef}> 
						<FontAwesomeIcon className='auth-ii' icon={faLock}/>
					</div>
					<div className="auth-div">
							<h5 ref={passwordRef}>Password</h5>
							<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={()=>{passRef.current.style.borderBottom='2px solid #abaaaa';pwdRef.current.style.color='#abaaaa';!password ? passwordRef.current.textContent='Password': ''}} onFocus={(e)=>{passRef.current.style.borderBottom='2px solid #38d39f';passwordRef.current.textContent='';pwdRef.current.style.color='#38d39f'}} className="auth-input"/>
					</div>
					</div>
					<Link className='auth-a' to={"auth/signup"}>Don't have account?Signup</Link>
					<input type="submit" onClick={e => login(e,{username,password})} className="auth-btn" value="Login"/>
				</div>
			</div>
		</div>
    </>
    )
}

export default LoginForm
