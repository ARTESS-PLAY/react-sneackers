import React from 'react';
import cl from './SearchForm.module.scss';

function SearchForm({search, onChange}) {
    return (
        <div className={cl.cute_search}>
            <input type="text" placeholder='Поиск...' value={search} onChange={e => onChange(e.target.value)}/>
            {search && <img src="/img/icons/close.svg" alt="clear" onClick={() => onChange('')}/>}
        </div>
    );
}

export default SearchForm;