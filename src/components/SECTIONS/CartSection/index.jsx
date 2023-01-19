import React, { useContext } from 'react';
import cl from './CartSection.module.scss';
import CartListTovar from '../../CartListTovar';
import CartInfos from '../../CartInfos';
import AppContext from '../../../context';


function CartSection({onClickClose, onDeleteFromCart, cartItems, cartOpen}) {
    const {orderDone} = useContext(AppContext);
    return (
        <div className={cl.bg + ` ${cartOpen ? cl.overlay_active : ''}`} onClick={onClickClose}>
            <section className={cl.cart} onClick={(e) => e.stopPropagation()}>
                <div className="d-flex flex-row justify-between aling-center pb-30">
                    <h2>Корзина</h2>
                    <img src="./img/icons/close.svg" onClick={onClickClose} alt="close" style={{cursor: 'pointer'}}/>
                </div>
                <div className={cl.cart__content + ' d-flex flex-column align-center justify-center'}>
                    {cartItems.length > 0
                    ?   <CartListTovar
                            onDeleteFromCart={onDeleteFromCart}
                            cartItems={cartItems}
                        />
                    :   <CartInfos
                            title={orderDone ? 'Заказ оформлен!' : "Корзина пустая"}
                            text={orderDone ? 'Ваш заказ #18 скоро будет передан курьерской доставке': "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                            imgUrl={orderDone ? '/img/doneOrder.jpg' : "/img/emptyCart.jpg"}
                            onClickClose={onClickClose}
                        />
                    }
                    
                </div>
            </section>
        </div> 
    );
}

export default CartSection;

