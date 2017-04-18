import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

import SearchContainer from '../Search/SearchContainer'
import MyCollectionContainer from '../MyCollection/MyCollectionContainer'

class App extends Component {

  componentDidMount() {
    this.props.loadCollectionFromStorage()
  }

  render() {
    return (
      <div>
        <header>
          <h1>GAMEGROUP</h1>
          <nav>
            <NavLink className='my-collection-link navlink' to='/mycollection'>My Collection</NavLink>
            <NavLink className='search-link navlink' to='/search'>Search</NavLink>
          </nav>
        </header>
        <Route path='/search' component={ SearchContainer }/>
        <Route path='/mycollection' component={ MyCollectionContainer }/>
      </div>
    )
  }
}

export default App


// var ideaString = localStorage.getItem('storedIdeas');
// if (ideaString === null){
//   localStorage.setItem('storedIdeas','[]')
// } else {
//   var ideaArray = JSON.parse(ideaString);
//   makeIdeaCardsFromStorage(ideaArray);
// }
// });
