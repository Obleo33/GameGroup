import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { updateStoredCollection, displayGames } from '../../helper.js'

class GameDetails extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return (
      <div className="game-detail">
          {this.props.game.name}
        <button className='back-button' onClick={() => this.props.history.push('/mycollection')}> Back </button>
      </div>
    )
  }
}

export default GameDetails
