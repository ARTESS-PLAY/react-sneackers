import React, {useState} from 'react';

import Header from './components/Header';
import BannerSection from './components/SECTIONS/BannerSection';
import ShopSection from './components/SECTIONS/ShopSection';
import CartSection from './components/SECTIONS/CartSection';

import 'macro-css';

function App() {
  const [cartOpen, setcartOpen] = useState(false);
  return (
    <div className='main-section'>
      {cartOpen && <CartSection onClickClose={() => setcartOpen(false)}></CartSection>}
      <Header onClickCartClick={() => setcartOpen(true)}></Header>
      <BannerSection></BannerSection>
      <ShopSection></ShopSection>
    </div>
  );
}

export default App;
