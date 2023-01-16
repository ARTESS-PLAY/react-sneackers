import React, { useContext } from 'react';

import cl from './CuteButton.module.scss';

function CuteButton({children, link = undefined, arrowDirection = 'none', width = '100%', onClick = undefined, animation = false}) {
    return (
        <>
        {link
        ?   <a href={link} style={{width: width}} className={cl.cute_button + ` ${arrowDirection == 'left' ? cl.left : ''} ${arrowDirection == 'right' ? cl.right : ''} ${animation && cl.active}`}>{children}</a>
        :   <button onClick={onClick} style={{width: width}} className={cl.cute_button + ` ${arrowDirection == 'left' ? cl.left : ''} ${arrowDirection == 'right' ? cl.right : ''} ${animation && cl.active}`}>{children}</button>
         }
        </>
        
    );
}

export default CuteButton;