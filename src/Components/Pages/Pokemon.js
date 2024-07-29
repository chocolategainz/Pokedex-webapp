import React, { useEffect , useState } from "react";
import { Pokedex } from'pokeapi-js-wrapper';


const Pokemon = () => {
    const [pokemonData , setPokemonData] = useState(null); //Eevee Data
    const [pikachuData , setPikachuData] = useState(null); //Pikachu Data

    useEffect(() => {
    const customOptions = {
        protocol: 'https',
        cache: true,
        hostName: 'pokeapi.co',
        versionPath: '/api/v2/',
        cacheImages: true,
        timeout: 5 * 1000 //5s
    };
const P = new Pokedex(customOptions);  

//Eevee Data
P.getPokemonByName('eevee')
    .then(function(response) {
        console.log(response);
        setPokemonData(response);
    })
    .catch(function(error){
        console.log(error);
    });

    //Pikachu Data
P.getPokemonByName("pikachu")
.then(function(response) {
        console.log(response);
        setPikachuData(response);
      })
.catch(function(error){
        console.log(error);
    });

    //Victini

    
}, []);

    return (
<div className = "container">
    {/*Eevee*/}
{pokemonData ? (
    <div>
        <h2>{pokemonData.name}</h2>
        <img src ={pokemonData.sprites.front_default} alt = {pokemonData.name} />
        <p>Height: {pokemonData.height}</p>
        <p>Weight: {pokemonData.weight}</p>
        <p>Base Experience: {pokemonData.base_experience}</p>
        <p>Type: {pokemonData.types?.map(typeData => typeData.type.name).join()}</p>
        </div>
) : (
    <p>Loading...</p>
)}

{/*Pikachu*/}

{pokemonData ? (
    <div>
        <h2>{pikachuData.name}</h2>
        <img src ={pikachuData.sprites.front_default} alt = {pikachuData.name} />
        <p>Height: {pikachuData.height}</p>
        <p>Weight: {pikachuData.weight}</p>
        <p>Base Experience: {pikachuData.base_experience}</p>
        </div>
) : (
    <p>Loading...</p>
)}
</div>
    );
};

export default Pokemon;