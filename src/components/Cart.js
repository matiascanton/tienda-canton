import React, { useContext } from 'react';

import { CartContext } from '../context/CartContext';

const Cart = () => {

    const { item } = useContext(CartContext);

    return (

        <div>
            <h1> Carrito de compras </h1>
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Sub-Total</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map(i =>
                        <tr>
                            <td>
                                <img src={i.image} style={{ width: 150 }} />
                                <span>{i.name}</span>
                            </td>
                            <td>{i.quantity}</td>
                            <td>{i.price}</td>

                            <td>{(i.price * i.quantity)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>


    );
}

export default Cart;
