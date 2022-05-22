import axios from 'axios'
import setCookie from '../../../../js/cookie'

const login = (
  e,
  loginData,
  dispatch,
  setUser,
  setLoggedIn,
  navigate,
  setError,
  usernameRef,
  passwordRef
) => {
  e.preventDefault()
  axios({
    method: 'POST',
    url: 'http://localhost:3012/login',
    data: {
      username: loginData.username,
      password: loginData.password,
    },
  }).then((res) => {
    const auth = res.data
    if (res.status === 200) {
      dispatch(
        setUser({
          id: auth.id,
          username: auth.username,
          firstname: auth.firstname,
        })
      )
      dispatch(setLoggedIn())
      setCookie('id', auth.id, 1)
      setCookie('username', auth.username, 1)
      setCookie('firstname', auth.firstname, 1)
      navigate('/')
      return true
    }
    const time = setTimeout(() => {
      navigate('/auth/signup')
      return false
    }, 500)
    usernameRef.current.textContent = 'Username'
    passwordRef.current.textContent = 'Password'
    setError(auth.error)
  })
}

export default login
