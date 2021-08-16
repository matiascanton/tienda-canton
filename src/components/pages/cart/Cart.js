import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../../context/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {

    const { item, cartQuant, cartTotal, removeItem, clearCart } = useContext(CartContext);

    return (

        <div>
            <h1 className="cart-title"> Mi Carrito </h1>

            {cartQuant ?
                <div className="container-fluid cart-container">
                    <h6 class="card-subtitle mb-2 text-muted"><Link to="/"> Seguir comprando</Link></h6>
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="table-responsive">
                                <table className="table table-borderless ">
                                    <thead>
                                        <tr>
                                            <th scope="col">Imagen</th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Sub-Total</th>
                                            <th scope="col">Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.map(i =>
                                            <tr className="cart-tr">
                                                <td key={i.id}>
                                                    <img src={i.image} style={{ width: 150 }} alt={i.name} />

                                                </td>
                                                <td> <span>{i.name}</span> </td>
                                                <td>{i.quantity}</td>
                                                <td>{i.price}</td>
                                                <td>{(i.price * i.quantity)}</td>
                                                <td><button type="button" className="btn btn-danger" onClick={() => removeItem(i.id)}> <FontAwesomeIcon icon={faTrashAlt} /> </button></td>
                                            </tr>
                                        )}

                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-accion">
                                <button type="button" className="btn btn-outline-danger" onClick={() => clearCart()}>Vaciar Carrito</button>

                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="bg-pay p-3"> <span className="font-weight-bold">Orden Detallada</span>
                                <div className="d-flex justify-content-between mt-2"> <span className="fw-500">Productos</span> <span>${cartTotal}</span> </div>
                                <div className="d-flex justify-content-between mt-2"> <span className="fw-500">Envio</span> <span>$0.0</span> </div>
                                <div className="d-flex justify-content-between mt-2"> <span className="fw-500">Descuentos</span> <span>- $0.0</span> </div>

                                <hr />
                                <div className="d-flex justify-content-between mt-2"> <span className="lh-16 fw-500">Total antes de impuestos </span> <span>${cartTotal}</span> </div>
                                <div className="d-flex justify-content-between mt-2"> <span className="lh-16 fw-500">Impuestos (IVA - 21%) </span> <span>+ ${(cartTotal * 0.21)} </span> </div>
                                <hr />
                                <div className="d-flex justify-content-between mt-2"> <span className="fw-500">Total </span> <span className="text-success">${cartTotal + (cartTotal * 0.21)}</span> </div>
                            </div>
                            <hr />
                            <Link to="/payment" >
                                <div className="d-grid gap-2">
                                    <button type="button" className="btn btn-success" >Finalizar Compra</button>

                                </div>
                            </Link>
                        </div>



                    </div>
                </div>
                : <div className="container-fluid">
                    <h4> No hay productos en el Carrito</h4>
                    <Link to="/">Volver a la tienda</Link>
                </div>}

        </div>


    );
}

export default Cart;
