import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { games } from './searchGamesReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  games,
})

export default rootReducer
