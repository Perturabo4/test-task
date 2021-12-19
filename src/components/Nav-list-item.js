import React from 'react'

import { ListItem, ListItemText, ListItemIcon } from '@mui/material'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import { Link } from 'react-router-dom'

const Item = ({ text, id }) => {
  return (
    <Link to={`api/${id}`} style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <ArticleOutlinedIcon />
        </ListItemIcon>
        <ListItemText secondary={text} />
      </ListItem>
    </Link>
  )
}

export default React.memo(Item)
