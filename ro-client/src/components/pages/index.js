import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'

import MainPage from './MainPage'
import SecondPage from './SecondPage'
import Login from './Login'
import Registration from './Registration'

import { Container } from './styled'

class Pages extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Redirect from="/" exact to="/login" />
          <Route path="/mainPage" component={MainPage} />
          <Route path="/secondPage" component={SecondPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
        </Switch>
      </Container>
    )
  }
}

const mapStateToProps = () => ({})

export default withRouter(connect(mapStateToProps)(Pages))
