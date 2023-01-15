import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Logo.module.scss'

function Logo() {
    return (
        <Link to='/'>
            <div className={cl.header__logo + " d-flex flex-row align-center"}>
                <img src='/img/icons/logo.png' alt="logo" />
                <div className={cl.header__logo__text}>
                    <p className={cl.fw_bold}>REACT SNEAKERS</p>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
        </Link>
    );
}

export default Logo;