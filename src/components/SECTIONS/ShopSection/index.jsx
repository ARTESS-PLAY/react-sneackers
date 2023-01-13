import React, {useState, useEffect}  from 'react';
import SearchForm from '../../UI/SearchForm';
import ListTovar from '../../ListTovar';

import axios from 'axios';

import cl from './ShopSection.module.scss'


function ShopSection({onAddToCart, onDeleteFromCart}) {

    const [items, setitems] = useState([]);
    const [search, setsearch] = useState('');

    useEffect(() => {
        axios.get('https://63c035f4e262345656fa64bc.mockapi.io/items').then(res => setitems(res.data));
    }, []);

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
                onDeleteFromCart={onDeleteFromCart}
                items={items}
                search={search}
            />
        </section>
    );
}

export default ShopSection; 