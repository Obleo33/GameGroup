//Search API calls
export const searchGames = (searchString) => {
  return dispatch => {
    fetch(`/api/games?search=${searchString}`)
        .then((response) => response.json())
        .then(response => gameIds(response.items.item))
        .then(searchIds => dispatch(searchResults(searchIds)))
        .then(array => getGame(array.searchIds[2]))
        .then(game => console.log(game))
  }
}
  // .then(searchIds => dispatch(searchResults(searchIds)))

// dispatch(searchResults(searchIds))

const gameIds = (searchArr) => {
  return searchArr.reduce((a,b) => {
    if(b.type === 'boardgame'){
      return [...a, b.id]
    }
    return a
  },[])
}


const getGame = (gameId) => {
  console.log(gameId);
  return fetch(`/api/thing?game=${gameId}`)
    .then(response => response.json())
    .then(response => gameCleaner(response.items.item))
}

const gameCleaner = (rawGame) => {
  const game = {
    name: rawGame.name.find(name => name.type === 'primary')
  }

  return game
}


//Search reducer
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

export const displayGames = game => {
  console.log('in the action', game);
  return {
    type: 'DISPLAY_GAMES',
    game
  }
}
