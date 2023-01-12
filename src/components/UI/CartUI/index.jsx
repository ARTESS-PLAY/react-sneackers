import React from 'react';

function CartUI({onClickCartClick}) {
    return (
        <div className="header__UI__cart d-flex justify-between align-center" onClick={() => onClickCartClick()} style={{cursor: 'pointer'}}>
            <img src="/img/icons/cart.svg" alt="cart" className='mr-10' />
            <p className="price">100p</p>
        </div>
    );
}

export default CartUI;