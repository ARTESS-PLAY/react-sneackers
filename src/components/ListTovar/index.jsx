import React from 'react';
import CardTovar from '../CardTovar';

import cl from './ListTovar.module.scss';

function ListTovar({onAddToCart, onDeleteFromCart, items, onAddToFavorities, onDeleteFromFavorities, search = ''}) {

    const searchItems = items.filter(el => el.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <> 
        {searchItems.length > 0
            ?  <div className={cl.list_tovars}>
                    {searchItems.map(el =>{
                        return (<CardTovar
                            title={el.title}
                            price={el.price}
                            imgUrl={el.imgUrl}
                            onAddToCart={() => onAddToCart(el)}
                            onDeleteFromCart={() => onDeleteFromCart(el)}
                            onAddToFavorities={() => onAddToFavorities(el)}
                            onDeleteFromFavorities={() => onDeleteFromFavorities(el)}
                            key={el.id}
                            />)
                        })}
                </div>
            : <h2>Ничего не найдено :(</h2>
        }
        </>
    );
}

export default ListTovar;