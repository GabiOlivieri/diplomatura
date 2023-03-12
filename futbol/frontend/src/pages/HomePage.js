import React from 'react';
import {Link} from "react-router-dom";

const HomePage = (props) => {
    return (
        <>
            <h1>Bienvenido!</h1>

            <div>
                <span> Autor</span>
                <span> Gabriel Olivieri</span>
                <p> para mas información: <Link to="/contacto"> pulse aqui</Link></p>
            </div>
        </>
    );
}

export default HomePage;