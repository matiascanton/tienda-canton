import React from 'react';

import Logo from '../assets/images/logostore.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div >
            <footer className="footer mt-auto py-3 bg-dark footer-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Nosotros</h3>
                            <ul>
                                <li><a href="#">Sucursales</a></li>
                                <li><a href="#">Donde Encontrarnos</a></li>
                                <li><a href="#">Quienes Somos</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Ayuda</h3>
                            <ul>
                                <li><a href="#">Pagos</a></li>
                                <li><a href="#">Envios</a></li>
                                <li><a href="#">Cambios</a></li>

                            </ul>
                        </div>
                        <div className="col-md-6 item text">

                            <h3>Nuestra Sucursal</h3>

                            <div className="col">
                                <div className="embed-responsive embed-responsive-4by3">
                                    <iframe className="embed-responsive-item" title="Caseros" src="https://maps.google.com/maps?width=100%25&amp;height=100&amp;hl=es&amp;q=-34.590941,%20-58.570813+(Punto%20Caseros)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" ></iframe>
                                </div>
                            </div>

                        </div>
                        <div className="col item social">
                            <a href="http://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="http://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="http://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </div>
                    <p className="copyright">Shoestore ?? 2021</p>
                    <img src={Logo} style={{ width: 50 }} />
                </div>
            </footer>
        </div>

    );
}

export default Footer;