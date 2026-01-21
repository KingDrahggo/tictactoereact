import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="title">
                <span className="tic">TIC</span>
                <span className="tac">TAC</span>
                <span className="toe">TOE</span>
            </h1>
            <div className="subtitle">NEON ARCADE EDITION</div>
        </div>
    );
};

export default Header;
