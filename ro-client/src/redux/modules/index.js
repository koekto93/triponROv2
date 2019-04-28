import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import testPage from './test'
import loginPage from './login'

export default combineReducers({
  routing: routerReducer,
  testPage,
  loginPage,
})
