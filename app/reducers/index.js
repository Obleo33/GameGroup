import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { displaySearchedGames, searchIds, collection, displayPages } from './searchGamesReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  displaySearchedGames,
  searchIds,
  collection,
  displayPages
})

export default rootReducer
