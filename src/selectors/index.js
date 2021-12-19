import { createSelector } from 'reselect'

const selectList = (state) => state.list

const selectContent = (state) => state.content.content
const selectContentLoad = (state) => state.content.load

// const selectContentLoad = (state) => state.content.loading

export const selectContentMemo = createSelector(
  selectContent,
  selectContentLoad,
  (content, load) => ({ content, load })
)

export const selectListMemo = createSelector(selectList, (list) => {
  console.log('Rerender ...')

  return list
})
