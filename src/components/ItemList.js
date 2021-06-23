import React, { useEffect, useState } from 'react';
import Item from './Item';


const ItemList = ({ productos }) => {

    return (
        <div class="container">
            <div class="row">
                {productos ? productos.map(producto => <Item {...producto} />) : <span>Cargando productos...</span>}
            </div>
        </div>

    );
}

export default ItemList;