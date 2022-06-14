import { useEffect, useRef} from 'react'
import {Link, useNavigate, Outlet } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock} from '@fortawesome/free-solid-svg-icons'
import img1 from '../../../../../public/img/wave.png'
import img2 from '../../../../../public/img/bg.png'
import img3 from '../../../../../public/img/avatar.png'
import login from '../js/login'
import '../css/loginform.css'
import Navbar from '../../../LandingpageClient/src/components/Navbar'
import { setUser } from '../../../../redux/slices/authSlice'
import {setLoggedIn} from '../../../../redux/slices/authSlice'
import { useReducer } from 'react'

const LoginForm = ({footerRef}) => {

    const oneRef= useRef(null)
	const userRef = useRef(null)
	const usernameRef= useRef(null)
	const passRef = useRef(null)
	const passwordRef = useRef(null)
	const pwdRef=useRef(null)

	const reducer = (formData,action) =>{
		switch (action.type) {
			case 'username':
				return {...formData,username:action.payload.username}
			case 'password':
				return {...formData,password:action.payload.password}
			case 'error':
				return {...formData,error:action.payload.error}
			default:
				return formData
		}
	}

	const [formData,formDispatch] = useReducer(reducer,{username:'',password:'',error:''})

	const User = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() =>{
		footerRef.current.style.display='none'
		return ()=>{
			footerRef.current.style.display='revert'
		}
	})
	
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
								<input 
								type="text" 
								autoComplete='off'
								value={formData.username} onChange={(e) => formDispatch({type:'username',payload:{username:e.target.value}})} 
								onBlur={()=>{oneRef.current.style.borderBottom='2px solid #2d386e';userRef.current.style.color='#2d386e';!formData.username ? usernameRef.current.textContent='Username':''}} onFocus={(e)=>{oneRef.current.style.borderBottom='2px solid #38d39f';usernameRef.current.textContent='';userRef.current.style.color='#38d39f'}} className="auth-input" />
						</div>
					</div>
					<div className="auth-input-div pass" ref={passRef}>
						<div className="auth-i" ref={pwdRef}> 
							<FontAwesomeIcon className='auth-ii' icon={faLock}/>
						</div>
						<div className="auth-div">
							<h5 ref={passwordRef}>Password</h5>
							<input
							type="password"
							value={formData.password} 
							autoComplete="off"
							onChange={(e) => formDispatch({type:'password',payload:{password:e.target.value}})} 
							onBlur={()=>{passRef.current.style.borderBottom='2px solid #2d386e';pwdRef.current.style.color='#2d386e';!formData.password ? passwordRef.current.textContent='Password': ''}} 
							onFocus={(e)=>{passRef.current.style.borderBottom='2px solid #38d39f';passwordRef.current.textContent='';pwdRef.current.style.color='#38d39f'}} 
							className="auth-input"/>
						</div>
					</div>
					<Link className='auth-a' to={"/auth/signup"}>Don't have account?Signup</Link>
					<input 
					type="submit" 
					onClick={e => login(e,formData,formDispatch,dispatch,setUser,setLoggedIn,navigate,usernameRef,passwordRef)} 
					className="auth-btn" value="Login"/>
				</div>
			</div>
		</div>
		</div>
		<Outlet/>
    </>
    )
}

export default LoginForm
