import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class DailyTasks extends Component {
  render() {
    return (
      <Link to = '/dailytasks'>
      <div className='DailyTasksWrapper'>
            <div className='DailyTasksStatusWrapper'>
                <p className='DailyTasksTitle'>Ежедневные задания</p>
                <div className='DailyTasksStatus'>В процессе</div>
            </div>
            {this.props.ShowInfo &&
              <p className='DailyTasksAbout'>Выполняйте ежедневные задания, чтобы повышать уровень профиля</p>
            }
            <div className='DailyTasksIconsWrapper'>
                <div className='DailyTasksIcons'>
                    <div className='DailyTaskIconCompleted'><img className = 'SmallImg' src = "../img/completed.png"/></div>
                    <div className='DailyTaskIconCompleted'><img className = 'SmallImg' src = "../img/completed.png"/></div>
                    <div className='DailyTaskIconIncompleted'><img className = 'SmallImg' src = "../img/notcompleted.png"/></div>
                </div>
                <div className='DailyTaskIconIncompleted'><img className = 'SmallImg' src = "../img/chest.png"/></div>
            </div>
            {this.props.ShowLvl &&
              <div className='UserLvlWrapper'>
              <p className='UserLvl'>6</p>
              <div className='UserLvlProgressWrapper'>
                <div style = {{width: "36%"}} className='UserLvlProgress'></div>
              </div>
              <p className='UserLvl'>7</p>
              </div>
            }
      </div>
      </Link>
    )
  }
}

export default DailyTasks