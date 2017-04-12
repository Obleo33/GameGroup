import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { searchGamesDisplay, searchIds } from './searchGamesReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  searchGamesDisplay,
  searchIds,
})

export default rootReducer
