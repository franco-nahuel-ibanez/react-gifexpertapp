import React, { Fragment, useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One Punch']);

    //TAREA RESUELTA
    // const handleAdd = () =>{
    //     setCategories( [...categories, 'Slam Duck'] )  de esta manera podemos modificar el array
    // }

    return(
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))                     
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp;