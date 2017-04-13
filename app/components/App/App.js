import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

import SearchContainer from '../Search/SearchContainer'

class App extends Component {


  render() {
    return (
      <div>
        <Route exact path='/' component={ SearchContainer }/>
      </div>
    )
  }
}

export default App
