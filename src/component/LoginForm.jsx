import { useRef, useState } from 'react'
import {Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock} from '@fortawesome/free-solid-svg-icons'
import img1 from '../../public/img/wave.png'
import img2 from '../../public/img/bg.png'
import img3 from '../../public/img/avatar.png'
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
		<img className="wave" src={img1}/>
		<div className="container">
			<div className="img">
				<img src={img2}/>
			</div>
			<div className="login-content">
				<div className='form'>
					<img src={img3} />
					<h2 className="title">Welcome</h2>
					<div className="input-div one" ref={oneRef}>
					<div className="i" ref={userRef}>
						<FontAwesomeIcon className='ii' icon={faUser}/>
					</div>
					<div className="div">
							<h5 ref={usernameRef}>Username</h5>
							<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} onBlur={()=>{oneRef.current.style.borderBottom='2px solid #abaaaa';userRef.current.style.color='#abaaaa';!username ? usernameRef.current.textContent='Username':''}} onFocus={(e)=>{oneRef.current.style.borderBottom='2px solid #38d39f';usernameRef.current.textContent='';userRef.current.style.color='#38d39f'}} className="input" />
					</div>
					</div>
					<div className="input-div pass" ref={passRef}>
					<div className="i" ref={pwdRef}> 
						<FontAwesomeIcon className='ii' icon={faLock}/>
					</div>
					<div className="div">
							<h5 ref={passwordRef}>Password</h5>
							<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={()=>{passRef.current.style.borderBottom='2px solid #abaaaa';pwdRef.current.style.color='#abaaaa';!password ? passwordRef.current.textContent='Password': ''}} onFocus={(e)=>{passRef.current.style.borderBottom='2px solid #38d39f';passwordRef.current.textContent='';pwdRef.current.style.color='#38d39f'}} className="input"/>
					</div>
					</div>
					<Link to={"signup"}>Don't have account?Signup</Link>
					<input type="submit" onClick={e => login(e,{username,password})} className="btn" value="Login"/>
				</div>
			</div>
		</div>
    </>
    )
}

export default LoginForm
