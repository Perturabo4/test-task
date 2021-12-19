import * as actionTypes from '../action-types'

const initialState = {
  mobileOpen: false,
}

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MOBILE_OPEN:
      return { mobileOpen: !state.mobileOpen }
    default:
      return state
  }
}

export default layoutReducer
