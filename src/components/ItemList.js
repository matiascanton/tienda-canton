import React from 'react';
import Item from './Item';


const ItemList = ({ productos }) => {

    return (
        <div className="container">
            <div className="row">

                {productos ? productos.map(producto => <Item {...producto} />) : <span>Cargando productos...</span>}

            </div>
        </div>

    );
}

export default ItemList;