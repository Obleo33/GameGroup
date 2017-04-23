import { gameCleaner, filterGames, displayGames, searchPages } from '../helper.js'

//Search API calls
export const searchGames = (searchString) => {
  return dispatch => {
    fetch(`/api/games?search=${searchString}`)
      .then((response) => response.json())
      .then(response => filterGames(response.items.item))
      .then(searchIds => dispatch(searchResults(searchIds)))
      .then(result => dispatch(storeSearchPages(searchPages(result.searchIds))))
  }
}

export const getGame = (gameId) => {
  return fetch(`/api/thing?game=${gameId}`)
    .then(response => response.json())
    .then(response => gameCleaner(response.items.item))
}

export const showGames = (arr, page) => {

  return dispatch => {
    const display = arr.map(gameId => getGame(gameId))

    Promise.all(display)
    .then(games => {return { [page]: games}})
    .then(display => dispatch(updateDisplayGames(display)))
  }

}

export const loadCollectionFromStorage = () => {
  const collectionString = localStorage.getItem('storedCollection')

  if (collectionString === null) {
    localStorage.setItem('storedCollection', '[]')
  }

  const storedCollection = JSON.parse(localStorage.getItem('storedCollection'))

  return dispatch => dispatch(loadCollection(storedCollection))
}

export const removeFromCollection = (id, collection) => {
  const newCollection = collection.filter(game => game.id !== id)

  return dispatch => dispatch(removeCollection(newCollection))
}


//Search actions
export const searchResults = searchIds => {
  return {
    type: 'SEARCH_GAME_IDS',
    searchIds
  }
}

export const storeSearchPages = displayPages => {
  return {
    type: 'SEARCH_PAGES',
    displayPages
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
  console.log(games)
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

export const removeCollection = collection => {
  console.log('removeCollection');
  return {
    type: 'REMOVE_COLLECTION',
    collection
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
