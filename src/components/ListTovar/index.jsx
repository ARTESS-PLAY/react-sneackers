import React from 'react';
import CardTovar from '../CardTovar';

import AppContext from '../../context';

import cl from './ListTovar.module.scss';

function ListTovar({onAddToCart, onDeleteFromCart, items, onAddToFavorities, onDeleteFromFavorities, search = ''}) {

    const {isLoading, favorities, cartItems} = React.useContext(AppContext);

    let searchItems = items.filter(el => el.title.toLowerCase().includes(search.toLowerCase()));
    if(items.length == 0){
        searchItems = Array(8).fill(1,0,8);
        if(!isLoading){
            searchItems = [];
        }
    }
    return (
        <> 
        {searchItems.length > 0
            ?  <div className={cl.list_tovars}>
                    {searchItems.map((el, index) =>{
                        return (<CardTovar
                            onAddToCart={() => onAddToCart(el)}
                            onDeleteFromCart={() => onDeleteFromCart(el)}
                            onAddToFavorities={() => onAddToFavorities(el)}
                            onDeleteFromFavorities={() => onDeleteFromFavorities(el)}
                            key={el.id ? el.id : index}
                            {...el}
                            isLoading={isLoading}
                            favorited={favorities.some(obj => Number(obj.id) === Number(el.id))}
                            />)
                        })}
                </div>
            : <h2>Ничего не найдено :(</h2>
        }
        </>
    );
}

export default ListTovar;