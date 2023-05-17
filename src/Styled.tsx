import styled, {css, createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}`
const baseShadow = css`
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);`

const HeaderStyle = styled.header`
    ${baseShadow};`

const FrueitsListStyle = styled.div`
    min-height: 100vh;
    padding: 2rem;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    background: #f6f8fa;`

const FooterStyle = styled.footer`
    ${baseShadow};
    text-align: center;
    aligh-items: center;
    justify-content: center;
    color: white;`

export { Global, HeaderStyle, FrueitsListStyle, FooterStyle }