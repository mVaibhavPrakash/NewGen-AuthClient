import axios from 'axios'
const signup = (e, loginData, setUser, navigate) => {
  e.preventDefault()
  axios({
    method: 'POST',
    url: 'http://localhost:3002/signup',
    data: {
      username: loginData.username,
      password: loginData.password,
    },
  }).then((res) => {
    if (res.status === 200) {
      navigate('/auth/login')
    }
  })
}

export default signup
