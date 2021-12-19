import { combineReducers } from 'redux'
import contentReducer from './content-reducer'
import listReducer from './list-reducer'
import layoutReducer from './layout-reducer'

const rootReducer = combineReducers({
  list: listReducer,
  content: contentReducer,
  layout: layoutReducer,
})

export default rootReducer
