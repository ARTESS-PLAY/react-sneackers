import React from 'react';
import Logo from '../UI/Logo';
import FavoriteUI from '../UI/FavoriteUI';
import ProfileUI from '../UI/ProfileUI';
import CartUI from '../UI/CartUI';

import cl from './Header.module.scss';

function Header({onClickCartClick}) {
    return (
        <div className={cl.header + " d-flex justify-between align-center"}>
            <Logo></Logo>
            <div className={cl.header__UI + " d-flex justify-between align-center"}>
                <CartUI onClickCartClick={onClickCartClick}></CartUI>
                <FavoriteUI></FavoriteUI>
                <ProfileUI></ProfileUI>
            </div>
        </div>
    );
}

export default Header;