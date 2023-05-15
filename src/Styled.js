import styled, {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}
`
const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background: #88bdbc;
    display: flex;
    aligh-items: center;
    justify-content: center`

const Title = styled.h1`
    color: white;
    font-size: 50px;`

export { Global, AppWrapper, Title }
