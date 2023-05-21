import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import FruitItem from './pages/FruitItem';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/item/:id' element={<FruitItem/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;