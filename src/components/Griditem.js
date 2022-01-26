import React from 'react'

export const Griditem = ( {country,cases, deaths, tests,day} ) => {
    //console.log(id, title, url);
    return (
        <div className = 'card animate__animated animate__bounce'>
             
            <p>Casos Totales:{ cases }</p> 
            <p>Muertes Totales:{ deaths }</p>   
            <p>Tests Totales:{ tests }</p>   
            <p>Fecha:{ day }</p>      
        </div>
    )
}