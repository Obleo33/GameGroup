import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import MyCollection from './MyCollection'

const mapStateToProps = state =>  {
  return state
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

const MyCollectionContainer = connect(mapStateToProps, mapDispatchToProps)(MyCollection)

export default MyCollectionContainer
