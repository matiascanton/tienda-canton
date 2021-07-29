import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { getFirestore, getFirebase } from '../firebase';
import { Link } from 'react-router-dom';

const Payment = () => {

    const { item, cartTotal } = useContext(CartContext);
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const [cart, setCart] = useState([])
    const [orderId, setOrderId] = useState('')

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

        console.log("orden nro", orderId)
    }



    return (
        <div className="container-fluid">
            <div className="row justify-content-md-center">
                <div className="col-3">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre Completo</label>
                            <input type="text" className="form-control" onChange={handleInputChange} name="name" />
                            <div className="form-text"></div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Correo Electronico</label>
                            <input type="email" className="form-control" onChange={handleInputChange} name="email" />
                            <div className="form-text"></div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono</label>
                            <input type="text" className="form-control" onChange={handleInputChange} name="phone" />
                            <div className="form-text"></div>
                        </div>

                        <button type="submit" className="btn btn-success" onClick={() => checkout()}>Pagar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Payment;