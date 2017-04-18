import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { updateStoredCollection } from '../../helper.js'

class Search extends Component {
  constructor(){
    super()
    this.state={
      search: '',
      range: [0,10]
    }
  }

  componentDidMount(){
    this.props.clearDisplay()
  }

  componentWillReceiveProps(props){
    props.collection.length && updateStoredCollection(props.collection)
  }

  handleClick(e){
    e.preventDefault()
    this.props.clearSearch()
    this.props.searchGames(this.state.search)
    this.setState({ search: '' })
  }

  handleChange(e){
    this.setState({ search: e.target.value })
  }

  handlePage(e){
    const buttonType = e.target.name
    let [min, max] = this.state.range
    const end = this.props.searchIds.length

    console.log(end);
    // buttonType === 'next' && () =>
    // buttonType === 'previous' && () =>
    //
    // this.setState({ range: [min, max] })
  }

  handleAdd(game){
    const collectionKeys = this.props.collection.map(game => game.id)
    if(collectionKeys.indexOf(game.id) === -1){
      this.props.addCollection(game)
    } else {
      console.log('game already in collection');
    }
  }

  render() {
    return (
      <div className="game-search">
        <form>
          <label>Search for a game</label>
          <input value={this.state.search} onChange={this.handleChange.bind(this)} placeholder="Search for a game"></input>
          <button onClick={this.handleClick.bind(this)}>Submit</button>
        </form>
        <p>Your search returned {this.props.searchIds.length} results</p>
        <button name="previous" onClick={ this.handlePage.bind(this) }>Previous Page</button>
        <button name="next" onClick={ this.handlePage.bind(this) }>Next Page</button>
        <section className='search-game-container'>
          {this.props.displaySearchedGames.map(game => {
            return(
              <div className="game-card" key={game.id}>
                <h2 className="game-title">{game.name}</h2>
                <img className="game-image" src={game.image}></img>
                <button className="add-collection-button" onClick={ () => this.handleAdd(game) }>Add To Collection</button>
              </div>
            )
          })}

        </section>
      </div>
    )
  }
}

export default Search
