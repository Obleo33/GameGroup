import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

class MyCollection extends Component {

  viewCollection(){
    console.log(this.props.collection.length);
    if(this.props.collection.length){
      console.log('hey');
      return this.props.collection.map(game => {
        return (
          <div key={game.id}>{game.name}</div>
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
        {this.viewCollection()}
      </div>
    )
  }
}


export default MyCollection
