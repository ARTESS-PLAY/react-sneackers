import React from 'react';

function CartUI() {
    return (
        <div className="header__UI__cart d-flex justify-between align-center">
            <img src="/img/icons/cart.svg" alt="cart" className='mr-10' />
            <p className="price">100p</p>
        </div>
    );
}

export default CartUI;