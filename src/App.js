import React, {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import DefaultPage from './pages/DefaultPage';
import Favorites from './pages/Favorites';
import History from './pages/History';

import Header from './components/Header';
import CartSection from '../src/components/SECTIONS/CartSection';

import AppContext from './context';

import axios from 'axios';

import 'macro-css';

function App() {
  const [cartOpen, setcartOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [items, setitems] = useState([]);
  const [favorities, setfavorities] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [orders, setorders] = useState([]);
  const [orderDone, setorderDone] = useState(false);

    
    useEffect(()=>{
      setisLoading(true);
      async function fetchData(){
        try {
          await axios.get('https://63c035f4e262345656fa64bc.mockapi.io/cart').then(res => setcartItems(res.data));
          await axios.get('https://63c55756f80fabd877e625c5.mockapi.io/favorities').then(res => setfavorities(res.data));
          await axios.get('https://63c55756f80fabd877e625c5.mockapi.io/orders').then(res => setorders(res.data));
          await axios.get('https://63c035f4e262345656fa64bc.mockapi.io/items').then(res => setitems(res.data));
        } catch (error) {
          alert('Не удалось загрузить данные');
          console.log(error)
        }
        setisLoading(false);
      }
      fetchData();
  }, []);

  const onAddToCart = (item) => {
    try {
      const cartEl = cartItems.find(el => Number(el.parentId) === Number(item.id));
      if(cartEl){
        setcartItems(prev => prev.filter(el => Number(item.id) !== Number(el.parentId)))
        axios.delete(`https://63c035f4e262345656fa64bc.mockapi.io/cart/${cartEl.cartId || cartEl.id}`);
        
      }else{
        item.parentId = item.id;
        axios.post('https://63c035f4e262345656fa64bc.mockapi.io/cart', item).then(res => {
          item.cartId = res.data.id;
          return item;
        }).then(item => setcartItems(prev => [...prev, item]));
      }
      if(orderDone){
        setorderDone(false);
      }
    } catch (error) {
      alert(error)
    }
  }
  const onDeleteFromCart = (el) => {  
    try {
      setcartItems(prev => prev.filter(item => Number(item.id) !== Number(el.id)))
      axios.delete(`https://63c035f4e262345656fa64bc.mockapi.io/cart/${el.cartId || el.id}`);
    } catch (error) {
      alert('Не удалось удалить из корзины')
      console.log(error)
    }
  }

  const onAddToFavorities = (item) => {
    try {
      const favEl = favorities.find(el => Number(el.parentId) === Number(item.parentId || item.id));
      if(favEl){
        setfavorities(prev => prev.filter(el => Number(item.parentId || item.id) !== Number(el.parentId)))
        axios.delete(`https://63c55756f80fabd877e625c5.mockapi.io/favorities/${favEl.favId || favEl.id}`);
        
      }else{
        item.parentId = item.id;
        axios.post('https://63c55756f80fabd877e625c5.mockapi.io/favorities/', item).then(res => {
          item.favId = res.data.id;
          return item;
        }).then(item => setfavorities(prev => [...prev, item]));
      }
    } catch (error) {
      alert(error)
    }
  }

  const isItemAdded = (id) =>{
    return cartItems.some(obj => Number(obj.parentId) === Number(id));
  }

  const createOrder = async () =>{
    try {
      for (let index = 0; index < cartItems.length; index++) {
        const el = cartItems[index];
        setorders(prev => [el, ...prev]);
        await axios.delete(`https://63c035f4e262345656fa64bc.mockapi.io/cart/${el.id}`);
        await axios.post('https://63c55756f80fabd877e625c5.mockapi.io/orders', el); 
      }
      setcartItems([]);
      setorderDone(true);
    } catch (error) {
      alert("Не удалось создать заказ");
      console.log(error)
    }
  }

  return (
    <AppContext.Provider value={{items, favorities, cartItems, isLoading, isItemAdded, createOrder, orderDone}}>
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
                                                  />
            }/>
            <Route path='/orders' element={
                                          <History
                                            onAddToCart={onAddToCart}
                                            items={orders}
                                            onAddToFavorities={onAddToFavorities}
                                          />   
            }/>  
            <Route path='*' element={<DefaultPage/>}/>
          </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
