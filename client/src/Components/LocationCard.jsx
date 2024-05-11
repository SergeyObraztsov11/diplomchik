import React, { Component } from 'react'

export class LocationCard extends Component {
  render() {
    return (
      <div className='LocationCard'>
        <div className='LocationCardTitleWrapper'>
            <div className='LocationCardNameRatingWrapper'>
            <b className='LocationCardName'>{this.props.location.PlaceName}</b>
            <p className='LocationCardRating'>{"★ " + this.props.location.PlaceRating}</p>
            </div>
            <div className='CardEditButton'>
                <p>Ред.</p>
                <i className = 'fi fi-sr-edit'/>
            </div>
        </div>
        <p className='LocationCardInfo'>{this.props.location.PlaceInfo}</p>
        <div className='LocationCardImageWrapper'>
            <img src = {"../img/" + this.props.location.PlaceImage} className='LocationCardImage'></img>
            <img src = {"../img/" + this.props.location.PlaceImage} className='LocationCardImage'></img>
            <img src = {"../img/" + this.props.location.PlaceImage} className='LocationCardImage'></img>
        </div>
      </div>
    )
  }
}

export default LocationCard