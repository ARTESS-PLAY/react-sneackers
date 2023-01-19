import React from 'react';
import AppContext from "../context"

export const useCart = () =>{
    const {cartItems, setcartItems} = React.useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => sum += obj.price, 0);

    return [cartItems, setcartItems, totalPrice];
}