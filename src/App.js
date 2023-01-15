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
  const [isLoading, setisLoading] = useState(true);

    
    useEffect(()=>{
      setisLoading(true);
      async function fetchData(){
        await axios.get('https://63c035f4e262345656fa64bc.mockapi.io/cart').then(res => setcartItems(res.data));
        await axios.get('https://63c035f4e262345656fa64bc.mockapi.io/items').then(res => setitems(res.data));
        setisLoading(false);
      }
      fetchData();
  }, []);

  const onAddToCart = (item) => {
    try {
      console.log(item);
      if(cartItems.find(el => Number(el.id) === Number(item.id))){
        onDeleteFromCart(item);
      }else{
        setcartItems(prev => [...prev, item]);
        axios.post('https://63c035f4e262345656fa64bc.mockapi.io/cart', item);
      }
    } catch (error) {
      alert(error)
    }
  }
  const onDeleteFromCart = (el) => {  
    setcartItems(prev => prev.filter(item => Number(item.id) !== Number(el.id)))
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
                                        favorities={favorities}
                                        cartItems={cartItems}
                                        isLoading={isLoading}
                                        />
          }/>
          <Route path='/favorities' element={<Favorites
                                                onDeleteFromCart={onDeleteFromCart}
                                                onAddToCart={onAddToCart}
                                                items={favorities}
                                                onAddToFavorities={onAddToFavorities}
                                                onDeleteFromFavorities={onDeleteFromFavorities}
                                                favorities={favorities}
                                                cartItems={cartItems}
                                              />
          }/>
          <Route path='*' element={<DefaultPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
