import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import history from './history'

import { setAuthToken, handleResponse } from './api/axiosExtensions'
import App from './App'
import createStore from './redux/create'
import './index.css'

if (localStorage.getItem('ro-jwt-client')) {
  setAuthToken(localStorage.getItem('ro-jwt-client'))
}

handleResponse()

const store = createStore()

window.store = store

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
