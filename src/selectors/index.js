import { createSelector } from 'reselect'

const selectList = (state) => state.list.list
const selectListLoad = (state) => state.list.load

const selectContent = (state) => state.content.content
const selectContentLoad = (state) => state.content.load

export const selectContentMemo = createSelector(
  selectContent,
  selectContentLoad,
  (content, load) => ({ content, load })
)

export const selectListMemo = createSelector(
  selectList,
  selectListLoad,
  (list, load) => {
    const arr = list.map(({ title, id }) => ({ title, id }))
    return { list: arr, load }
  }
)
