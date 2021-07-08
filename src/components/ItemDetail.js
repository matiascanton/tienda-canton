import React from 'react'



const ItemDetail = ({ name, price, description, image }) => {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 align-self-center">
                    <div className="card mb-3" style={{ maxWidth: 1000 }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={image} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text"><small className="text-muted">{price}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ItemDetail;