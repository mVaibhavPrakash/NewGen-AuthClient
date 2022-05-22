import axios from 'axios'
const signup = (
  e,
  loginData,
  navigate,
  setError,
  usernameRef,
  firstNameRef,
  passwordRef
) => {
  e.preventDefault()
  axios({
    method: 'POST',
    url: 'http://localhost:3012/signup',
    data: {
      username: loginData.username,
      firstname: loginData.firstname,
      password: loginData.password,
    },
  }).then((res) => {
    if (res.status === 200) {
      navigate('/auth/login')
    } else {
      console.log('renderererrere')
      loginData.setUsername('')
      loginData.setFirstName('')
      loginData.setPassword('')
      firstNameRef.current.textContent = 'First Name'
      usernameRef.current.textContent = 'Username'
      passwordRef.current.textContent = 'Password'
      setError(res.data.error)
    }
  })
}

export default signup
