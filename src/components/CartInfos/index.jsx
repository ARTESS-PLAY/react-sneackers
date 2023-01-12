import React from 'react';
import CuteButton from '../UI/CuteButton';

import cl from './CartInfos.module.scss';

function CartInfos({title, text, imgUrl, onClickClose}) {
    return (
        <div className={cl.infos}>
            <img src={imgUrl} alt="img" />
            <h3>{title}</h3>
            <p>{text}</p>
            <CuteButton onClick={onClickClose} arrowDirection='left'>Вернуться назад</CuteButton>
        </div>
    );
}

export default CartInfos;