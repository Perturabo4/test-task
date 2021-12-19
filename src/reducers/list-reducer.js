import * as actionTypes from '../action-types'

const initialState = {
  load: false,
  list: [],
  error: null,
}

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIST_FETCH:
      return { ...state, load: true }
    case actionTypes.LIST_FETCHED:
      return { ...state, load: false, list: action.payload }
    case actionTypes.LIST_FETCH_ERROR:
      return { ...state, load: false, error: action.payload }
    default:
      return state
  }
}

export default listReducer
