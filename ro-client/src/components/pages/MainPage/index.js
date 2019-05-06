import React, { Component } from 'react'

import { getTrips, getTrip, updateTrip } from '../../../api/workWithTrip'
import { Container } from './styled'

export class MainPage extends Component {
  fetchTrips() {
    getTrips()
  }

  fetchTripsById() {
    getTrip('')
  }

  updateTrip() {
    updateTrip('5ccfcff5b53c7681744a1fbc', { from: 'Tula' })
  }

  render() {
    return (
      <Container>
        <div>Главная страница</div>
        <button onClick={this.fetchTrips}>all</button>
        <button onClick={this.fetchTripsById}>get</button>
        <button onClick={this.updateTrip}>update</button>
      </Container>
    )
  }
}

export default MainPage
