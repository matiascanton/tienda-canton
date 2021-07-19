import React, { useContext } from 'react';

import { CartContext } from '../context/CartContext';

const Cart = () => {

    const { item } = useContext(CartContext);

    console.log(item.itemId);

    return (
        <CartContext.Consumer>
            {item && <div>
                <h1> Carrito de compras</h1>
                <p> {item.itemId} </p>
            </div>}

        </CartContext.Consumer>
    );
}

export default Cart;
