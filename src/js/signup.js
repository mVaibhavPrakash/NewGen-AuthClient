import axios from 'axios'
const signup = (
  e,
  formData,
  dispatch,
  navigate,
  usernameRef,
  fullNameRef,
  passwordRef
) => {
  e.preventDefault()
  console.log(formData.email)
  axios({
    method: 'POST',
    url: '/signup',
    data: {
      username: formData.username,
      fullname: formData.fullname,
      password: formData.password,
      email: formData.email,
    },
  }).then((res) => {
    if (res.status === 200) {
      navigate('/auth/login')
    } else {
      dispatch({ type: 'username', payload: { username: '' } })
      dispatch({ type: 'fullname', payload: { fullname: '' } })
      dispatch({ type: 'password', payload: { password: '' } })
      dispatch({ type: 'email', payload: { email: '' } })
      dispatch({ type: 'error', payload: { error: res.data.error } })
      fullNameRef.current.textContent = 'Full Name'
      usernameRef.current.textContent = 'Username'
      passwordRef.current.textContent = 'Password'
      emailRef.current.textContent = 'Email'
    }
  })
}

export default signup
