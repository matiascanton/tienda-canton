import React from 'react';
import { Link } from 'react-router-dom';
//import firebase from 'firebase';
//import { useState, useEffect } from 'react/cjs/react.development';

import './item.css';

const Item = ({ id, name, images, price, brand, model }) => {

    /*const [imagen, setImagen] = useState(null);

    var storage = firebase.storage();
    var gsReference = storage.refFromURL(images[0])

    gsReference.getDownloadURL().then(function (url) {
        setImagen(url);
    }).catch(function (error) {
        // Handle any errors
    });*/

    return (

        <Link to={`/item/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            <div className="card itemCard">

                <div className="card-body">
                    <img className="img-fluid" src={images[0]} alt={name} />
                    <h5><span class="badge bg-dark">{brand}</span></h5>
                    <h5 className="card-title"> {name} {model}</h5>
                    <h3 className="fw-bold">${price}</h3>
                </div>

            </div>
        </Link>

    );
}

export default Item;