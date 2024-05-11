import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import DailyTasks from './../Components/DailyTasks'

export class MAP extends Component {
  render() {
    return (
        <div className='Page'>
          
        <Outlet/>

        <div className='ExpandMenuButton'>
          <i className = 'fi fi-sr-angle-double-right'/>
        </div>

        <div className='MapTopButtonsContainer'>
        <div className='MapButton'>
          <i className = 'fi fi-sr-edit'/>
        </div>

        <div className='MapButton'>
          <i className = 'fi fi-sr-map'/>
        </div>

        <div className='MapButton'>
          <i className = 'fi fi-sr-moon'/>
        </div>

        <div className='MapButton'>
          <i className = 'fi fi-sr-protractor'/>
        </div>
      </div>

      <div className='MapSideButtons'>
        <div className='MapSideButtonsContainer'>
          <div className='MapButton'>
          <i className = 'fi fi-sr-plus-small'/>
          </div>

          <div className='MapButton'>
          <i className = 'fi fi-sr-minus-small'/>
          </div>
        </div>

        <div className='MapSideButtonsContainer'>
          <div className='MapButton'>
          <i className = 'fi fi-sr-map-marker'/>
          </div>
        </div>

        <div className='MapSideButtonsContainer'>
          <div className='MapButton'>
          <i className = 'fi fi-sr-man-head'/>
          </div>
        </div>
      </div>

      <div className='SideDailyTasksWrapper'>
        <DailyTasks ShowInfo = {false} ShowLvl = {true}/>
      </div>

      <div className = 'WorldMap'></div>
      </div>
    )
  }
}

export default MAP