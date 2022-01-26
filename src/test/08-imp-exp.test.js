import { getHeroeById, getHeroesByOwner } from "../base/08-imp-exp";
import heroes from "../data/heroes";

describe('Pruebas en funciones de heroes',()=>{

    test('debe de retornar el numero de heroes de Marvel', ()=>{

        const owner='Marvel'
        const heroe=getHeroesByOwner(owner)
        const heroesDataM = heroes.filter((h) => h.owner === owner);
        expect(heroe).toEqual(heroesDataM)
        console.log('Numero de heroes de Marvel =',heroesDataM.length)
        console.log(heroesDataM)
        
        
    });
});