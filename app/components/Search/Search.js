import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { updateStoredCollection, displayGames } from '../../helper.js'

class Search extends Component {
  constructor(){
    super()
    this.state={
      search: '',
      page: 1
    }
  }

  componentWillReceiveProps(props){
    props.collection.length && updateStoredCollection(props.collection)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.clearDisplay()
    this.props.clearSearch()
    this.setState({ page: 1 })
    this.props.searchGames(this.state.search)
    this.setState({ search: '' })
  }

  handleSearchInput(e){
    this.setState({ search: e.target.value })
  }

  handleAdd(game){
    const collectionKeys = this.props.collection.map(game => game.id)
    if(collectionKeys.indexOf(game.id) === -1){
      this.props.addCollection(game)
    } else {
      console.log('game already in collection');
    }
  }

  handlPage(e){
    this.setState({ page: e.target.name })
    if(!this.props.displaySearchedGames[e.target.name]){
      const page = this.props.displayPages[e.target.name]
      this.props.showGames(page, e.target.name)
    } else {

    }
  }

  searchResults() {
    if(this.props.searchIds.length){
      return <p className="results">Your search returned {this.props.searchIds.length} results</p>
    }
  }

  pages() {
    if(this.props.searchIds.length){
      const keys = Object.keys(this.props.displayPages)

      return (
        <div className="page-container">
          {keys.map(key => <button className="page-button"
                                   key={`page-${key}`}
                                   name={key}
                                   onClick={this.handlPage.bind(this)}>{key}</button>)}
        </div>
      )
    }
  }

  displaySearched() {
    const display = this.props.displaySearchedGames[this.state.page]

      console.log(display)
    if (display) {
      return display.map(game => {
        return(
          <div key={game.id} className="game-card" >
            <h2 className="game-title">{game.name}</h2>
            <img className="game-image" src={game.image}></img>
            <button className="add-collection-button" onClick={ () => this.handleAdd(game) }>Add To Collection</button>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div className="game-search">
        <form>
          <label>Search:</label>
          <input className="search-input"
                 value={this.state.search}
                 onChange={this.handleSearchInput.bind(this)}
                 placeholder="Search for a game"></input>
          <button className="submit-button"
                  onClick={this.handleSubmit.bind(this)}
                  disabled={!this.state.search}>Submit</button>
        </form>
        {this.searchResults()}
        {this.pages()}
        <section className='search-game-container'>
          {this.displaySearched()}
        </section>
      </div>
    )
  }
}

export default Search
