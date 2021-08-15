import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';
import firebase from 'firebase';

import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const { itemId } = useParams();
    const [detailProduct, setDetailProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imagen, setImagen] = useState([]);

    useEffect(() => {
        setImagen(detailProduct.images);
    }, [detailProduct])

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("product").doc(itemId);
        itemCollection.get().then((doc) => {
            if (doc.exists) {
                setDetailProduct(doc.data());
            } else {
                console.log('error')
            }
        }).catch(error => {
            console.log('error', error);
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    return (
        <>
            {loading ?
                <div className="text-center" style={{ padding: 50 }}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
                :
                <ItemDetail itemId={itemId} name={detailProduct.name} brand={detailProduct.brand} model={detailProduct.model} price={detailProduct.price} description={detailProduct.description} image={imagen} />
            }
        </>
    );
}

export default ItemDetailContainer;
