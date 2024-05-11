import React, { Component } from 'react'

export class LogoWrapper extends Component {
  render() {
    return (
      <div className='TitleWrapper'>
            <a href = "/mainmenu"><img className = 'Logo' src = "../img/Logo.png"></img></a>
            <div className='TitleCityWrapper'>
                <h1 className = 'TitleText'>Всеместа</h1>
                <i style = {{color: "#909090"}} className = 'fi fi-sr-marker'></i>
                <p className = 'TitleCity'>{this.props.city}</p>
            </div>
      </div>
    )
  }
}

export default LogoWrapper