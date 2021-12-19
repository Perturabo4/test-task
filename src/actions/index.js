import axios from 'axios'
import { LIST_FETCH, LIST_FETCHED, LIST_FETCH_ERROR } from '../action-types'

export const fetchArticles = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LIST_FETCH })
      const response = await axios.get(
        'https://api.spaceflightnewsapi.net/v3/articles'
      )
      dispatch({
        type: LIST_FETCHED,
        payload: response.data,
      })
    } catch (error) {
      dispatch({
        type: LIST_FETCH_ERROR,
        payload: 'Eror: Something went wrong',
      })
    }
  }
}
