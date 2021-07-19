import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from './ItemDetail';
import PRODUCTS from '../products';

const ItemDetailContainer = () => {

    const { itemId } = useParams();
    const [detailProduct, setDetailProduct] = useState('');

    useEffect(() => {
        getDetailsAsyncAwait();
    }, [])

    const getDetails = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => PRODUCTS
                ? resolve(PRODUCTS)
                : reject(new Error('getDetails Error'))
                , 2000)
        })
    }

    const getDetailsAsyncAwait = async () => {
        try {
            const details = await getDetails();
            const itemDetails = details.find(element => element.id == itemId);
            setDetailProduct(itemDetails);
        } catch (error) {
            console.log(`ERROR`, 'Algo salio mal', error)
        }
    }

    return (
        <>
            <ItemDetail itemId={itemId} name={detailProduct.name} price={detailProduct.price} description={detailProduct.description} image={detailProduct.img} />
        </>
    );
}

export default ItemDetailContainer;
