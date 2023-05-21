import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ManageItemStyle } from './ManageItem.styled'
import { CardMedia, Paper, Box, Grid, Button, TextField, Stack, OutlinedInput, InputAdornment, MenuItem, Divider, Typography, Rating, FormControl, InputLabel, Select } from '@mui/material'
import { ItemProps } from './ManageItem.types'
import { Link } from 'react-router-dom'

function ManageItem() {
  const [fruits, setFruits] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [description, setDescription] = useState('')
  const [country, setCountry] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const [taste, setTaste] = useState('')
  const [size, setSize] = useState('')
  const {id} = useParams()

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value)
  }

  const handleCountryChange = (event: any) => {
    setCountry(event.target.value)
  }

  const handleQuantityChange = (event: any) => {
    setQuantity(event.target.value)
  }

  const handlePriceChange = (event: any) => {
    setPrice(event.target.value)
  }

  const handleTasteChange = (event: any) => {
    setTaste(event.target.value)
  }

  const handleSizeChange = (event: any) => {
    setSize(event.target.value)
  }

  const fetchFruits = async() => {
    
    try {
      setIsLoading(true)
      const result = await axios.get('http://localhost:5000/fruits')
      console.log(result)
      setFruits(await result.data)
      setIsLoading(false)
    } catch (error) {
        console.log(error)
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
            <Grid container spacing={{ xs: 1, md: 2 }}>          
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
                    <Rating name="read-only" value={fruit.rating} readOnly />  
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
                    id="outlined-multiline-flexible"
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
                    id="outlined-multiline-flexible"
                    label="Country"
                    value={fruit.country}
                    onChange={handleCountryChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Size</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"        
                      label="Size"
                      value={fruit.size}
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
                    <InputLabel id="demo-simple-select-label">Taste</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Taste"
                      value={fruit.taste}
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
                    <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      label="Price"
                      value={fruit.price}
                      onChange={handlePriceChange}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="dense">
                    <TextField
                      id="outlined-number"
                      label="Quantity"
                      type="number"
                      value={fruit.quantity}
                      onChange={handleQuantityChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Box minHeight={50}>
                    <Stack spacing={3} direction="row" justifyContent="flex-end">
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