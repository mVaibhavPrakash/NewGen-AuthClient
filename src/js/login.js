import axios from 'axios'
import setCookie from '../../../../js/cookie'

const login = (
  e,
  formData,
  formDispatch,
  dispatch,
  setUser,
  setLoggedIn,
  navigate,
  usernameRef,
  passwordRef
) => {
  e.preventDefault()
  console.log('ngnix is working')
  axios({
    method: 'POST',
    url: '/login',
    data: {
      username: formData.username,
      password: formData.password,
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
    formDispatch({ type: 'error', payload: { error: auth.error } })
  })
}

export default login
