import React from 'react';
import {Link} from "react-router-dom";
import '../../styles/components/Nav.css'

export const Nav = (props)  => {
    return (
        <nav>
            <div id="opciones">
                <ul id="ul_top_hypers">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/novedades">Novedades</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;