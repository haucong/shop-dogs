import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DogPage from './component/Dogs/DogPage';
import Home from './component/Home/Home';
import Cart from './component/Cart/Cart';
import Navbar from './component/Navbar/Navbar';
import axios from 'axios'
import { CartContext } from './contexts/CartContext';
import { useEffect, useState } from 'react';
function App() {

  const [allDogs, setAllDogs] = useState([]);
  const [myCart, AddToCart] = useState([{}])
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function getData(){
     const res = await axios.get('/v1/dogs')
          return res
    }
    getData().then((res) => setAllDogs(res.data));
    getData().catch((error) => console.log(error)) 
  },[])

  return (
    <CartContext.Provider value={{ myCart, AddToCart, setTotal, total }}>
      <BrowserRouter>
        <Navbar />
        <div className='page-container'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/dogs' element={<DogPage allDogs={allDogs} />} />
            <Route path='/checkout' element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App;
