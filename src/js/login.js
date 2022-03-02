import axios from 'axios'
import setCookie from '../../../../js/cookie'

const login = (e, loginData, setUser, navigate) => {
  e.preventDefault()
  axios({
    method: 'POST',
    url: 'http://localhost:3002/login',
    data: {
      username: loginData.username,
      password: loginData.password,
    },
    withCredentials: true,
  }).then((res) => {
    if (res.status === 200) {
      const auth = res.data
      setUser({ username: auth.username, firstname: auth.firstname })
      setCookie('username', auth.username, 1)
      setCookie('firstname', auth.firstname, 1)
      navigate('/')
      return true
    }
    navigate('/auth/signup')
    return false
  })
}

export default login
