import React from 'react';
import ItemCount from './ItemCount';

const Item = ({ name, stock, img, description, price }) => {


    const addCart = () => {
        alert('El producto se agrego al carrito exitosamente');
    }


    return (

        <div class="col">
            <h1> {name} </h1>
            <img className="img-fluid " src={img} alt={name} />
            <p> {description} </p>
            <h3>${price}</h3>
            <ItemCount initial={1} initialStock={5} onAdd={addCart} />
        </div>

    );
}

export default Item;