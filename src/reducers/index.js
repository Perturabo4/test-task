import { combineReducers } from 'redux'
import contentReducer from './content-reducer'
import listReducer from './list-reducer'

const rootReducer = combineReducers({
  list: listReducer,
  content: contentReducer,
})

export default rootReducer
