import React, { useEffect , useState } from "react";
import { Pokedex } from'pokeapi-js-wrapper';


const Pokemon = () => {
    const [pokemonData , setPokemonData] = useState(null);

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

P.getPokemonByName('eevee')
    .then(function(response) {
        console.log(response);
        setPokemonData(response);
    })

    .catch(function(error){
        console.log(error);
    });

}, []);

    return (
<div className = "container">
{pokemonData ? (
    <div>
        <h2>{pokemonData.name}</h2>
        <img src ={pokemonData.sprites.front_default} alt = {pokemonData.name} />
        <p>Height: {pokemonData.height}</p>
        <p>Weight: {pokemonData.weight}</p>
        <p>Base Experience: {pokemonData.base_experience}</p>
        </div>
) : (
    <p>Loading...</p>
)}
</div>
    );
};

export default Pokemon;