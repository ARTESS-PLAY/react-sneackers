import React from 'react';

import cl from './CuteButton.module.scss';

function CuteButton({children, link = undefined, arrowDirection = 'none', width = '100%'}) {
    return (
        <>
        {link
        ?   <a href={link} style={{width: width}} className={cl.cute_button + ` ${arrowDirection == 'left' ? cl.left : ''} ${arrowDirection == 'right' ? cl.right : ''}`}>{children}</a>
        :   <button style={{width: width}} className={cl.cute_button + ` ${arrowDirection == 'left' ? cl.left : ''} ${arrowDirection == 'right' ? cl.right : ''}`}>{children}</button>
         }
        </>
        
    );
}

export default CuteButton;