import React, { Component } from 'react'
import LogoWrapper from './../Components/TitleWrapper'
import MinimizeMenuButton from './../Components/MinimizeMenuButton'
import UserCard from './../Components/UserCard'
import PlacesWrapper from './../Components/PlacesWrapper'
import BackToMainMenu from './../Components/BackToMainMenu'

export class AllPlases extends Component {
  render() {
    const AllPlases = this.props.places.length;

    return (
        <div className='MenuWrapper'>
        <div className='Title'>
          <LogoWrapper city = {this.props.city}/>
          <MinimizeMenuButton />
        </div>

        <BackToMainMenu/>
        
        <PlacesWrapper places = {this.props.places.filter(CurrentPlace => CurrentPlace.PlaceId < 4)} WrapperText = "Недавнее" WrapperButtonEnabled = {false}/>
        <PlacesWrapper places = {this.props.places.filter(CurrentPlace => CurrentPlace.PlaceId < 9)} WrapperText = "Рекомендуемое" WrapperButtonEnabled = {false}/>
        <PlacesWrapper places = {this.props.places} WrapperText = {AllPlases + " мест найдено"} WrapperButtonEnabled = {false}/>
        
        <UserCard ShowLvl = {false} ShowBalance = {false} IsItProfilePage = {false}/>
        </div>
    )
  }
}

export default AllPlases