import React from 'react';
import BannerSection from '../../components/SECTIONS/BannerSection';
import ShopSection from '../../components/SECTIONS/ShopSection';

function Home({onDeleteFromCart,
    onAddToCart,
    items,
    onAddToFavorities,
    favorities,
    onDeleteFromFavorities
    }) {
    return (
        <div className='main-section'>          
            <BannerSection></BannerSection>
            <ShopSection
            items={items}
            onAddToCart={onAddToCart}
            onDeleteFromCart={onDeleteFromCart}
            onAddToFavorities={onAddToFavorities}
            favorities={favorities}
            onDeleteFromFavorities={onDeleteFromFavorities}
            />
        </div>
    );
}

export default Home;