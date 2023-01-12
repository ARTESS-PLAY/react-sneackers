import React from 'react';
import cl from './CardTovar.module.scss';


function CardTovar() {
    return (
        <div className={cl.card + ' d-flex flex-column align-center'}>
            <div className={cl.addToWish}>
                <img src="/img/icons/add-wish.svg" alt="add-wish" />
            </div>
            <img src="/img/image 5.jpg" alt="tovar" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className='d-flex flex-row justify-between w100p'>
                <div>
                    <p className={cl.price_text}>Цена:</p>
                    <p className={cl.price}>12 999 руб.</p>
                </div>
                <img src="/img/icons/add-to-cart.svg" alt="add-to-cart" className={cl.addToCart}/>
            </div>
        </div>
    );
}

export default CardTovar;