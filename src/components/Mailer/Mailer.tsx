import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import { Modal, Typography, Box, Divider, IconButton, Stack, TextField, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

function Mailer (props:any) {

const {show, setShow, fruitName} = props

const sendEmail = (e: any) => { 
  e.preventDefault()
  emailjs.sendForm('service_rpal3n6', 'template_elu5moz', e.target, process.env.REACT_APP_API_KEY)
         .then(result => {
            console.log(result)
         }).catch(error => console.log(error))
}

  return (
      <Modal sx={{display:'flex', bgcolor:'#e6e6e6', alignItems:'center', justifyContent:'center'}}
          open={show}
          onClose={()=>setShow(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >   
        <Box sx={{ width: '100%', maxWidth: 600, height: '60%', maxHeight: 372}} bgcolor='white' p={3} borderRadius={2}> 
        <Grid container >
          <Grid item xs={11}>
            <Typography variant='h5' textAlign='center'>
              Contact form
            </Typography>
          </Grid>
          <Grid item xs={1} alignContent='end'>
            <IconButton aria-label="delete" size="small" onClick={(e)=>setShow(false)}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
          <Divider />
          <form onSubmit={sendEmail}>
            <TextField 
              name='name'
              label="From Name" 
              variant="outlined" 
              size='small' 
              margin='normal' 
              fullWidth/>
            <TextField 
              name='email'
              label="To Email" 
              type='email' 
              variant="outlined" 
              size='small' 
              margin='dense' 
              fullWidth/>
            <TextField
              name="message"
              label="Message"
              multiline
              margin='normal'
              fullWidth
              rows={4}
              defaultValue= {`The quantity of "${fruitName}" has reached 0! It is necessary to place an order for the delivery of goods!`}
            />
            <Stack direction='row'>
              <input type="submit" value="Send" className='form-control btn btn-primary' />
            </Stack>
          </form>
        </Box>
      </Modal>
  )
}

export default Mailer