import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class UserCard extends Component {
  render() {

    let MB = 30;

    if (this.props.IsItProfilePage) {
      MB = 0;
    }

    return (
      <Link to = "/profile">
      <div style = {{marginBottom: MB + "px"}} className='UserCardWrapper'>
        <div className='UserInfoWrapper'>
          <img className = 'UserCardImage' src = "../img/User1Avatar.png"/>
          <div className='UserCardInfo'>
            <p className='UserName'>Щуковская Анастасия</p>
            <p className='UserRole'>Проверенный пользователь </p>
          </div>
        </div>
        {this.props.ShowLvl &&
        <div className='UserLvlWrapper'>
          <p className='UserCardText'>6</p>
          <div className='UserLvlProgressWrapper'>
          <div style = {{width: "16%"}} className='UserLvlProgress'></div>
          </div>
          <p className='UserCardText'>7</p>
        </div>        
        }
        {this.props.ShowBalance &&
        <div className='UserLvlWrapper'>
          <p className='UserCardText'>Баланс</p>
          <div className='UserBalance'>
            <p className='UserCardText'>542 фантики</p>
            <img className='SmallImg'src='../img/crystall.png'/>
          </div>
        </div>        
        }
      </div>
      </Link>
    )
  }
}

export default UserCard