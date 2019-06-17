import React from 'react';

function LeftMenu(props) {
    return (
        <div className='left-menu'>
            {props.children}
        </div>
    );
}

export default LeftMenu;