import React, {useState, useEffect} from 'react';
import CardTovar from '../CardTovar';

import cl from './ListTovar.module.scss';

function ListTovar() {
const [items, setitems] = useState([]);

useEffect(() => {
    fetch('https://63c035f4e262345656fa64bc.mockapi.io/items').then(res => res.json()).then(res => setitems(res))
}, []);

    return (
        <div className={cl.list_tovars}>
            {
                items.map(el =>{
                    return (<CardTovar
                        title={el.title}
                        price={el.price}
                        imgUrl={el.imgUrl}
                    />)
                })
            }
        </div>
    );
}

export default ListTovar;