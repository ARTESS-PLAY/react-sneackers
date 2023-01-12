import React from 'react';
import cl from './CartSection.module.scss';
import CuteButton from '../../UI/CuteButton';


function CartSection({child}) {
    return (
        <div className={cl.bg}>
            <section className={cl.cart}>
                <h2>Корзина</h2>
                <div className={cl.cart__content + ' d-flex flex-column align-center justify-center'}>
                    {child}
                </div>
            </section>
        </div> 
    );
}

export default CartSection;