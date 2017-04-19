import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import { updateStoredCollection, displayGames } from '../../helper.js'

class Search extends Component {
  constructor(){
    super()
    this.state={
      search: '',
      range: [0,10]
    }
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
    const page = this.props.displayPages[e.target.name]

    return dispatch => dispatch(this.props.showGames(page, dispatch))
  }

  searchResults() {
    if(this.props.searchIds.length){
      return <p>Your search returned {this.props.searchIds.length} results</p>
    }
  }

  pages() {
    if(this.props.searchIds.length){
      const keys = Object.keys(this.props.displayPages)

      return (
        <div className="page-container">
          {keys.map(key => <button className="page-button"
                                   name={key}
                                   onClick={this.handlPage.bind(this)}>{key}</button>)}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="game-search">
        <form>
          <label>Search for a game</label>
          <input value={this.state.search}
                 onChange={this.handleChange.bind(this)}
                 placeholder="Search for a game"></input>
          <button onClick={this.handleClick.bind(this)}>Submit</button>
        </form>
        {this.searchResults()}
        {this.pages()}
        <section className='search-game-container'>
          {this.props.displaySearchedGames.map(game => {
            return(
              <div key={game.id} className="game-card" >
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
