import React from 'react';
import ListTovar from '../../components/ListTovar';

function Favorites({onAddToCart, onDeleteFromCart, onAddToFavorities, onDeleteFromFavorities, items}) {

    return (
        <div className="page__section">
            <h2>Закладки</h2>
            <ListTovar
                onAddToCart={onAddToCart}
                onDeleteFromCart={onDeleteFromCart}
                items={items}
                onAddToFavorities={onAddToFavorities}
                onDeleteFromFavorities={onDeleteFromFavorities}
            />
        </div>
    );
}

export default Favorites;