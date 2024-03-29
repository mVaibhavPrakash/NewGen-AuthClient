import { useEffect, useRef} from 'react'
import {Link, useNavigate,Outlet } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import img1 from '../../../../../public/img/wave.png'
import img2 from '../../../../../public/img/bg.png'
import img3 from '../../../../../public/img/avatar.png'
import signup from '../js/signup'
import '../css/loginform.css'
import Navbar from '../../../LandingpageClient/src/components/Navbar'
import { useReducer } from 'react'
const LoginForm = ({footerRef}) => {

    const oneRef= useRef(null)
	const userRef = useRef(null)
	const usernameRef= useRef(null)
	const twoRef = useRef(null)
	const nameRef = useRef(null)
	const fullNameRef = useRef(null)
	const passRef = useRef(null)
	const pwdRef=useRef(null)
	const passwordRef = useRef(null)
	const threeRef= useRef(null)
	const mailRef = useRef(null)
	const emailRef = useRef(null)

	const reducer = (formData,action) =>{
		switch (action.type) {
			case 'password':
				return {...formData, password:action.payload.password}
			case 'username':
				return {...formData,username:action.payload.username}
			case 'fullname':
				return {...formData,fullname:action.payload.fullname}
			case 'email':
				return {...formData,email:action.payload.email}
			case 'error':
				return {...formData,error:action.payload.error}
			default:
				return formData
		}
	}


	const [formData,dispatch] = useReducer(reducer,{username:'',fullname:'',password:'',email:'',error:''})

	const User = useSelector((state) => state.auth)
	const navigate = useNavigate()

	useEffect(() =>{
		if(footerRef.current.style.display !=='none')
		footerRef.current.style.display='none'
	},[footerRef])
	
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
				<p id={formData.error? 'error' : 'noerror'}>*{formData.error}</p>
					<div className="auth-input-div one" ref={oneRef}>
						<div className="auth-i" ref={userRef}>
							<FontAwesomeIcon className='auth-ii' icon={faUser}/>
						</div>
						<div className="auth-div">
								<h5 ref={usernameRef}>Username</h5>
								<input type="text" 
								autoComplete="off"
								value={formData.username} onChange={(e) => {dispatch({type:'username',payload:{username:e.target.value}});console.log(formData.username)}} 
								onBlur={()=>{oneRef.current.style.borderBottom='2px solid #2d386e';userRef.current.style.color='#2d386e';!formData.username ? usernameRef.current.textContent='Username':''}} 
								onFocus={(e)=>{oneRef.current.style.borderBottom='2px solid #38d39f';usernameRef.current.textContent='';userRef.current.style.color='#38d39f'}} 
								className="auth-input" />
						</div>
					</div>
					<div className="auth-input-div" ref={twoRef}>
						<div className="auth-i" ref={nameRef}>
							<FontAwesomeIcon className='auth-ii' icon={faUser}/>
						</div>
						<div className="auth-div">
								<h5 ref={fullNameRef}>Full Name</h5>
								<input type="text" 
								autoComplete="off"
								value={formData.fullname} 
								onChange={(e) => {dispatch({type:'fullname',payload:{fullname:e.target.value}});console.log(formData.fullname)} }
								onBlur={()=>{twoRef.current.style.borderBottom='2px solid #2d386e';nameRef.current.style.color='#2d386e';!formData.username ? fullNameRef.current.textContent='fullname':''}} 
								onFocus={(e)=>{twoRef.current.style.borderBottom='2px solid #38d39f';fullNameRef.current.textContent='';nameRef.current.style.color='#38d39f'}} 
								className="auth-input" />
						</div>
					</div>
					<div className="auth-input-div" ref={threeRef}>
						<div className="auth-i" ref={mailRef}>
							<FontAwesomeIcon className='auth-ii' icon={faEnvelope}/>
						</div>
						<div className="auth-div">
								<h5 ref={emailRef}>Email</h5>
								<input type="email" 
								autoComplete="off"
								value={formData.email} 
								onChange={(e) => {dispatch({type:'email',payload:{email:e.target.value}});console.log(formData.email)} }
								onBlur={()=>{threeRef.current.style.borderBottom='2px solid #2d386e';mailRef.current.style.color='#2d386e';!formData.email ? emailRef.current.textContent='email':''}} 
								onFocus={(e)=>{threeRef.current.style.borderBottom='2px solid #38d39f';emailRef.current.textContent='';mailRef.current.style.color='#38d39f'}} 
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
							value={formData.password} 
							autoComplete="off"
							onChange={(e) => {dispatch({type:'password',payload:{password:e.target.value}});console.log(formData.password)}} 
							onBlur={()=>{passRef.current.style.borderBottom='2px solid #2d386e';pwdRef.current.style.color='#2d386e';!formData.password ? passwordRef.current.textContent='Password': ''}} 
							onFocus={(e)=>{passRef.current.style.borderBottom='2px solid #38d39f';passwordRef.current.textContent='';pwdRef.current.style.color='#38d39f'}} 
							className="auth-input"/>
						</div>
					</div>
					<Link className='auth-a' to={"/auth/login"}>Already have account?Login</Link>
					<input type="submit" 
							onClick={e => signup(e,formData,dispatch,navigate,usernameRef,fullNameRef,passwordRef,emailRef)} 
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
