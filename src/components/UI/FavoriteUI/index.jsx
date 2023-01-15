import React from 'react';
import { Link } from 'react-router-dom';

function FavoriteUI() {
    return (
        <Link to='/favorities'>
            <div className="header__UI__favorite" style={{cursor: 'pointer'}}>
                <img src="/img/icons/favorite.svg" alt="favorite" />
            </div>
        </Link>
        
    );
}

export default FavoriteUI;