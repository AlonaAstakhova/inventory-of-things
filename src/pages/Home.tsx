import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import FruitsList from '../components/FruitsList/FruitsList';
import { FooterStyle, FrueitsListStyle, HeaderStyle } from '../Styled';


function Home() {
  return (
        <>
          <HeaderStyle>
            <Header />
          </HeaderStyle>
          <FrueitsListStyle>
            <FruitsList />
          </FrueitsListStyle>
          <FooterStyle>
            <Footer />
          </FooterStyle>
        </>
  )
}

export default Home