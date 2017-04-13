//Search API calls
export const searchGames = (searchString) => {
  return dispatch => {
    fetch(`/api/games?search=${searchString}`)
        .then((response) => response.json())
        .then(response => gameIds(response.items.item))
        .then(searchIds => dispatch(searchResults(searchIds)))
        .then(obj => {
          const firstTen = obj.searchIds.slice(0,10)
          const display = firstTen.map(gameId => getGame(gameId))
          Promise.all(display)
            .then(display => dispatch(displayGames(display)))
        })


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
  return fetch(`/api/thing?game=${gameId}`)
    .then(response => response.json())
    .then(response => response.items.item)
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

export const displayGames = games => {
  console.log(games);
  return {
    type: 'DISPLAY_GAMES',
    games
  }
}
