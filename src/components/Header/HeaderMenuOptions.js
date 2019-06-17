import React from 'react';
import HeaderMenuOption from './HeaderMenuOption';

function HeaderMenuOptions(props) {
    const { options } = props;
    const optionItems = options.map((option, index) => <HeaderMenuOption label={option} key={index}/>);

    return (
        <div className='header-menu-options'>
            {optionItems}
        </div>
    );
}

export default HeaderMenuOptions;