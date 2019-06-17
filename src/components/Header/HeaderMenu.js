import React from 'react';

function HeaderMenu(props) {
    return (
        <div className='header-menu'>
            {props.children}
        </div>
    ); 
}

export default HeaderMenu;