import React, {useState, useEffect}  from 'react';
import SearchForm from '../../UI/SearchForm';
import ListTovar from '../../ListTovar';

import axios from 'axios';

import cl from './ShopSection.module.scss'


function ShopSection({onAddToCart, items, onAddToFavorities, ...props}) {
    const [search, setsearch] = useState('');

    return (
        <section className={cl['shop-section']}>
            <div className="shop_title_and_search d-flex justify-between align-center">
                <h2>{search ? `Поиск по результату "${search}"` : "Корзина"}</h2>
                <SearchForm
                    search={search}
                    onChange={setsearch}
                />
            </div>
            <ListTovar 
                onAddToCart={onAddToCart}
                items={items}
                search={search}
                onAddToFavorities={onAddToFavorities}
                {...props}
            />
        </section>
    );
}

export default ShopSection; 