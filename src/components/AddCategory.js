import React from 'react';
import { useState } from 'react/cjs/react.development';
import PropTypes from 'prop-types';

export const AddCategory =({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setinputValue(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if (inputValue.length > 2){
            setCategories(cats => [inputValue, ...cats ]);
            setinputValue('');
        }
        //console.log('longitud= '+ inputValue.length);
        //console.log('texto= '+ inputValue);
        //console.log('Submit hecho!');
        
    }
    return(
        <form onSubmit= {handleSubmit} > 
        
            <input 
                type="text"
                value={ inputValue }
                //onChange={ (e) => console.log(e) }
                onChange = { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}