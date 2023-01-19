import React, { useContext, useState } from 'react';
import CuteButton from '../UI/CuteButton';
import CartItem from '../CartItem';

import cl from './CartListTovar.module.scss';
import AppContext from '../../context';
import { useCart } from '../../hooks/useCart';

function CartListTovar({cartItems, onDeleteFromCart}) {
    const [isOrderLoading, setisOrderLoading] = useState();
    const {createOrder} = useContext(AppContext);
    const [,,totalPrice] = useCart();
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
                    <p className={cl.price}>{totalPrice} руб.</p>
                </div>
                <div className={cl.tax_sum}>
                    <p>Налог</p>
                    <div className={cl.dashed}></div>
                    <p className={cl.price}>{totalPrice * 0.05} руб.</p>
                </div>
                <CuteButton arrowDirection='right' onClick={async ()=>{
                    setisOrderLoading(true)
                    await createOrder();
                    setisOrderLoading(false)
                }} animation={isOrderLoading}>Оформить заказ</CuteButton>
            </div>
        </div>
    );
}

export default CartListTovar;