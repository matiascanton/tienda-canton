import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getFirestore } from '../firebase';

import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const { itemId } = useParams();
    const [detailProduct, setDetailProduct] = useState('');
    const [loading, setLoading] = useState(false);


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
            <ItemDetail itemId={itemId} name={detailProduct.name} price={detailProduct.price} description={detailProduct.description} image={detailProduct.img} />
        </>
    );
}

export default ItemDetailContainer;
