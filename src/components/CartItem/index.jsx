import React from 'react';

import cl from './CartItem.module.scss';

function CartItem() {
    return (
        <div className={cl.cart_item + " d-flex justify-between align-center"}>
            <img src="./img/image 5.jpg" alt="sneackers" />
            <div className={cl.text + " d-flex flex-column"}>
                <p className={cl.title}>Мужские Кроссовки Nike Air Max 270</p>
                <p className={cl.price}>12 999 руб.</p>
            </div>
            <img className={cl.close} src="./img/icons/close.svg" alt="delete" />
        </div>
    );
}

export default CartItem;