import React, { Component } from 'react'
import LogoWrapper from './../Components/TitleWrapper'
import MinimizeMenuButton from './../Components/MinimizeMenuButton'
import UserCard from './../Components/UserCard'
import BackToMainMenu from './../Components/BackToMainMenu'
import { Link } from "react-router-dom";

export class MapEditMenu extends Component {
  render() {
    return (
        <div className='MenuWrapper'>
          <div className='Title'>
            <LogoWrapper city = {this.props.city}/>
            <MinimizeMenuButton />
        </div>

        <BackToMainMenu/>
        <p className='TitleText'>Редактирование карты</p>

        <div style = {{marginBottom: "auto"}} className='MainMenuButtonsWrapper'>
          <Link to  = "/favourite"><div className='MenuButton'>
          <i className = 'fi fi-sr-add'/>
          <p>Добавить объект</p>
          </div></Link>

          <Link to  = "/favourite"><div className='MenuButton'>
          <i className = 'fi fi-sr-edit'/>
          <p>Редактировать объект</p>
          </div></Link>

          <Link to  = "/favourite"><div className='MenuButton'>
          <i className = 'fi fi-sr-delete'/>
          <p>Удалить объект</p>
          </div></Link>
          
          <br></br>

          <Link to  = "/favourite"><div className='MenuButton'>
          <i className = 'fi fi-sr-road'/>
          <p>Добавить маршрут</p>
          </div></Link>

          <Link to  = "/favourite"><div className='MenuButton'>
          <i className = 'fi fi-sr-edit'/>
          <p>Редактировать маршрут</p>
          </div></Link>

          <Link to  = "/favourite"><div className='MenuButton'>
          <i className = 'fi fi-sr-delete'/>
          <p>Удалить маршрут</p>
          </div></Link>

          <br></br>
          
          <Link to = "/favourite"><div className='MainMenuButton'>
          <i className = 'fi fi-sr-star'/>
          <p>Предложения</p>
          </div></Link>
        </div>
        
        <UserCard ShowLvl = {false} ShowBalance = {false} IsItProfilePage = {false}/>
        </div>
    )
  }
}

export default MapEditMenu