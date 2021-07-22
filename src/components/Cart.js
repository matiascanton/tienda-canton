import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../context/CartContext';

const Cart = () => {

    const { item, cartQuant, removeItem } = useContext(CartContext);

    return (

        <div>
            <h1> Carrito de compras </h1>
            {cartQuant ? <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Sub-Total</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map(i =>
                        <tr>
                            <td key={i.id}>
                                <img src={i.image} style={{ width: 150 }} />
                                <span>{i.name}</span>
                            </td>
                            <td>{i.quantity}</td>
                            <td>{i.price}</td>
                            <td>{(i.price * i.quantity)}</td>
                            <td><button type="button" className="btn btn-danger" onClick={() => removeItem(i.id)}> Eliminar </button></td>
                        </tr>
                    )}

                </tbody>
            </table>
                : <div>
                    <h1>no hay items</h1>
                    <Link to="/">Volver a la tienda</Link>
                </div>}

        </div>


    );
}

export default Cart;
