import React, {useState} from 'react';

import Header from './components/Header';
import BannerSection from './components/SECTIONS/BannerSection';
import ShopSection from './components/SECTIONS/ShopSection';
import CartSection from './components/SECTIONS/CartSection';

import 'macro-css';

function App() {
  const [cartOpen, setcartOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);

  const onAddToCart = (item) => setcartItems([...cartItems, item])
  const onDeleteFromCart = (el) => setcartItems(cartItems.filter(item => item.id !== el.id))

  return (
    <div className='main-section'>
      {cartOpen && <CartSection
        onClickClose={() => setcartOpen(false)}
        onDeleteFromCart={onDeleteFromCart}
        cartItems = {cartItems}
      />}
      <Header onClickCartClick={() => setcartOpen(true)} ></Header>
      <BannerSection></BannerSection>
      <ShopSection
        onAddToCart={onAddToCart}
        onDeleteFromCart={onDeleteFromCart}
       />
    </div>
  );
}

export default App;
