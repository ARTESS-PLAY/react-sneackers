import React from 'react';
import ListTovar from '../../components/ListTovar';

function History({onAddToCart, onAddToFavorities, items}) {

    return (
        <div className="page__section">
            <h2>История заказов</h2>
            <ListTovar
                onAddToCart={onAddToCart}
                items={items}
                onAddToFavorities={onAddToFavorities}
            />
        </div>
    );
}

export default History;