import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import useAction from '../hooks/useAction'
import Item from './Nav-list-item'
import Loader from './Loader'
import ErrorMessage from './Error-message'
import { selectListMemo } from '../selectors'

function NavList() {
  const { load, list, error } = useSelector(selectListMemo)

  const { fetchArticles } = useAction()

  useEffect(() => {
    fetchArticles()
  }, [])

  if (load) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage text={error} />
  }

  return (
    <div>
      <Toolbar />
      <Divider />
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label='main mailbox folders'>
          <List>
            {list.map(({ title, id }) => {
              return <Item text={title} key={id} id={id} />
            })}
          </List>
        </nav>
      </Box>
    </div>
  )
}

export default React.memo(NavList)
