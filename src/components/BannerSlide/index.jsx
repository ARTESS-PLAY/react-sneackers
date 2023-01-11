import React from 'react';
import cl from './BannerSlide.module.scss'

function BannerSlide() {
    return (
        <div className={cl.promo_slider__content__slide +  " d-flex flex-row"}>
            <div className={cl.promo_slider__content__slide__text + " d-flex flex-column justify-center"}>
                <p><span>Stan Smith,</span> Forever!</p>
                <a href="#" className='d-flex justify-center align-center'>Купить</a>
            </div>
            <img src="/img/banner.png" alt="promo" />
        </div>
    );
}

export default BannerSlide; 