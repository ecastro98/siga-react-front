import React from 'react';

function News(props) {
    return (
        <div className='center-news'>
            {props.children}
        </div>
    );
}

export default News;