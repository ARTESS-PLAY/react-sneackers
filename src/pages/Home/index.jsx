import React from 'react';
import BannerSection from '../../components/SECTIONS/BannerSection';
import ShopSection from '../../components/SECTIONS/ShopSection';

function Home({onDeleteFromCart,
    onAddToCart,
    items,
    onAddToFavorities,
    favorities,
    cartItems,
    isLoading
    }) {
    return (
        <div className='main-section'>          
            <BannerSection></BannerSection>
            <ShopSection
            items={items}
            onAddToCart={onAddToCart}
            onAddToFavorities={onAddToFavorities}
            favorities={favorities}
            cartItems={cartItems}
            isLoading={isLoading}
            />
        </div>
    );
}

export default Home;