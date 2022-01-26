import React, { useState } from 'react';
//import { AddCategory } from './components/AddCategory';
import { AddCategory } from './components/AddCategory';
import { Grid } from './components/Grid';

export const CovidPaisSearchApp = () => {

    //const categories = ['One Piece','Naruto','Dragon Ball'];
    
    const [categories, setCategories]=
                useState(['Peru']);
    
    //const handleAdd = () =>{
        //setCategories(['Attack on Titan',...categories ]);
    //    setCategories( cats => ['Attack on Titan',...categories]);
    //}
    return (
        <div>
            <h2>Covid 19 por pais</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map( (category) =>(
                        <Grid
                            key = { category }
                            category = { category }
                        
                        />
                    ))
                }
            </ol>
        </div>
    )
}

