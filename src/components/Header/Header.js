import React from 'react';
import '../../styles/header.css';
import HeaderWhite from './HeaderWhite';
import HeaderMenuOptions from './HeaderMenuOptions';
import HeaderMenu from './HeaderMenu';

const MENU_OPTIONS = [
    'CARTELERA', 
    'INICIAR SESION',
];

function Header() {
    return (
        <div className='header'>
            <HeaderWhite/>
            <div className='maroon-line'/>
            <HeaderMenu>
                <HeaderMenuOptions options={MENU_OPTIONS} />
            </HeaderMenu>
        </div>
    );
}

export default Header;