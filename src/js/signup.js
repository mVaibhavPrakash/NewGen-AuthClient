import axios from 'axios';
const login = (e, loginData) => {
  e.preventDefault();
  axios({
    method: 'POST',
    url: 'http://localhost:3002/login',
    data: {
      name: loginData.name,
      username: loginData.username,
      password: loginData.password,
    },
  }).then((res) => {
    if (res.status === 200) {
      return true;
    }
    return false;
  });
};

export default login;
