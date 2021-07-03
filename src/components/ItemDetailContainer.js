
import React, { useState, useEffect } from 'react'

import ItemDetail from './ItemDetail'

const productDetail = {
    name: 'Nike Jordan',
    price: 15000,
    img: 'https://showsport.vteximg.com.br/arquivos/ids/693220-1000-1000/NIK-BQ7197008-20-1-.jpg?v=637200652669270000',
    description: 'Zapatillas nike'
}


const ItemDetailContainer = () => {

    const [detailProduct, setDetailProduct] = useState(null);

    useEffect(() => {
        getDetailsAsyncAwait()
    }, [])

    const getDetails = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => productDetail
                ? resolve(productDetail)
                : reject(new Error('getProducts Error'))
                , 2000)
        })
    }

    const getDetailsAsyncAwait = async () => {
        try {
            const details = await getDetails()
            setDetailProduct(details)
        } catch (error) {
            console.log(`ERROR`, 'Algo malio sal', error)
        }
    }


    return (
        <>
            <ItemDetail name={productDetail.name} price={productDetail.price} description={productDetail.description} image={productDetail.img} />
        </>
    );
}

export default ItemDetailContainer;
