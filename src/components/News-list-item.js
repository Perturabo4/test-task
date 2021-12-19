import { ListItem, ListItemText, ListItemIcon } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Item = ({ text }) => {
  console.log(text)
  return (
    <ListItem button>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

export default Item
