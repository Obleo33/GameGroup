import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

class MyCollection extends Component {

  viewCollection(){
    console.log(history)
    if(this.props.collection.length){
      return this.props.collection.map(game => {
        return (
          <Link to={`/game/${game.id}`} key={`collection-${game.id}`}>
            <div className="game-title">{game.name}</div>
          </Link>
        )
      })
    }
    return (
      <p>There are no games in your collection. Please use the search tab to locate and add games</p>
    )
  }

  render(){
    return (
      <div className="collection-container">
        <p>there are {this.props.collection.length} games in your collection</p>
        {this.viewCollection()}
      </div>
    )
  }
}


export default MyCollection
