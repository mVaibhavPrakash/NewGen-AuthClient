import axios from 'axios'
const signup = (
  e,
  formData,
  dispatch,
  navigate,
  usernameRef,
  firstNameRef,
  passwordRef
) => {
  e.preventDefault()
  axios({
    method: 'POST',
    url: '/signup',
    data: {
      username: formData.username,
      firstname: formData.firstname,
      password: formData.password,
    },
  }).then((res) => {
    if (res.status === 200) {
      navigate('/auth/login')
    } else {
      dispatch({ type: 'username', payload: { username: '' } })
      dispatch({ type: 'firstname', payload: { firstname: '' } })
      dispatch({ type: 'password', payload: { password: '' } })
      dispatch({ type: 'error', payload: { error: res.data.error } })
      firstNameRef.current.textContent = 'First Name'
      usernameRef.current.textContent = 'Username'
      passwordRef.current.textContent = 'Password'
    }
  })
}

export default signup
