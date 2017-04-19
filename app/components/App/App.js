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
      <div className="game-group-container">
        <header>
          <h1>GAMEGROUP 1.0</h1>
          <nav className="site-nav">
            <NavLink className='my-collection-link navlink' to='/mycollection'>My Collection</NavLink>
            <NavLink className='search-link navlink' to='/search'>Search</NavLink>
          </nav>
        </header>
        <div>
          <Route path='/search' render={({history}) => <SearchContainer history={ history }/>}/>
          <Route path='/mycollection' render={({history}) => <MyCollectionContainer history={ history }/>}/>
          <Route exact path='/game/:id' render={({ match, history }) => {
            const game = this.props.collection.find(game => game.id === match.params.id)
            return <GameDetailsContainer game={ game } history={ history } />
          }} />
        </div>
      </div>
    )
  }
}

export default App
