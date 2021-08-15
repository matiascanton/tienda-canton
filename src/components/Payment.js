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
        email: ''
    })
    const [cart, setCart] = useState([])
    const [orderId, setOrderId] = useState('')
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
            total: cartTotal
            //date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        const db = getFirestore();
        // const firebase = getFirebase();
        db.collection("order").add(newOrder)
            .then(({ id }) => {
                setOrderId(id)
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        setLoading(false)
    }


    return (
        <div className="container-fluid">
            <div className="row justify-content-md-center">
                <div className="col-3">
                    <br />
                    <div className="card">
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
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faPhone} /></span>
                                        <input type="text" placeholder="Telefono" className="form-control" onChange={handleInputChange} name="phone" />
                                        <div className="form-text"></div>
                                    </div>
                                </div>
                                {loading && <h1>esper un momento porfavor</h1>}
                                <Link to={`/checkout/${orderId}`}> <button type="button" className="btn btn-success" onClick={() => checkout()}>Pagar</button></Link>
                            </form>
                        </div>
                    </div>
                    <br />

                </div>

            </div>
        </div>
    );
}

export default Payment;