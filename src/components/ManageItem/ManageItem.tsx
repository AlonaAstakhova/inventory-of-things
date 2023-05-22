import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { CardMedia, Paper, Box, Grid, Button, TextField, Stack, OutlinedInput, InputAdornment, MenuItem, Divider, Typography, Rating, FormControl, InputLabel, Select } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { ManageItemStyle } from './ManageItem.styled'
import { ItemProps } from './ManageItem.types'
import Mailer from '../Mailer/Mailer'


function ManageItem() {

  const [fruits, setFruits] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [description, setDescription] = useState('')
  const [country, setCountry] = useState('')
  const [price, setPrice] = useState(0)
  const [taste, setTaste] = useState('')
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState(0)
  const {id} = useParams()

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value)
  }

  const handleCountryChange = (e: any) => {
    setCountry(e.target.value)
  }

  const handleQuantityChange = (e: any) => {
    setQuantity(e.target.value)
    if (quantity == 1) {
      setShow(true)
    }
  }

  const handlePriceChange = (e: any) => {
    setPrice(e.target.value)
  }

  const handleTasteChange = (e: any) => {
    setTaste(e.target.value)
  }

  const handleSizeChange = (e: any) => {
    setSize(e.target.value)
  }

  const fetchFruits = async() => {
    
    try {
      setIsLoading(true)
      const result = await axios.get('http://localhost:5000/fruits')
      setFruits(await result.data)
      setIsLoading(false)
    } catch (error) {
        console.error(error)
    }
  }

  useEffect(() => {
    fetchFruits()
  },[])

  return (
    <ManageItemStyle>
      {isLoading ? 'Loading...' : 
      <Box position='sticky' sx={{ flexGrow: 1, alignItems:'center', marginTop:'100px', maxWidth: 900, minWidth: 200}}>
        <Paper elevation={6} >
          {fruits?.map((fruit: ItemProps, key: number) => 
            fruit.id == id && 
            <Grid container spacing={{ xs: 1, md: 2 }} key={fruit.id}>          
              <Grid item xs={12}>
                <Typography variant='h4' textAlign='center'>
                  Manage
                </Typography>
                <Divider />
              </Grid>
              <Grid container xs={12} md={4} lg={6} marginTop={2}>
                <Grid item xs={12} spacing={3}>
                  <Typography variant='h5' textAlign='center'>
                    {fruit.name}  
                    <Rating name="read-only" value={fruit.rating} />  
                  </Typography>                
                </Grid>
                <Grid item xs={12} margin={0}>
                  <CardMedia component="img"
                    sx={{ width: '80%', marginLeft: '15%' }}
                    image={fruit.photoUrl}
                    alt={fruit.name}
                  />
                </Grid>
              </Grid>
              <Grid container xs={12} md={8} lg={6} spacing={2} paddingLeft={3}>
                <Grid item xs={12} marginTop={2}>
                  <TextField
                    id="descriptionInp"
                    label="Description"
                    value={fruit.description}
                    onChange={handleDescriptionChange}
                    multiline
                    maxRows={4}
                    margin="normal" 
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <TextField
                    id="countryInp"
                    label="Country"
                    defaultValue={fruit.country}
                    onChange={handleCountryChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel>Size</InputLabel>
                    <Select
                      id="sizeInp"        
                      label="Size"
                      defaultValue={fruit.size}
                      onChange={handleSizeChange}
                    >
                      <MenuItem value={'small'}>Small</MenuItem>
                      <MenuItem value={'medium'}>Medium</MenuItem>
                      <MenuItem value={'large'}>Large</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel>Taste</InputLabel>
                    <Select
                      id="tasteInp"
                      label="Taste"
                      defaultValue={fruit.taste}
                      onChange={handleTasteChange}
                    >
                      <MenuItem value={'sweet'}>Sweet</MenuItem>
                      <MenuItem value={'sweet-sour'}>Sweet-sour</MenuItem>
                      <MenuItem value={'sour'}>Sour</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="dense" >
                    <InputLabel htmlFor="priceInp">Price</InputLabel>
                    <OutlinedInput
                      id="priceInp"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      label="Price"
                      defaultValue={fruit.price}
                      onChange={handlePriceChange}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="dense">
                    <TextField
                      id="quantityInp"
                      label="Quantity"
                      type="number"
                      fullWidth
                      defaultValue={fruit.quantity}
                      onChange={handleQuantityChange} 
                    />
                    {quantity == 0 && <Mailer show={show} setShow={setShow} fruitName={fruit.name}/>}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Box minHeight={50}>
                    <Stack spacing={3} direction="row" justifyContent="flex-end">
                      {quantity == 1 && <Button variant="contained" endIcon={<SendIcon />} onClick={()=>setShow(true)}> Send email</Button>}
                      <Link to='/'>
                        <Button variant="outlined">Cancel</Button>
                      </Link>
                      <Link to='/'>
                        <Button variant="contained">Update</Button>
                      </Link>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
             )} 
         </Paper>
      </Box>
       } 
    </ManageItemStyle>
  )
}

export default ManageItem