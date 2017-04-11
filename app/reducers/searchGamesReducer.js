export const games = (state=[], action) => {
  switch(action.type) {
    case 'GET_GAMES':
      return [...state, ...action.games]
    default:
      return state
  }
}
