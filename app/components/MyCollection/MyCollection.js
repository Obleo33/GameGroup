import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

class MyCollection extends Component {


  handleRemove(id){
    console.log('remove', id);
    this.props.removeFromCollection(id, this.props.collection)
  }

  viewCollection(){
    if(this.props.collection.length){
      return this.props.collection.map(game => {
        return (
          <div className="collection-card" key={ `collection-${game.id}` }>
            <div className="game-title-collection">{game.name}</div>
            <Link to={ `/game/${game.id}` }>
              <img className="game-image-collection" src={ game.image }></img>
            </Link>
            <button className="remove-button" onClick={() => this.handleRemove(game.id)}>Remove</button>
          </div>
        )
      })
    }
    return (
      <p className="collection-msg">Please use the search tab to locate and add games</p>
    )
  }

  render(){
    return (
      <div className="collection">
        <div className="collection-message">
          <p>there are {this.props.collection.length} games in your collection</p>
        </div>
        <section className="collection-container">
          {this.viewCollection()}
        </section>
      </div>
    )
  }
}


export default MyCollection
