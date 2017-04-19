import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { displaySearchedGames, searchIds, displayPages } from './searchGamesReducer'
import { collection } from './myCollectionReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  displaySearchedGames,
  searchIds,
  collection,
  displayPages
})

export default rootReducer
