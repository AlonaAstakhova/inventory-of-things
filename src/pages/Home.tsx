import React from 'react'
import { Box, Stack } from '@mui/material'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Filter from '../components/Filter/Filter'
import FruitsList from '../components/FruitsList/FruitsList'
import API from '../components/API/API'

function Home() {
  return (
    <Box>
      <Header />
      <Stack direction='row' spacing={2}>
        <Filter />
        <FruitsList/>
        <API />
      </Stack> 
      <Footer />
    </Box>
  )
}

export default Home