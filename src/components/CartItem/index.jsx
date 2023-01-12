import React from 'react';

import cl from './CartItem.module.scss';

function CartItem({title, price, imgUrl, onDeleteFromCart}) {
    return (
        <div className={cl.cart_item + " d-flex justify-between align-center"}>
            <img src={imgUrl} alt="sneackers" />
            <div className={cl.text + " d-flex flex-column"}>
                <p className={cl.title}>{title}</p>
                <p className={cl.price}>{price}</p>
            </div>
            <img className={cl.close} src="./img/icons/close.svg" alt="delete" onClick={onDeleteFromCart}/>
        </div>
    );
}

export default CartItem;