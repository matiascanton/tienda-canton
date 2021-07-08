import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import ItemList from './ItemList';
import PRODUCTS from '../products';

const ItemListContainer = (props) => {

    const { categoryId } = useParams();
    const [productos, setProductos] = useState(null);

    useEffect(() => {
        getProductAsyncAwait()
    }, [categoryId])

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
            const products = await getProductos();
            if (categoryId) {
                const productFilter = products.filter(element => element.category == categoryId);
                setProductos(productFilter);
            } else {
                setProductos(products);
            }

        } catch (error) {
            console.log(`ERROR`, 'Algo salio mal', error)
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