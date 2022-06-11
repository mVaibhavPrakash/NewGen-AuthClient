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
  console.log('ngnix is working')
  axios({
    method: 'POST',
    url: '/login',
    data: {
      username: loginData.username,
      password: loginData.password,
    },
    withCredentials: true,
  }).then((res) => {
    const auth = res.data
    if (res.status === 200) {
      dispatch(
        setUser({
          id: auth.id,
          username: auth.username,
          firstname: auth.firstname,
          token: auth.toke,
        })
      )
      dispatch(setLoggedIn())
      const object = {
        id: auth.id,
        username: auth.username,
        firstname: auth.firstname,
      }
      localStorage.setItem('userData', JSON.stringify(object))
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
