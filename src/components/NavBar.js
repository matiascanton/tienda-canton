import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles.css';
import CartWidget from './CartWidget';
import Logo from '../assets/images/logostore.png'

function NavBar() {

    const categories = [
        {
            id: 1,
            name: 'Nike',
        },
        {
            id: 2,
            name: 'Adidas'
        },
        {
            id: 3,
            name: 'Puma'
        }
    ]

    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/"><img style={{ width: 50 }} src={Logo}></img></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        {/*<li class="nav-item">
                            <Link class="nav-link" to="/item-list-container">Tienda</Link>
                        </li>*/}
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                {categories.map(category => <li><Link className="dropdown-item" to={`/category/${category.name}`}>{category.name}</Link></li>)}
                            </ul>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <Link className="nav-link" aria-current="page" to="/cart"><CartWidget /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
