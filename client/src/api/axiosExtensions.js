import axios from 'axios'
//import jwt_decode from 'jwt-decode'

import history from '../history'

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token
    //console.log(jwt_decode(token)) отсюда можно отправить полученную инфу из токена в стор
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}

export const handleResponse = () => {
  axios.interceptors.response.use(
    function(response) {
      // Do something with response data
      return response
    },
    function(error) {
      if (error.response.status === 401) {
        localStorage.removeItem('ro-jwt-client')
        setAuthToken(false)
        history.push('/')
      }
      // Do something with response error
      return Promise.reject(error)
    }
  )
}
