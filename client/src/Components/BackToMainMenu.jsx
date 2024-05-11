import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class BackToMainMenu extends Component {
  render() {
    return (
      <Link style = {{width: "fit-content"}} to = "/mainmenu">
        <div className='SecondarySmallButton'>
            <i className = 'fi-sr-angle-left'/>
            <p>Обратно в меню</p>
        </div>
        </Link>
    )
  }
}

export default BackToMainMenu