import axios from 'axios'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

const LOGIN_USER_URL = 'localhost:3000/auth/login'

export const loginUser = data =>
  axios
    .post(LOGIN_USER_URL, data)
    .then(({ data }) => data)
    .catch(err => {})
