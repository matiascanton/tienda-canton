import React, { useEffect, useState } from 'react';

import ItemList from './ItemList';
import PRODUCTS from '../products';

const ItemListContainer = (props) => {


    const [productos, setProductos] = useState(null);

    useEffect(() => {
        getProductAsyncAwait()
    }, [])

    const getProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => PRODUCTS
                ? resolve(PRODUCTS)
                : reject(new Error('getProducts Error'))
                , 2000)
        })
    }

    const getProductAsyncAwait = async () => {
        try {
            const products = await getProductos()
            setProductos(products)
        } catch (error) {
            console.log(`ERROR`, 'Algo malio sal', error)
        }
    }




    return (
        <>
            <h1 style={{ marginTop: 30 }}> {props.greetings} </h1>
            <hr />
            <ItemList productos={productos} />
        </>
    );
}

export default ItemListContainer;