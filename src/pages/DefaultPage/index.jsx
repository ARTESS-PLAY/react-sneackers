import React from 'react';
import { Link } from 'react-router-dom';

function DefaultPage() {
    return (
        <div className='page__section'>
            <h2>По этому адресу ничего не найдено :(</h2>
            <Link to='/'>На главную</Link>
        </div>
    );
}

export default DefaultPage;