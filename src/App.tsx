import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import FruitItem from './pages/FruitItem';
import FruitDetails from './pages/FruitDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/item' element={<FruitItem/>} />
        <Route path='/details' element={<FruitDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;