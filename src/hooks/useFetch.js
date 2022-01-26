import { useEffect, useState } from "react";
import { getPais } from "../helpers/getPais";

export const useFetch = (category) =>{

    const [state, setState] = useState({
        data: [],
        loading: true 
    });

    useEffect(() => {
        getPais(category)
            .then( pais => {
                setTimeout(() => {
                    //console.log(img);
                    setState({
                        data: pais,
                        loading: false
                    },)
                }, 3000);              
            });
    }, [category]);

    /*setTimeout (() => {
        setState({
            data: [1,2,3,4,5,6],
            loading: false
        });
    },3000);*/

    return state;
}