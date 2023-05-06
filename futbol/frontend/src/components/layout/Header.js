import React from 'react';
import '../../styles/components/Header.css'
export const Header = (props)  => {
    return (
        <header>
            <div class="holder">
                <img class="rotate" src={"/logo512.png"} width="100" alt="Transportes X"/>
                <h1>Futbol React</h1>
            </div>
        </header>
    );
};

export default Header;