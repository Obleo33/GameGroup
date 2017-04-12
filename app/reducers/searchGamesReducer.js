export const searchGamesDisplay = (state=[], action) => {
  switch(action.type) {
    case 'GET_GAMES':
      return [...state, ...action.games]
    default:
      return state
  }
}

export const searchIds = (state=[], action) => {
  switch(action.type){
    case 'SEARCH_GAME_IDS':
      return [...state, ...action.searchIds]
    default:
      return state
  }
}
