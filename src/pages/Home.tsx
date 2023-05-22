import React from 'react'
import { Box, Stack } from '@mui/material'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import FruitsList from '../components/FruitsList/FruitsList'
import Recipe from '../components/API/Recipe'

function Home() {
  return (
    <Box>
      <Header />
      <Stack direction='row' spacing={{ xs: 'none', lg: 2 }}>
        <FruitsList />
        <Recipe />
      </Stack> 
      <Footer />
    </Box>
  )
}

export default Home