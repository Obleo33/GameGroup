import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Search from './Search'

const mapStateToProps = state =>  {
  return state
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)

export default SearchContainer
