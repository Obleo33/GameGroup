import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

import SearchContainer from '../Search/SearchContainer'
import MyCollectionContainer from '../MyCollection/MyCollectionContainer'
import GameDetailsContainer from '../GameDetails/GameDetailsContainer'

class App extends Component {

  componentDidMount() {
    this.props.loadCollectionFromStorage()
  }

  render() {
    return (
      <div>
        <header>
          <h1>GAMEGROUP</h1>
          <nav className="site-nav">
            <NavLink className='my-collection-link navlink' to='/mycollection'>My Collection</NavLink>
            <NavLink className='search-link navlink' to='/search'>Search</NavLink>
          </nav>
        </header>
        <Route path='/search' component={ SearchContainer }/>
        <Route path='/mycollection' component={ MyCollectionContainer }/>
        <Route exact path='/game/:id' render={({ match }) => {
          const game = this.props.collection.find(game => game.id === match.params.id)
          return <GameDetailsContainer game={ game } history={ history } />
        }} />
      </div>
    )
  }
}

export default App
