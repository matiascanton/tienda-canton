import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [item, setItem] = useState([]);
    const [cartQuant, setCartQuant] = useState(0);

    const addItem = (itemData, quantity) => {
        if (isInCart(itemData.id)) {
            let element = item.find(instance => instance.id === itemData.id)
            element.quantity = element.quantity + quantity;
            setCartQuant(cartQuant + quantity);
        } else {
            itemData.quantity = quantity;
            setItem([...item, itemData]);
        }
    }

    const isInCart = (id) => {
        return item.find((element) => element.id == id)
    };

    useEffect(() => {
        let cant = 0;
        item.map(element => {
            cant = cant + element.quantity
        })
        setCartQuant(cant)
    }, [item])


    const clearCart = () => setItem([]);

    const removeItem = (itemId) => {
        const newArray = item.filter((element) => element.id !== itemId);
        setItem(newArray);
    }

    return (
        <CartContext.Provider value={{ addItem, item, isInCart, cartQuant, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}