import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as actions from '../actions'

const useAction = () => {
  const dispatch = useDispatch()

  return bindActionCreators(actions, dispatch)
}

export default useAction
