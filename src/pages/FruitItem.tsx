import React from 'react'
import Header from '../components/Header/Header'
import ManageItem from '../components/ManageItem/ManageItem'
import Footer from '../components/Footer/Footer'
import { HeaderStyle } from '../Styled'

function FruitItem() {
  return (
    <>
      <HeaderStyle>
        <Header />
      </HeaderStyle>
      <ManageItem />
      <Footer />
    </>
  )
}

export default FruitItem