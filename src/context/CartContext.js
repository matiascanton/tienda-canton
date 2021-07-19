import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [item, setItem] = useState({});


    const addItem = (itemId, quantity) => {
        setItem({ itemId, quantity });
    }

    /*const clearCart = () => {

    }

    const removeItem = (itemId) => {

    }*/

    return (
        <CartContext.Provider value={{ addItem, item }}>
            {children}
        </CartContext.Provider>
    )
}