import styled from 'styled-components'
import { grey } from '@mui/material/colors'

const fontSizeBase = 16;
const rem = (sizeInPx: number): string =>
  `${sizeInPx / fontSizeBase}rem`

export const FooterStyle = styled.footer`
    background-color: ${grey[600]};
    padding: 1rem ${rem(24)};
    text-align: center;
    color: white;`
    
export const FooterStyledContainer = styled.div`
    max-width: ${rem(940)};
    margin: 0 auto;`