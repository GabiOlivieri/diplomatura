import React from 'react';

export const Header = (props)  => {
    return (
        <header>
            <div className="holder">
                <img src={"/logo512.png"} width="100" alt="Transportes X"/>
                <h1>Futbol React</h1>
            </div>
        </header>
    );
};

export default Header;