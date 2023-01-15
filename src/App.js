import React, {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import DefaultPage from './pages/DefaultPage';
import Favorites from './pages/Favorites';

import Header from './components/Header';
import CartSection from '../src/components/SECTIONS/CartSection';


import axios from 'axios';

import 'macro-css';

function App() {
  const [cartOpen, setcartOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [items, setitems] = useState([]);
  const [favorities, setfavorities] = useState([]);

    
    useEffect(()=>{
    axios.get('https://63c035f4e262345656fa64bc.mockapi.io/items').then(res => setitems(res.data));
    axios.get('https://63c035f4e262345656fa64bc.mockapi.io/cart').then(res => setcartItems(res.data));
  }, [])

  const onAddToCart = (item) => {
    setcartItems(prev => [...prev, item]);
    axios.post('https://63c035f4e262345656fa64bc.mockapi.io/cart', item);
  }
  const onDeleteFromCart = (el) => {
    setcartItems(prev => prev.filter(item => item.id !== el.id))
    axios.delete(`https://63c035f4e262345656fa64bc.mockapi.io/cart/${el.id}`);
  }

  const onAddToFavorities = (item) => {
    setfavorities(prev => [...prev, item]);
    // axios.post('https://63c035f4e262345656fa64bc.mockapi.io/favorities', item);
  }
  const onDeleteFromFavorities = (el) => {
    setfavorities(prev => prev.filter(item => item.id !== el.id))
    // axios.delete(`https://63c035f4e262345656fa64bc.mockapi.io/favorities/${el.id}`);
  }

  return (
    <div className='main-section'>
          {cartOpen && <CartSection
            onClickClose={() => setcartOpen(false)}
            onDeleteFromCart={onDeleteFromCart}
            cartItems = {cartItems}
          />}
        <Header onClickCartClick={() => setcartOpen(true)} ></Header>
        <Routes>
          <Route index element={<Home
                                        onDeleteFromCart={onDeleteFromCart}
                                        onAddToCart={onAddToCart}
                                        items={items}
                                        onAddToFavorities={onAddToFavorities}
                                        onDeleteFromFavorities={onDeleteFromFavorities}
                                        />
          }/>
          <Route path='/favorities' element={<Favorites
                                                onDeleteFromCart={onDeleteFromCart}
                                                onAddToCart={onAddToCart}
                                                items={favorities}
                                                onAddToFavorities={onAddToFavorities}
                                                onDeleteFromFavorities={onDeleteFromFavorities}
                                              />
          }/>
          <Route path='*' element={<DefaultPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
