import React, { Component } from 'react'
import DailyTaskCard from './DailyTaskCard'

export class DailyTasksWrapper extends Component {
  render() {
    return (
        <div style = {{marginBottom: "30px"}} className='CardsWrapper'>
        {this.props.dailytasks?.map(CurrentTask => (
        <DailyTaskCard key = {CurrentTask.TaskId} task = {CurrentTask} />
        ))}
      </div>
    )
  }
}

export default DailyTasksWrapper