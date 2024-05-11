import React, { Component } from 'react'

export class DailyTaskCard extends Component {
  render() {
    let IconBackColor = this.props.task.TaskBackgroundColor;

    return (
        <div className='Card'>
            <div className='DailyTaskTitleWrapper'>
                <div className='DailyTaskTitle'>
                <div style = {{backgroundColor: IconBackColor}} className='DailyTaskIcon'>
                    <img src = {"../img/" + this.props.task.TaskImage} className='DailyTaskImg'/>
                </div>
                <p className='DailyTaskName'>{this.props.task.TaskName}</p>
                </div>
                
                {!this.props.task.TaskIsCompleted &&
                    <div className='DailyTaskButton'>
                        <i className = 'fi fi-sr-refresh'/>
                    </div>
                }
            </div>
            <div className='DailyTaskInfoStatusWrapper'>
                <p>{this.props.task.TaskText}</p>
                <div style={{backgroundColor: this.props.task.TaskIsCompleted ? '#CAF05F': '#EDEDED'}} className='DailyTaskStatus'>{this.props.task.TaskProgress}</div>
            </div>
        </div>
    )
  }
}

export default DailyTaskCard