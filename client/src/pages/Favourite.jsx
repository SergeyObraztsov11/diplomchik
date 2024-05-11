import React, { Component } from 'react'
import MinimizeMenuButton from './../Components/MinimizeMenuButton'
import UserCard from './../Components/UserCard'
import BackToMainMenu from './../Components/BackToMainMenu'
import LocationsWrapper from './../Components/LocationsWrapper'

export class Favourite extends Component {
  render() {
    return (
        <div className='MenuWrapper'>
        <div className='MenuTopButtonsWrapper'>
        <BackToMainMenu/>
        <MinimizeMenuButton />
        </div>

        <p className='TitleText'>Избранное</p>

        <LocationsWrapper locations = {this.props.locations}/>
        
        <UserCard ShowLvl = {false} ShowBalance = {false} IsItProfilePage = {false}/>
        </div>
    )
  }
}

export default Favourite