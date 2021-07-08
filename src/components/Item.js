import React from 'react';
import ItemCount from './ItemCount';

import { Link } from 'react-router-dom';

const Item = ({ id, name, img, description, price }) => {


    const addCart = () => {
        alert('El producto se agrego al carrito exitosamente');
    }


    return (

        <div className="col-4">
            <Link to={`/item/${id}`}>
                <h1> {name} </h1></Link>
            <img className="img-fluid " src={img} alt={name} />
            <h3>${price}</h3>
            <ItemCount initial={1} initialStock={5} onAdd={addCart} />
        </div>

    );
}

export default Item;