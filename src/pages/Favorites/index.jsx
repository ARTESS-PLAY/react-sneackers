import React from 'react';
import ListTovar from '../../components/ListTovar';

function Favorites({onAddToCart, onAddToFavorities, items}) {
    return (
        <div className="page__section">
            <h2>Закладки</h2>
            <ListTovar
                onAddToCart={onAddToCart}
                items={items}
                onAddToFavorities={onAddToFavorities}
            />
        </div>
    );
}

export default Favorites;