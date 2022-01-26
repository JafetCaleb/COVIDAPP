import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { Griditem } from './Griditem';

//import { useState } from 'react/cjs/react.development'

export const Grid = ({ category }) => {

    const { data: images, loading } = useFetch(category);
    //console.log(images);
    return(
        <>
            <h3 className = 'card animate__animated animate__fadeIn'>{ category }</h3>
            { loading && <p className = 'card animate__animated animate__flash'>Loading...</p>}
            <div className='cardGrid'>
                {
                    images.map((img) => (
                        <Griditem
                            key = {img.country} 
                            { ...img }  
                        />
                    ))
                }   
            </div>
        </>
    )
}