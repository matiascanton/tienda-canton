import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

import ItemCount from './ItemCount';


const ItemDetail = ({ itemId, name, price, description, image }) => {

    const [count, setCount] = useState(0);
    const itemData = {
        id: itemId,
        name: name,
        price: price,
        image: image
    }

    const { addItem, isInCart } = useContext(CartContext);

    const onAdd = (value) => {
        setCount(value);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 align-self-center">
                    <div className="card mb-3" style={{ maxWidth: 1000 }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={image} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text"><small className="text-muted">{price}</small></p>
                                    <div className="col-md-3 align-self-center">
                                        {count > 0 ? <Link to="/cart" style={{ textDecoration: 'none' }}><button onClick={() => addItem(itemData, count)} className="btn btn-success" type="button">Finalizar Compra</button> </Link> : <ItemCount initial={1} initialStock={5} onAdd={onAdd} />}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ItemDetail;