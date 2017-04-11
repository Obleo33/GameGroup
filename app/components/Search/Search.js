import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

class Search extends Component {

  componentDidMount(){
    this.props.searchGames('conan')
  }

  render() {
    return (
      <div>I AM THE SEARCH COMPONENT</div>
    )
  }
}

export default Search
