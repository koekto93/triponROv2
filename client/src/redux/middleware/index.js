import { all, fork } from 'redux-saga/effects'

import test from './test'
import login from './login'

export default function rootMiddleware() {
  return function*() {
    yield all([fork(test), fork(login)])
  }
}
