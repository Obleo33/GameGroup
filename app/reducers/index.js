import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { displaySearchedGames, searchIds } from './searchGamesReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  displaySearchedGames,
  searchIds,
})

export default rootReducer
