import React, { useEffect } from "react";
import { Pokedex } from'pokeapi-js-wrapper';

const Pokemon = () => {
    useEffect(() => {
    const customOptions = {
        protocol: 'https',
        cache: true,
        hostName: 'localhost:443',
        versionPath: '/api/v2/',
        cacheImages: true,
        timeout: 5 * 1000 //5s
    };
const P = new Pokedex(customOptions);  

P.getPokemonByName('eevee')
    .then(function(response) {
        console.log(response)
    })

    .catch(function(error){
        console.log(error);
    });

}, []);
    return (
<div className = "container">

</div>
    );
};

export default Pokemon;