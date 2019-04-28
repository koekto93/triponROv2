// @flow
import * as _ from 'lodash'

export const getErrors = state => _.get(state, ['loginPage', 'errorMessage'])

export const getSuccessLogin = state => _.get(state, ['loginPage', 'isSuccess'])

export const getIsChangePass = state =>
  _.get(state, ['loginPage', 'isChangePassword'])
