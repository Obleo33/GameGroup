import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { displaySearchedGames, searchIds, collection } from './searchGamesReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  displaySearchedGames,
  searchIds,
  collection
})

export default rootReducer
