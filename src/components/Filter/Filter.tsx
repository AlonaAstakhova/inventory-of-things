import React from 'react'
import { Box, ListItemIcon, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'

function Filter() {

  return (
    <Box p={2} sx={{ width: '30%', marginTop:'70px', display: { xs: 'none', sm: 'block'}}}> 
    <Box position='fixed'>  
    <List>
    <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
    </List>
    </Box>  
    </Box>
  )
}

export default Filter