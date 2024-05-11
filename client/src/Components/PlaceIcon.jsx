import React, { Component } from 'react'

export class PlaceIcon extends Component {
  render() {
    return (
      <div className='PlaceIconWrapper'>
        <img className = 'PlaceIconImage' src = {"../img/" + this.props.place.PlaceImage}/>
        <p className='PlaceIconText'>{this.props.place.name}</p>
      </div>
    )
  }
}

export default PlaceIcon