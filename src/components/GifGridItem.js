import React from 'react';

const GifGridItem = ({ title, url }) =>{ //recibimos las propiedades enviadas desde el componente GifGrid

    
    return(
        <div className="card animate__animated animate__fadeInDown">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}


export default GifGridItem;