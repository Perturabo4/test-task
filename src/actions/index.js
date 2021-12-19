import axios from 'axios'
import * as actions from '../action-types'

export const fetchArticles = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: actions.LIST_FETCH })
      const response = await axios.get(
        'https://api.spaceflightnewsapi.net/v3/articles?_limit=5'
      )
      dispatch({
        type: actions.LIST_FETCHED,
        payload: response.data,
      })
    } catch (error) {
      dispatch({
        type: actions.LIST_FETCH_ERROR,
        payload: 'Eror: Something went wrong',
      })
    }
  }
}

export const fetchContent = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actions.CONTENT_FETCH })
      const response = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles/${id}`
      )
      dispatch({
        type: actions.CONTENT_FETCHED,
        payload: response.data,
      })
    } catch (error) {
      dispatch({
        type: actions.CONTENT_FETCH_ERROR,
        payload: 'Eror: Something went wrong',
      })
    }
  }
}

export const setMobileOpen = () => {
  console.log('open mobile')
  return (dispatch) => {
    dispatch({ type: actions.SET_MOBILE_OPEN })
  }
}
