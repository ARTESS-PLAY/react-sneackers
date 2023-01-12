import React from 'react';
import CuteButton from '../UI/CuteButton';
import CartItem from '../CartItem';

import cl from './CartListTovar.module.scss';

function CartListTovar({cartItems, onDeleteFromCart}) {
    return (
        <div className={cl.tovars}>
            <div className={cl.list_tovars}>
                {cartItems.map(el =>{
                    return(
                        <CartItem
                            title={el.title}
                            price={el.price}
                            imgUrl={el.imgUrl}
                            onDeleteFromCart={() => onDeleteFromCart(el)}
                            key={el.id}
                        />
                    )
                })}
            </div>
            <div className={cl.tovars_sum}>
                <div className={cl.end_sum}>
                    <p>Итого</p>
                    <div className={cl.dashed}></div>
                    <p className={cl.price}>21 498 руб.</p>
                </div>
                <div className={cl.tax_sum}>
                    <p>Налог</p>
                    <div className={cl.dashed}></div>
                    <p className={cl.price}>1 498 руб.</p>
                </div>
                <CuteButton arrowDirection='right'>Оформить заказ</CuteButton>
            </div>
        </div>
    );
}

export default CartListTovar;