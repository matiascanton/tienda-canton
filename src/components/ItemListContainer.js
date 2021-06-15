import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {

    const addCart = () => {
        alert('El producto se agrego al carrito exitosamente');
    }


    return (
        <>
            <h1 style={{ marginTop: 30 }}> {props.greetings} </h1>

            <ItemCount initial={1} initialStock={5} onAdd={addCart} />
        </>
    );
}

export default ItemListContainer;