import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Login from './Login'

export class LoginPage extends Component {
  state = { Redirect: false }

  componentDidMount() {
    if (localStorage.getItem('ro-jwt-client')) this.setState({ Redirect: true })
  }

  render() {
    if (this.state.Redirect) {
      return <Redirect to="/" />
    }

    return (
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    )
  }
}

export default LoginPage
