import axios from 'axios'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

const LOGIN_USER_URL = 'http://localhost:3001/login'
const REGISTER_USER_URL = 'http://localhost:3001/register'

export const loginUser = data =>
  axios
    .post(LOGIN_USER_URL, data)
    .then(({ data }) => data)
    .catch(err => {})

export const registerUser = data =>
  axios
    .post(REGISTER_USER_URL, data)
    .then(({ data }) => data)
    .catch(({ response }) => {
      //console.log(response)
      //console.log(response.data.message)
    })
