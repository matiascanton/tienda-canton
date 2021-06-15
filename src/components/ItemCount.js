import React, { useState } from 'react';

const ItemCount = ({ initialStock, initial, onAdd }) => {


    const [count, setCount] = useState(initial);

    const [stock, setStock] = useState(initialStock)

    const addCount = () => {
        if (stock > 1 && count < stock) {
            setCount(count + 1);
        }
    }




    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 offset-md-5">
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" onClick={() => { count > 1 && setCount(count - 1) }}>-</button>
                        <input className="form-control form-control-sm" aria-label="Example text with two button addons" value={count} />
                        <button className="btn btn-outline-secondary" type="button" onClick={addCount}>+</button>
                    </div>


                    {(stock < 1) && <span> No stock </span>}
                    <button type="button" className="btn btn-success" onClick={() => { count <= stock && onAdd() }}> Agregar al Carrito</button>
                </div>
            </div>

        </div>
    );
}

export default ItemCount;

