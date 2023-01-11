import React from 'react';
import BannerSlide from '../../BannerSlide';

import cl from './BannerSection.module.scss';

function BannerSection() {
    return (
        <section className={cl.promo_slider}>
            <div className="promo-slider__content">

             <BannerSlide></BannerSlide>

            </div>
        </section>
    );
}

export default BannerSection;