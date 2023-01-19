import React from 'react';
import AppContext from '../../../context';
import { useCart } from '../../../hooks/useCart';

function CartUI({onClickCartClick}) {
    const [,,totalPrice] = useCart();
    return (
        <div className="header__UI__cart d-flex justify-between align-center" onClick={() => onClickCartClick()} style={{cursor: 'pointer'}}>
            <img src="/img/icons/cart.svg" alt="cart" className='mr-10' />
            <p className="price">{totalPrice} pуб.</p>
        </div>
    );
}

export default CartUI;