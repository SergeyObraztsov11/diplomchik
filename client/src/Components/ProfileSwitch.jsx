import React, { Component } from 'react'

export class ProfileSwitch extends Component {
  render() {
    return (
      <div className='ProfileSwitch'>
        <p className='ActiveSwitchText'>Отзывы</p>
        <p className='SwitchText'>Изменения</p>
      </div>
    )
  }
}

export default ProfileSwitch