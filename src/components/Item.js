import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useState } from 'react/cjs/react.development';

const Item = ({ id, name, images, price, brand, model }) => {

    const [imagen, setImagen] = useState(null);

    var storage = firebase.storage();
    var gsReference = storage.refFromURL(images[0])

    gsReference.getDownloadURL().then(function (url) {
        setImagen(url);
    }).catch(function (error) {
        // Handle any errors
    });

    return (
        <div className="col-3">
            <Link to={`/item/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                <img className="img-fluid" id="myimg" src={imagen} alt={name} />
                <h5>{brand} {name} {model}</h5>
                <h3>${price}</h3>
            </Link>
        </div>
    );
}

export default Item;