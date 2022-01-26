import { useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock} from '@fortawesome/free-solid-svg-icons'
import signup from '../js/signup'
import img1 from '../../../../../public/img/wave.png'
import img2 from '../../../../../public/img/bg.png'
import img3 from '../../../../../public/img/avatar.png'
import '../css/loginform.css'

const SignupForm = () => {
	const nameRef = useRef(null)
	const fnameRef= useRef(null)
	const fullnameRef = useRef(null)
    const oneRef= useRef(null)
	const userRef = useRef(null)
	const usernameRef= useRef(null)
	const passRef = useRef(null)
	const pwdRef=useRef(null)
	const passwordRef = useRef(null)
	const [name,setName] = useState('')
	const [username,setUsername] = useState('')
	const [password,setPassword] = useState('')
    return (
        <>
	<img className="wave" src={img1}/>
	<div className="container">
		<div className="img">
			<img src={img2}/>
		</div>
		<div className="auth-login-content">
			<div className='form'>
				<img src={img3} />
				<h2 className="auth-title">Signup</h2>
                <div className="auth-input-div name" ref={nameRef}>
           		   <div className="auth-i" ref={fnameRef}>
					  <FontAwesomeIcon className='ii' icon={faUser}/>
           		   </div>
           		   <div className="auth-div">
           		   		<h5 ref={fullnameRef}>Full Name</h5>
           		   		<input type="text" onBlur={()=>{nameRef.current.style.borderBottom='2px solid #abaaaa';fnameRef.current.style.color='#abaaaa';fullnameRef.current.textContent='Full Name'}} onFocus={(e)=>{nameRef.current.style.borderBottom='2px solid #38d39f';fullnameRef.current.textContent='';fnameRef.current.style.color='#38d39f'}} className="auth-input" />
           		   </div>
           		</div>
           		<div className="auth-input-div one" ref={oneRef}>
					<div className="i" ref={userRef}>
						<FontAwesomeIcon className='ii' icon={faUser}/>
					</div>
					<div className="auth-div">
							<h5 ref={usernameRef}>Username</h5>
							<input type="text" onBlur={()=>{oneRef.current.style.borderBottom='2px solid #abaaaa';userRef.current.style.color='#abaaaa';usernameRef.current.textContent='Username'}} onFocus={(e)=>{oneRef.current.style.borderBottom='2px solid #38d39f';usernameRef.current.textContent='';userRef.current.style.color='#38d39f'}} className="auth-input" />
					</div>
					</div>
					<div className="auth-input-div pass" ref={passRef}>
					<div className="auth-i" ref={pwdRef}> 
						<FontAwesomeIcon className='auth-ii' icon={faLock}/>
					</div>
					<div className="auth-div">
							<h5 ref={passwordRef}>Password</h5>
							<input type="password" onBlur={()=>{passRef.current.style.borderBottom='2px solid #abaaaa';pwdRef.current.style.color='#abaaaa';passwordRef.current.textContent='Password'}} onFocus={(e)=>{passRef.current.style.borderBottom='2px solid #38d39f';passwordRef.current.textContent='';pwdRef.current.style.color='#38d39f'}} className="auth-input"/>
					</div>
					</div>
            	<Link className='auth-a' to={'auth/login'}>Already have account?Login</Link>
            	<input type="submit" className="auth-btn" onClick={e => signup(e,{name,username,password})} value="SignUp"/>
            </div>
        </div>
    </div>
    </>
    )
}

export default SignupForm
