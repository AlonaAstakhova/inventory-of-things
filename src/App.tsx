import { BrowserRouter} from 'react-router-dom'
import { AppWrapper, Title } from './Styled'

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Title>Inventory of things</Title>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
