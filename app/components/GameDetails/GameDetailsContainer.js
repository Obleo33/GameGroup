import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import GameDetails from './GameDetails'

const mapStateToProps = state =>  {
  return state
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

const GameDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(GameDetails)

export default GameDetailsContainer
