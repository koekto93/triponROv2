import React, { Component } from 'react'

import { getTrips } from '../../../api/workWithTrip'
import { Container } from './styled'

export class MainPage extends Component {
  fetchTrips() {
    getTrips()
  }

  render() {
    return (
      <Container>
        <div>Главная страница</div>
        <button onClick={this.fetchTrips}>FFF</button>
      </Container>
    )
  }
}

export default MainPage
