import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {

    const { orderId } = useParams();
    console.log("asd", orderId)
    return (
        <h1> tu orden es {orderId} </h1>
    );
}

export default Checkout;