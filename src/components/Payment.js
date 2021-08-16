import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { getFirestore, getFirebase } from '../firebase';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Payment = () => {

    const { item, cartTotal } = useContext(CartContext);
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: '',
        email2: ''
    })
    const [cart, setCart] = useState([])
    const [orderId, setOrderId] = useState('')
    const [mailerror, setMailerror] = useState(false)
    const [loading, setLoading] = useState(false)


    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        //Items del carrito
        setCart(item.map(element => (
            {
                itemId: element.id,
                name: element.name,
                price: element.price,
                quantity: element.quantity
            })))
    }, [])

    const checkout = () => {
        if (userData.email === userData.email2) {
            setMailerror(false)
            setLoading(true)
            //Info del usuario
            const userInfo = {
                name: userData.name,
                phone: userData.phone,
                email: userData.email
            }

            //Datos de la Orden de compra
            const newOrder = {
                buyer: userInfo,
                items: cart,
                total: cartTotal,
                date: new Date().toLocaleString() + ""
            }

            console.log(newOrder.date)

            const db = getFirestore();
            // const firebase = getFirebase();
            db.collection("order").add(newOrder)
                .then(({ id }) => {
                    setOrderId(id)
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });


        } else {
            setMailerror(true)
        }


    }


    return (
        <div className="container-fluid">
            <div className="row justify-content-md-center">
                <div className="col-3">
                    <br />
                    <div className="card">
                        {!orderId ?
                            <div className="card-body p-5">

                                <h5 class="card-title">Formulario de Pago</h5>
                                <form>
                                    <div className="mb-3">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser} /></span>
                                            <input type="text" placeholder="Nombre Completo" className="form-control" onChange={handleInputChange} name="name" />
                                            <div className="form-text"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></span>
                                            <input type="email" placeholder="Direccion de Correo" className="form-control" onChange={handleInputChange} name="email" />
                                            <div className="form-text"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        {mailerror && <div class="alert alert-warning" role="alert">
                                            Las direcciones de correo no coinciden
                                        </div>}
                                        <div class="input-group mb-3">

                                            <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></span>
                                            <input type="email" placeholder="Repetir Direccion de Correo" className="form-control" required onChange={handleInputChange} name="email2" />

                                            <div className="form-text"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faPhone} /></span>
                                            <input type="text" placeholder="Telefono" className="form-control" onChange={handleInputChange} name="phone" />
                                            <div className="form-text"></div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-success" onClick={() => checkout()}>
                                        {loading ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : <span>Pagar</span>}

                                    </button>

                                </form>
                            </div>
                            :

                            <div className="card-body p-5">
                                <h5 class="card-title">Orden de compra</h5>
                                <p class="card-text">Nro: {orderId}</p>
                                <p class="card-text">Total: {cartTotal}</p>
                                <p class="card-text">Comprador: {userData.name}</p>
                                <p class="card-text">Correo: {userData.email}</p>

                                <Link to="/" ><button type="submit" className="btn btn-success"  >Volver a la tienda</button></Link>
                            </div>



                        }
                    </div>
                    <br />

                </div>

            </div>
        </div>
    );
}

export default Payment;