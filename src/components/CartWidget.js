import React, { useContext } from 'react';

import IconCart from '../assets/images/cart2.svg'
import { CartContext } from '../context/CartContext';

export default function CartWidget() {

    const { cartQuant } = useContext(CartContext);

    return (
        <>
            <button type="button" class="btn btn-light position-relative">
                <img src={IconCart} alt="Carrito" />
                {cartQuant > 0 && <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {cartQuant}</span>}
            </button>
        </>
    );
}
