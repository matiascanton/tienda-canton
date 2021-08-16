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

                            <h3>Shoestore</h3>

                            <p>Somos una importadora de Zapatillas bla bla bla bla asdasda bla bla blasdasd asd as bla bla blasd asd asd as d.</p>

                        </div>
                        <div className="col item social">
                            <a href="http://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="http://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="http://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </div>
                    <p className="copyright">Shoestore © 2021</p>
                    <img src={Logo} style={{ width: 50 }} />
                </div>
            </footer>
        </div>

    );
}

export default Footer;