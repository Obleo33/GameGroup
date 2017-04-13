const initialState = []

export const displaySearchedGames = (state=[], action) => {
  console.log(action)
  switch(action.type) {
    case 'DISPLAY_GAMES':
      return [...state, action.game]
    case 'CLEAR_DISPLAY':
      return initialState
    default:
      return state
  }
}

export const searchIds = (state=[], action) => {
  switch(action.type){
    case 'SEARCH_GAME_IDS':
      return [...action.searchIds]
    case 'CLEAR_SEARCH':
      return []
    default:
      return state
  }
}
