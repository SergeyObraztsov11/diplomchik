import React, { Component } from 'react'
import LocationCard from './LocationCard'

export class LocationsWrapper extends Component {
  render() {
    return (
      <div className='CardsWrapper'>
        {this.props.locations?.map(CurrentLocation => (
        <LocationCard key = {CurrentLocation.PlaceId} location = {CurrentLocation} />
        ))}
      </div>
    )
  }
}

export default LocationsWrapper