import React from 'react';
import cl from './Logo.module.scss'

function Logo() {
    return (
        <div className={cl.header__logo + " d-flex flex-row align-center"}>
            <img src='/img/icons/logo.png' alt="logo" />
            <div className="header__logo__text ml-15">
                <p className='fw-bold text-uppercase'>REACT SNEAKERS</p>
                <p>Магазин лучших кроссовок</p>
            </div>
        </div>
    );
}

export default Logo;