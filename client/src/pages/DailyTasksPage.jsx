import React, { Component } from 'react'
import MinimizeMenuButton from './../Components/MinimizeMenuButton'
import UserCard from './../Components/UserCard'
import DailyTasks from './../Components/DailyTasks'
import BackToMainMenu from './../Components/BackToMainMenu'
import DailyTasksWrapper from './../Components/DailyTasksWrapper'
import { Link } from "react-router-dom";

export class DailyTasksPage extends Component {
  render() {
    return (
        <div className='MenuWrapper'>

        <div className='Title'>
        <BackToMainMenu/>
        <MinimizeMenuButton />
        </div>

        <UserCard ShowLvl = {true} ShowBalance = {true} IsItProfilePage = {true}/>
        <div className='MainMenuButtonsWrapper'>
              <Link to = "/shop"><div className='MainMenuButton'>
              <img className = 'SmallImg' src = "../img/shop.png"/>
              <p>В магазин</p>
              </div></Link>
        </div>

        <DailyTasks ShowInfo = {true} ShowLvl = {false}/>

        <div>
        <p style = {{marginBottom: "5px"}}>Прогресс выполнения</p>
        <p className='DailyTasksAbout'>Вы можете поменять ежедневное задание 1 раз в день</p>
        </div>

        <DailyTasksWrapper dailytasks = {this.props.dailytasks}/>
        </div>
    )
  }
}

export default DailyTasksPage