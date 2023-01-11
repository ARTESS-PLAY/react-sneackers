import React from 'react';
import cl from './SearchForm.module.scss';

function SearchForm() {
    return (
        <div className={cl.cute_search}>
            <input type="text" placeholder='Поиск...'/>
        </div>
    );
}

export default SearchForm;