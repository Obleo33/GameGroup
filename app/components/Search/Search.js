import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

class Search extends Component {

  componentDidMount(){
    this.props.searchGames('catan')
    this.props.getGames([0,9], this.props.searchIds)
  }

  render() {
    return (
      <div>I AM THE SEARCH COMPONENT
        <button onClick={console.log(this.props.getGames([0,9], [27766]))}></button>
      </div>
    )
  }
}

export default Search
