import React, {useContext, useEffect, useState} from 'react';
import ContentLoader from "react-content-loader"
import cl from './CardTovar.module.scss';
import AppContext from '../../context';


function CardTovar({id, title, price, imgUrl, onAddToCart, onAddToFavorities, favorited = false, isLoading = false}) {  
    const [isFavorited, setisFavorited] = useState(favorited);

    useEffect(()=>{
        setisFavorited(favorited)
    }, [favorited])

    const {isItemAdded} = useContext(AppContext);
    const isAdded = isItemAdded(id);

    const handlePlusClick = () =>{
        onAddToCart();
    }

    const handleFavoriteClick = () =>{
        setisFavorited(prev => !prev)
        onAddToFavorities();
    }

    return (
        <div className={cl.card + ' d-flex flex-column align-center'}>
        {isLoading 
        ?   <ContentLoader 
            speed={2}
            viewBox="0 0 155 195"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
                <rect x="0" y="102" rx="3" ry="3" width="150" height="15" /> 
                <rect x="0" y="122" rx="3" ry="3" width="90" height="15" /> 
                <rect x="0" y="165" rx="10" ry="10" width="80" height="24" /> 
                <rect x="120" y="164" rx="10" ry="10" width="30" height="30" />
            </ContentLoader>
        : 
            <>
                <div className={cl.addToWish}>
                    <img onClick={handleFavoriteClick} src={`/img/icons/add-wish${isFavorited ? '-active' : ''}.svg`} alt="add-wish" />
                </div>
                <img src={imgUrl} alt="tovar" />
                <p>{title}</p>
                <div className='d-flex flex-row justify-between w100p'>
                    <div>
                        <p className={cl.price_text}>Цена:</p>
                        <p className={cl.price}>{price} руб.</p>
                    </div>
                    <img onClick={handlePlusClick} src={`/img/icons/add-to-cart${isAdded ? '-active' : ''}.svg`} alt="add-to-cart" className={cl.addToCart}/>
                </div>
            </>
        }
        </div>

        
    );
}

export default CardTovar;