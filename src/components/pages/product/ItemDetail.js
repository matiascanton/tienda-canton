import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';


import ItemCount from './ItemCount';

// Styles
import './detail.css';

const ItemDetail = ({ itemId, name, price, description, image, brand, model }) => {

    const [count, setCount] = useState(0);
    const [imagen, setImagen] = useState([{}]);
    const itemData = {
        id: itemId,
        name: name,
        price: price,
        image: image
    }

    const { addItem } = useContext(CartContext);

    const onAdd = (value) => {
        setCount(value);
    };

    useEffect(() => {
        setImagen(image.map((img) => ({ src: img })))
    }, [])

    return (
        <div className="container">
            <div className="card card-item shadow p-3 mb-5 bg-body rounded">
                <div className="container-fliud">
                    <div className="wrapper row justify-content-center">
                        <div className="preview col-md-6">
                            <Carousel images={imagen}
                                hasMediaButton={false}
                                hasSizeButton={false}
                                hasIndexBoard={false}
                                hasDotButtons={true}
                                hasLeftButton={false}
                                hasRightButton={false}
                                widgetsHasShadow={false}
                                thumbnailWidth='15%'
                            />
                        </div>
                        <div className="details col-md-6">
                            <div className="card-body">
                                <h3 className="product-title"><span class="badge bg-dark">{brand}</span> {name} {model}</h3>

                                <p className="product-description">{description}</p>

                                <h4 className="price">${price}</h4>

                                <div className="action">
                                    <div className="col-md-4 offset-md-5">
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