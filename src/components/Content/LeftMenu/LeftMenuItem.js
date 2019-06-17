import React from 'react';

function LeftMenuItem(props) {
    return (
        <div className='left-menu-item'>
            {props.label}
        </div>
    );
}

export default LeftMenuItem;