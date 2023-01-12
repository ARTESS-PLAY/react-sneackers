import React from 'react';
import CuteButton from '../UI/CuteButton';

function CartInfos({title, text, imgPath}) {
    return (
        <div className={cl.infos}>
            <img src={imgPath} alt="img" />
            <h3>{title}</h3>
            <p>{text}</p>
            <CuteButton width='80%' arrowDirection='left'>Вернуться назад</CuteButton>
        </div>
    );
}

export default CartInfos;