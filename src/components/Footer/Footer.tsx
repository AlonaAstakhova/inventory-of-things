import { FooterStyle, FooterStyledContainer } from './Footer.styled'

function Footer() {

  return (
    <FooterStyle>
      <FooterStyledContainer>
        <strong>&copy; {new Date().getFullYear()} All rights reserved</strong>
      </FooterStyledContainer>
    </FooterStyle>
  )
}

export default Footer