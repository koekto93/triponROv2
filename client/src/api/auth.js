import axios from 'axios'
import { setAuthToken } from './axiosExtensions'
import history from '../history'
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

const LOGIN_USER_URL = 'http://localhost:3001/login'
const REGISTER_USER_URL = 'http://localhost:3001/register'

//const login_url = '/api/auth/login';

export const registerUser = data =>
  axios
    .post(REGISTER_USER_URL, data)
    .then(({ data }) => data)
    .catch(({ res }) => {
      //console.log(res)
      //console.log(response.data.message)
    })

export const apiLogin = data =>
  axios.post(LOGIN_USER_URL, data).then(({ data }) => {
    const { token } = data
    localStorage.setItem('ro-jwt-client', token)
    setAuthToken(token)
  })

export const apiLogout = url => {
  localStorage.removeItem('ro-jwt-client')
  setAuthToken(false)
  history.go(0)
}
