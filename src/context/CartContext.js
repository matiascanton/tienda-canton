import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [item, setItem] = useState([{

    }]);


    const addItem = (itemData, quantity) => {
        setItem(item => ([
            ...item,

            {
                id: itemData.id,
                name: itemData.name,
                price: itemData.price,
                image: itemData.image,
                quantity: quantity
            }]))

    }

    const isInCart = (itemId) => {
        const exist = item.map(i => {
            if (itemId == i.id) {
                return true;
            } else {
                return false;
            }
        })
    }

    /*const clearCart = () => {

    }

    const removeItem = (itemId) => {

    }*/

    return (
        <CartContext.Provider value={{ addItem, item, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}