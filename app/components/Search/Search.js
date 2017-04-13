import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

class Search extends Component {
  constructor(){
    super()
    this.state={
      search: '',
      range: [0,1]
    }
  }

  componentDidMount(){
    this.props.clearDisplay()
  }

  handleClick(e){
    e.preventDefault()
    // this.props.clearSearch()
    this.props.searchGames(this.state.search)
    this.setState({ search: '' })
  }

  handleChange(e){
    this.setState({ search: e.target.value })
  }

  render() {
    return (
      <div className="game-search">
        <form>
          <label>Search for a game</label>
          <input value={this.state.search} onChange={this.handleChange.bind(this)} placeholder='Search for a game'></input>
          <button onClick={this.handleClick.bind(this)}>Submit</button>
        </form>
        <p>Your search returned {this.props.searchIds.length} results</p>
        <button onClick={()=> this.props.getGame(13) }>View results</button>
      </div>
    )
  }
}

export default Search
