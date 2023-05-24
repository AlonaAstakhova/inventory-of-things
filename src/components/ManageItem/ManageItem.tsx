import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { CardMedia, Paper, Box, Grid, Button, TextField, Stack, OutlinedInput, InputAdornment, MenuItem, Divider, Typography, Rating, FormControl, InputLabel, Select } from '@mui/material'
import { ManageItemStyle } from './ManageItem.styled'
import { ManageItemProps } from './ManageItem.types'
import Mailer from '../Mailer/Mailer'


function ManageItem() {

  const {id} = useParams()
  const [fruits, setFruits] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [description, setDescription] = useState('')
  const [country, setCountry] = useState('')
  const [price, setPrice] = useState(0)
  const [taste, setTaste] = useState('')
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState(0)

  const handleQuantityChange = (e: any) => {
    setQuantity(e.target.value)
    if (quantity == 1) {
      setShow(true)
    }
  }

  const handlePriceChange = (e: any) => {
    setPrice(e.target.value)
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

  const handleSubmit = (fruitId: any) => {
  
      const updateFruit = fruits?.map((fruit: ManageItemProps) => {
       if (fruit.id == fruitId) {
        return {...fruit, quantity: quantity}
       } else {
        return fruit
       }
      })
      console.log(updateFruit)
  }

  return (
    <ManageItemStyle>
      {isLoading ? 'Loading...' : 
      <Box position='sticky' sx={{ flexGrow: 1, alignItems:'center', marginTop:'100px', maxWidth: 900, minWidth: 200}}>
        <Paper elevation={6} >
          {fruits?.map((fruit: ManageItemProps, key: number) => 
            fruit.id == id && 
            <Grid container spacing={{ xs: 1, md: 2 }} key={key}>          
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
                      <Rating name="read-only" value={fruit.rating} readOnly/>  
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
                      defaultValue={fruit.description}
                      onChange={(e) => setDescription(e.target.value)}
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
                      onChange={(e) => setCountry(e.target.value)}
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
                        onChange={(e) => setSize(e.target.value)}
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
                        onChange={(e) => setTaste(e.target.value)}
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
                        type="number"
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
                        <Link to='/'>
                          <Button variant="outlined">Cancel</Button>
                        </Link>
                        <Link to='/'>
                          <Button variant="contained" onClick={() => handleSubmit(fruit.id)}>Update</Button>
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