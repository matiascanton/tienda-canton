import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [item, setItem] = useState([]);
    const [cartQuant, setCartQuant] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

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
        calculateTotal();
        calculateQuantity();
    }, [item])


    const clearCart = () => setItem([]);

    const calculateTotal = () => {
        let cant = 0;
        item.map(element => {
            cant = cant + (element.quantity * element.price)
        })
        setCartTotal(cant);
    }

    const calculateQuantity = () => {
        let cant = 0;
        item.map(element => {
            cant = cant + element.quantity
        })
        setCartQuant(cant)
    }

    const removeItem = (itemId) => {
        const newArray = item.filter((element) => element.id !== itemId);
        setItem(newArray);
    }

    return (
        <CartContext.Provider value={{ addItem, item, isInCart, cartQuant, removeItem, clearCart, cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}