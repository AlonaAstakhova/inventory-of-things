import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Box, CardActionArea, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { FruitProps } from './FruitsList.types'
import { FruitsListStyle } from './FruitsList.styled'
import Details from '../Details/Details'


export default function FruitsList() {

  const [fruits, setFruits] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [fruitDetails, setFruitDetails] = useState<any>([])

  const fetchFruits = async() => {
    setIsLoading(true)
    const result = await axios.get('fruits')
    setFruits(await result.data)
    setIsLoading(false)
  }

  const detailsFruit = async(fruit: FruitProps) =>{
    let addFruit = {
      ...fruit
    }
    setFruitDetails([fruitDetails, addFruit])
  }
  
  useEffect(() => {
    fetchFruits()
  },[])

  return (
    <FruitsListStyle>
      {isLoading ? 'Loading...': <Box flex={4} sx={{ marginTop:'70px'}}>
      <Grid container spacing={{ xs: 1, lg: 3 }}>
      {fruits.map((fruit: FruitProps, key:number) => 
      <Grid item lg={3} sm={6} xs={12}  key={fruit.id}>
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia component='img' image={fruit.photoUrl} alt={fruit?.name} height="190" />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {fruit.name}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  Quantity: {fruit.quantity}
                </Typography>
              </CardContent>
            </CardActionArea>
          <CardActions>
            <Stack direction='row' spacing={3}>
              <Link to={`/item/${fruit.id}`}>
                <Button variant='contained' size='small'>Manage</Button> 
              </Link>
                <Button variant='contained' size='small' onClick={() => {setOpen(true); detailsFruit(fruit)}} >Details</Button>
                <Details open={open} setOpen={setOpen} fruitDetails={fruitDetails}/>
            </Stack> 
          </CardActions>
        </Card>
      </Grid>
      )}
        </Grid>
        </Box>}
      </FruitsListStyle>        
  );
}