import { useEffect, useRef, useState} from 'react'
import {Link, useNavigate,Outlet } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock} from '@fortawesome/free-solid-svg-icons'
import img1 from '../../../../../public/img/wave.png'
import img2 from '../../../../../public/img/bg.png'
import img3 from '../../../../../public/img/avatar.png'
import signup from '../js/signup'
import '../css/loginform.css'
import Navbar from '../../../LandingpageClient/src/components/Navbar'
const LoginForm = ({footerRef}) => {
	const User = useSelector((state) => state.auth)
	useEffect(() =>{
		footerRef.current.style.display='none'

		return ()=>{
			footerRef.current.style.display='revert'
		}
	})
    const oneRef= useRef(null)
	const userRef = useRef(null)
	const usernameRef= useRef(null)
	const twoRef = useRef(null)
	const nameRef = useRef(null)
	const firstNameRef = useRef(null)
	const passRef = useRef(null)
	const pwdRef=useRef(null)
	const passwordRef = useRef(null)
	const [username,setUsername] = useState('')
	const [password,setPassword] = useState('')
	const [firstname,setFirstName] = useState('')
	const [Error, setError] = useState('')
	const navigate = useNavigate()
	
    return (
    <>
	<Navbar/>
	<div className='auth'>
		<img className="auth-wave" src={img1}/>
		<div className="auth-container">
			<div className="auth-img">
				<img src={img2}/>
			</div>
			<div className="auth-login-content">
				<div className='auth-form'>
					<img src={img3} />
					<h2 className="auth-title">Welcome</h2>
				<p id={Error? 'error' : 'noerror'}>*{Error}</p>
					<div className="auth-input-div one" ref={oneRef}>
						<div className="auth-i" ref={userRef}>
							<FontAwesomeIcon className='auth-ii' icon={faUser}/>
						</div>
						<div className="auth-div">
								<h5 ref={usernameRef}>Username</h5>
								<input type="text" 
								autoComplete="off"
								value={username} onChange={(e) => setUsername(e.target.value)} 
								onBlur={()=>{oneRef.current.style.borderBottom='2px solid #2d386e';userRef.current.style.color='#2d386e';!username ? usernameRef.current.textContent='Username':''}} 
								onFocus={(e)=>{oneRef.current.style.borderBottom='2px solid #38d39f';usernameRef.current.textContent='';userRef.current.style.color='#38d39f'}} 
								className="auth-input" />
						</div>
					</div>
					<div className="auth-input-div" ref={twoRef}>
						<div className="auth-i" ref={nameRef}>
							<FontAwesomeIcon className='auth-ii' icon={faUser}/>
						</div>
						<div className="auth-div">
								<h5 ref={firstNameRef}>First Name</h5>
								<input type="text" 
								autoComplete="off"
								value={firstname} 
								onChange={(e) => setFirstName(e.target.value)} 
								onBlur={()=>{twoRef.current.style.borderBottom='2px solid #2d386e';nameRef.current.style.color='#2d386e';!username ? firstNameRef.current.textContent='Firstname':''}} 
								onFocus={(e)=>{twoRef.current.style.borderBottom='2px solid #38d39f';firstNameRef.current.textContent='';nameRef.current.style.color='#38d39f'}} 
								className="auth-input" />
						</div>
					</div>
					<div className="auth-input-div pass" ref={passRef}>
						<div className="auth-i" ref={pwdRef}> 
							<FontAwesomeIcon className='auth-ii' icon={faLock}/>
						</div>
						<div className="auth-div">
							<h5 ref={passwordRef}>Password</h5>
							<input type="password" 
							value={password} 
							autoComplete="off"
							onChange={(e) => setPassword(e.target.value)} 
							onBlur={()=>{passRef.current.style.borderBottom='2px solid #2d386e';pwdRef.current.style.color='#2d386e';!password ? passwordRef.current.textContent='Password': ''}} 
							onFocus={(e)=>{passRef.current.style.borderBottom='2px solid #38d39f';passwordRef.current.textContent='';pwdRef.current.style.color='#38d39f'}} 
							className="auth-input"/>
						</div>
					</div>
					<Link className='auth-a' to={"/auth/login"}>Already have account?Login</Link>
					<input type="submit" 
							onClick={e => signup(e,{username,firstname,password,setUsername,setFirstName,setPassword},navigate,setError,usernameRef,firstNameRef,passwordRef)} 
							className="auth-btn" 
							value="Signup"/>
				</div>
			</div>
		</div>
		</div>
		<Outlet/>
    </>
    )
}

export default LoginForm
