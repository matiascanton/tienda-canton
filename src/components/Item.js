import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

const Item = ({ id, name, images, price, brand, model }) => {

    /*var storage = firebase.storage();
    var gsReference = storage.refFromURL(`'${images[0]}'`)

    gsReference.then(function (url) {
        var img = document.getElementById('myimg');
        img.src = url;
    }).catch(function (error) {
        // Handle any errors
    });*/



    /*var storage = firebase.storage();
    var storageRef = storage.ref();
    var imagesRef = storageRef.child('shoes');
    imagesRef.getDownloadURL().then(function (url) {
        /*var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function (event) {
            var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();*/

    // Or inserted into an <img> element:
    /*var img = document.getElementById('myimg');
    img.src = url;
}).catch(function (error) {
    // Handle any errors
});*/





    return (
        <div className="col-3">
            <Link to={`/item/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                <img className="img-fluid" id="myimg" alt={name} />
                <h5>{brand} {name} {model}</h5>
                <h3>${price}</h3>
            </Link>
        </div>
    );
}

export default Item;