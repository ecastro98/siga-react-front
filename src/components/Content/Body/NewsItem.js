import React from 'react';

function NewsItem(props) {
    return (
        <div className='center-news-item'>
            <img alt='news-button' src='http://siga.frba.utn.edu.ar/imag/news/boton3.png' />
            <div>{props.label}</div>
        </div>
    );
}

export default NewsItem;