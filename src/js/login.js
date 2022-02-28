import axios from 'axios'
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
      setUser(auth.username)
      navigate('/')
      return true
    }
    navigate('/auth/signup')
    return false
  })
}

export default login
