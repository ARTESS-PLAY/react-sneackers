import React from 'react';
import ListTovar from '../../components/ListTovar';

function Favorites({onAddToCart, onDeleteFromCart, onAddToFavorities, onDeleteFromFavorities, items, ...props}) {

    return (
        <div className="page__section">
            <h2>Закладки</h2>
            <ListTovar
                onAddToCart={onAddToCart}
                onDeleteFromCart={onDeleteFromCart}
                items={items}
                onAddToFavorities={onAddToFavorities}
                onDeleteFromFavorities={onDeleteFromFavorities}
                {...props}
            />
        </div>
    );
}

export default Favorites;