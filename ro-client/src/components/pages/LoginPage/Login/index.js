import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { Authorization } from '../../../_common'
import { fetchLogin } from '../../../../redux/modules/login'
import { getSuccessLogin } from '../../../../selectors/login'
import { Container } from './styled'

const Login = ({ isSuccess, fetchLogin }) => {
  if (isSuccess) return <Redirect to="/" />

  const onLoginUser = user => fetchLogin(user)
  return (
    <Container>
      <Authorization handleSubmit={onLoginUser} />
    </Container>
  )
}

const mapStateToProps = state => ({
  isSuccess: getSuccessLogin(state),
})

export default connect(
  mapStateToProps,
  { fetchLogin }
)(Login)
