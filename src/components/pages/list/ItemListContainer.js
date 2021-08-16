import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../../firebase';
import Banner from '../../Banner';

import ItemList from './ItemList';


const ItemListContainer = (props) => {

    const { categoryId } = useParams();

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setLoading(true);

        let db = getFirestore();
        let itemCollection

        if (categoryId) {
            itemCollection = db.collection("product").where("brand", "==", categoryId);
        } else {
            itemCollection = db.collection("product");
        }

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

    }, [categoryId]);

    return (
        <div className="container-fluid">
            {loading ?
                <div className="text-center" style={{ padding: 50 }}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
                :
                <div className="listProducts">
                    <Banner />
                    <ItemList productos={productos} category={categoryId} />
                </div>
            }
        </div>
    );
}

export default ItemListContainer;