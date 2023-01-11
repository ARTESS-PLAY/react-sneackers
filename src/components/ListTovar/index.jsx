import React from 'react';
import CardTovar from '../CardTovar';

import cl from './ListTovar.module.scss';

function ListTovar() {
    return (
        <div className={cl.list_tovars}>
            <CardTovar></CardTovar>
            <CardTovar></CardTovar>
            <CardTovar></CardTovar>
            <CardTovar></CardTovar>
        </div>
    );
}

export default ListTovar;