import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'

import MainPage from './MainPage'
import SecondPage from './SecondPage'
import LoginPage from './LoginPage'
import Registration from './Registration'
import { PrivateRoute } from '../layouts/PrivateRoute'

import { Container } from './styled'

class Pages extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Redirect from="/" exact to="/mainPage" />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={Registration} />
          <PrivateRoute path="/mainPage" component={MainPage} />
          <PrivateRoute path="/secondPage" component={SecondPage} />
        </Switch>
      </Container>
    )
  }
}

const mapStateToProps = () => ({})

export default withRouter(connect(mapStateToProps)(Pages))
