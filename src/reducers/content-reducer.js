import * as actionTypes from '../action-types'

const initialState = {
  load: false,
  text: '',
  error: null,
}

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CONTENT_FETCH:
      return { ...state, load: true }
    case actionTypes.CONTENT_FETCHED:
      return { ...state, load: false, text: action.payload }
    case actionTypes.CONTENT_FETCH_ERROR:
      return { ...state, load: false, error: action.payload }
    default:
      return state
  }
}

export default contentReducer
