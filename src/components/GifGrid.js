import React, { Fragment } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';


const GifGrid = ({ category }) =>{

    const { data: images, loading } = useFetchGifs( category ); //se lo enviamos a useFetchGifs

    return(
        <Fragment>
            <h3 className="card animate__animated animate__fadeInDown">
                { category }
            </h3>
            
            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className='card-grid'>

                {/* recorremos el state images con un map y retornamos el valor para mostrarlo  */}
                
                {
                    images.map( img => //destructuramos el retorno del map para usar solo las propiedades necesarias
                        <GifGridItem 
                            key={ img.id }
                            { ...img } //de esta manera enviamos cada una de las propiedades que contenia img 
                        />
                    )
                }   
            </div> 
           
        </Fragment>
    )
    
}

export default GifGrid;