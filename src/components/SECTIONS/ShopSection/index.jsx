import React from 'react';
import SearchForm from '../../UI/SearchForm';
import ListTovar from '../../ListTovar';
import cl from './ShopSection.module.scss'


function ShopSection({onAddToCart, onDeleteFromCart}) {
    return (
        <section className={cl['shop-section']}>
            <div className="shop_title_and_search d-flex justify-between align-center">
                <h2>Корзина</h2>
                <SearchForm></SearchForm>
            </div>
            <ListTovar 
                onAddToCart={onAddToCart}
                onDeleteFromCart={onDeleteFromCart}
            />
        </section>
    );
}

export default ShopSection;