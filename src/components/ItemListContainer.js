import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getFirestore } from '../firebase';

import ItemList from './ItemList';


const ItemListContainer = (props) => {

    const { categoryId } = useParams();
    console.log(categoryId);

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();

        if (categoryId) {
            const itemCollection = db.collection("product").where("brand" == categoryId);
            itemCollection.get().then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('no result')
                } else {
                    setProductos(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                }
            }).catch(error => {
                console.log('error', error);
            }).finally(() => {
                setLoading(false);
            })
        } else {
            const itemCollection = db.collection("product");
            itemCollection.get().then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('no result')
                } else {
                    setProductos(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                }
            }).catch(error => {
                console.log('error', error);
            }).finally(() => {
                setLoading(false);
            })

        }


    }, []);


    console.log(productos);

    return (
        <>
            <h1 style={{ marginTop: 30 }}> {props.greetings} </h1>
            <hr />
            <ItemList productos={productos} />
        </>
    );
}

export default ItemListContainer;