import React from 'react';
import cl from './CartSection.module.scss';
import CartListTovar from '../../CartListTovar';


function CartSection({child, onClickClose}) {
    return (
        <div className={cl.bg} onClick={onClickClose}>
            <section className={cl.cart} onClick={(e) => e.stopPropagation()}>
                <div className="d-flex flex-row justify-between aling-center pb-30">
                    <h2>Корзина</h2>
                    <img src="./img/icons/close.svg" onClick={onClickClose} alt="close" style={{cursor: 'pointer'}}/>
                </div>
                <div className={cl.cart__content + ' d-flex flex-column align-center justify-center'}>
                    {child}
                    <CartListTovar></CartListTovar>
                </div>
            </section>
        </div> 
    );
}

export default CartSection;