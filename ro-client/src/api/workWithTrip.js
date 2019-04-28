import axios from 'axios'
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

const GET_TRIPS_URL = 'http://localhost:3001/trip'

//const login_url = '/api/auth/login';

export const getTrips = data =>
  axios
    .get(GET_TRIPS_URL, data)
    .then(response => response)
    .catch(({ res }) => {
      //console.log(res)
      //console.log(response.data.message)
    })
