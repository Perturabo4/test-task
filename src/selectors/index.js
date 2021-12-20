import { createSelector } from 'reselect'

const selectList = (state) => state.list.list
const selectListLoad = (state) => state.list.load
const selectListError = (state) => state.list.error

const selectContent = (state) => state.content.content
const selectContentLoad = (state) => state.content.load
const selectContentError = (state) => state.content.error

export const selectContentMemo = createSelector(
  selectContent,
  selectContentLoad,
  selectContentError,
  (content, load, error) => ({ content, load, error })
)

export const selectListMemo = createSelector(
  selectList,
  selectListLoad,
  selectListError,
  (list, load, error) => {
    const arr = list.map(({ title, id }) => ({ title, id }))
    return { list: arr, load, error }
  }
)
