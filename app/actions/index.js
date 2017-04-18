import { gameCleaner, filterGames, displayGames } from '../helper.js'

//Search API calls
export const searchGames = (searchString) => {
  return dispatch => {
    fetch(`/api/games?search=${searchString}`)
        .then((response) => response.json())
        .then(response => filterGames(response.items.item))
        .then(searchIds => dispatch(searchResults(searchIds)))
        .then(obj => {
          let topResults

          if(obj.searchIds.length <= 10){
            topResults = obj.searchIds
          } else {
            topResults = displayGames(obj.searchIds, 0, 10)
          }
          const display = topResults.map(gameId => getGame(gameId))
          Promise.all(display)
            .then(display => dispatch(updateDisplayGames(display)))
        })
  }
}

const getGame = (gameId) => {
  return fetch(`/api/thing?game=${gameId}`)
    .then(response => response.json())
    .then(response => gameCleaner(response.items.item))
}


export const loadCollectionFromStorage = () => {
  const collectionString = localStorage.getItem('storedCollection')

  if (collectionString === null) {
    localStorage.setItem('storedCollection', '[]')
  }

  const storedCollection = JSON.parse(localStorage.getItem('storedCollection'))

  return dispatch => dispatch(loadCollection(storedCollection))
}


//Search actions
export const searchResults = searchIds => {
  return {
    type: 'SEARCH_GAME_IDS',
    searchIds
  }
}

export const clearSearch = () => {
  return {
    type: 'CLEAR_SEARCH'
  }
}

export const clearDisplay = () => {
  return {
    type: 'CLEAR_DISPLAY'
  }
}


export const updateDisplayGames = games => {
  return {
    type: 'DISPLAY_GAMES',
    games
  }
}

//Collection actions

export const addCollection = game => {
  return {
    type: 'ADD_COLLECTION',
    game
  }
}

//Stored collection actions
export const loadCollection = collection => {
  return {
    type: 'LOAD_COLLECTION',
    collection
  }
}

export const updateCollection = collection => {
  return {
    type: 'UPDATE_COLLECTION',
    collection
  }
}
