import React, { Component } from 'react'
import MinimizeMenuButton from './../Components/MinimizeMenuButton'
import UserCard from './../Components/UserCard'
import DailyTasks from './../Components/DailyTasks'
import BackToMainMenu from './../Components/BackToMainMenu'
import LocationsWrapper from './../Components/LocationsWrapper'
import ProfileSwitch from './../Components/ProfileSwitch'
import { Link } from "react-router-dom"

export class Profile extends Component {
  render() {
    return (
        <div className='MenuWrapper'>

        <div className='MenuTopButtonsWrapper'>
        <BackToMainMenu/>
        <Link to  = '/profile/settings'><div className='SecondarySmallButton'>
          <i className = 'fi fi-sr-settings'/>
          <p>Настройки</p>
        </div></Link>
        <MinimizeMenuButton />
        </div>

        <UserCard ShowLvl = {true} ShowBalance = {true} IsItProfilePage = {true}/>
        <DailyTasks ShowInfo = {true} ShowLvl = {false}/>
        
        <div className='MainMenuButtonsWrapper'>
              <Link to  = "/shop"><div className='MainMenuButton'>
              <img className = 'SmallImg' src = "../img/shop.png"/>
              <p>В магазин</p>
              </div></Link>
        </div>      
        <ProfileSwitch />
        <LocationsWrapper locations = {this.props.locations}/>
        <br></br>
        </div>
    )
  }
}

export default Profile