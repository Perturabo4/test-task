import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import useAction from '../hooks/useAction'
import Item from './News-list-item'
import Loader from './Loader'

export default function NewsList() {
  const { load, list } = useSelector((state) => state.list)

  console.log(list)

  const { fetchArticles } = useAction()

  useEffect(() => {
    fetchArticles()
  }, [])

  if (load) {
    return <Loader />
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {list.map(({ title, id }) => {
            return <Item text={title} key={id} />
          })}
        </List>
      </nav>
    </Box>
  )
}
