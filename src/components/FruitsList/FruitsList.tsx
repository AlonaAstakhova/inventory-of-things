import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import axios from 'axios'
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

export default function FruitsList() {

  const [fruits, setFruits] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchFruits = async() => {
    setIsLoading(true)
    const result = await axios.get('fruits')
    setFruits(await result.data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchFruits()
  },[])

  return (
    <>
      
      {isLoading ? 'Loading': <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {fruits.map((fruit, key) => 
      <Grid item xs={2} sm={4} md={4} key={key}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component='img' image={fruit.photoUrl} alt={fruit.name} height="300" />
          <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {fruit.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Quantity: {fruit.quantity}
          </Typography>
        </CardContent>
        <CardActions>
         <Button size='small'>Details</Button>
        </CardActions>
        </Card>
        </Grid>
      )}
        </Grid>}
      
    </>
  );
}