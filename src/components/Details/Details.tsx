import { Modal, Typography, Box, Button, List, ListItem, ListItemText, Divider, Stack } from '@mui/material'
import { DetailsProps } from './Detaits.types'

function Details(props:any) {

  const {open, setOpen, fruitDetails} = props

  return (
     fruitDetails?.map((fruitDt: DetailsProps, key: number) => 
    <Box p={2} sx={{ marginTop:'70px'}}>
      <Modal sx={{display:'flex', bgcolor:'#e6e6e6', alignItems:'center', justifyContent:'center'}}
        open={open}
        onClose={(e)=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >   
        <Box sx={{ width: '100%', maxWidth: 600, height: '60%', maxHeight: 350}} bgcolor='white' p={3} borderRadius={2}> 
          <Typography variant='h5' textAlign='center'>
          {fruitDt.name}
          </Typography>
          <Divider />
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem alignItems='flex-start'> 
                  <ListItemText primary='Description:' secondary={
                  <Typography sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.secondary"
                  > {fruitDt.description}</Typography>}/>   
                  </ListItem>
                  <ListItem alignItems='flex-start'> 
                  <ListItemText primary='Country:' secondary={
                  <Typography sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.secondary"
                  > {fruitDt.country}</Typography>}/>   
                  <ListItemText primary='Size:' secondary={
                  <Typography sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.secondary"
                  > {fruitDt.size}</Typography>}/>   
                  <ListItemText primary='Taste:' secondary={
                  <Typography sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.secondary"
                  > {fruitDt.taste}</Typography>}/>   
                   <ListItemText primary='Quantity:' secondary={
                  <Typography sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.secondary"
                  > {fruitDt.quantity}</Typography>}/>   
                </ListItem>  
                <Stack direction='row' justifyContent="flex-end">
              <Button variant="contained" onClick={(e)=>setOpen(false)}> OK </Button>
               </Stack>              
              </List>         
            </nav>

        </Box>
      </Modal>
    </Box>
  )
  )
}

export default Details