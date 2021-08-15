import React from 'react';
import Item from './Item';


const ItemList = ({ productos, category }) => {

    return (
        <div className="container product-list">
            {category && <h1> Zapatillas {category} </h1>}
            <div className=" row row-cols-1 row-cols-md-3 g-5 text-start">

                {productos ? productos.map(producto => <Item {...producto} />) : <span>Cargando productos...</span>}

            </div>
        </div>

    );
}

export default ItemList;