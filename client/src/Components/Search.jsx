import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Search extends Component {
  render() {
    return (
      <div className='Search'>
        <textarea placeholder="Куда отправимся?" className = 'SearchBox'></textarea>
        <Link to = "/chat"><div className='SearchButton'><i className = 'fi fi-sr-search'></i></div></Link>
      </div>
    )
  }
}

export default Search