import React, { useEffect , useState } from "react";
import { Pokedex } from'pokeapi-js-wrapper';


const Pokemon = () => {
    const [pokemonData , setPokemonData] = useState(null); //Eevee Data
    const [pikachuData , setPikachuData] = useState(null); //Pikachu Data
    const [charmanderData , setCharmanderData] = useState(null); //Charmander Data
    const [gastlyData , setGastlyData] = useState(null); //Ghastly Data
    const [squirtleData , setSquirtleData] = useState(null); //Squirtle Data
    const [bulbasaurData , setBulbasaurData] = useState(null); //Bulbasaur Data
    const [oshawottData , setOshawottData] = useState(null); //Oshawott Data
    const [axewData , setAxewData] = useState(null); //Axew Data
    const [aronData , setAronData] = useState(null); //Aron Data
    const [trapinchData , setTrapinchData] = useState(null);//Trapinch Data
    const [chimcharData , setChimcharData] = useState(null); //Chimchar Data
    const [deinoData , setDeinoData] = useState(null); //Deino Data

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

    //Charmander
    P.getPokemonByName("charmander")
.then(function(response) {
        console.log(response);
        setCharmanderData(response);
      })
.catch(function(error){
        console.log(error);
    });

    //Ghastly
    P.getPokemonByName("gastly")
.then(function(response) {
        console.log(response);
        setGastlyData(response);
      })
.catch(function(error){
        console.log(error);
    });
    
    //Squirtle
    P.getPokemonByName("squirtle")
.then(function(response) {
        console.log(response);
        setSquirtleData(response);
      })
.catch(function(error){
        console.log(error);
    });

     //Bulbasaur
     P.getPokemonByName("bulbasaur")
     .then(function(response) {
             console.log(response);
             setBulbasaurData(response);
           })
     .catch(function(error){
             console.log(error);
         });

     //Oshawott
     P.getPokemonByName("oshawott")
     .then(function(response) {
             console.log(response);
             setOshawottData(response);
           })
     .catch(function(error){
             console.log(error);
         });

         //Axew
     P.getPokemonByName("axew")
     .then(function(response) {
             console.log(response);
             setAxewData(response);
           })
     .catch(function(error){
             console.log(error);
         });

          //Aron
     P.getPokemonByName("aron")
     .then(function(response) {
             console.log(response);
             setAronData(response);
           })
     .catch(function(error){
             console.log(error);
         });

          //Trapinch
     P.getPokemonByName("trapinch")
     .then(function(response) {
             console.log(response);
             setTrapinchData(response);
           })
     .catch(function(error){
             console.log(error);
         });

             //Chimchar
     P.getPokemonByName("chimchar")
     .then(function(response) {
             console.log(response);
             setChimcharData(response);
           })
     .catch(function(error){
             console.log(error);
         });

            //Deino
     P.getPokemonByName("deino")
     .then(function(response) {
             console.log(response);
             setDeinoData(response);
           })
     .catch(function(error){
             console.log(error);
         });
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

{pikachuData ? (
    <div>
        <h2>{pikachuData.name}</h2>
        <img src ={pikachuData.sprites.front_default} alt = {pikachuData.name} />
        <p>Height: {pikachuData.height}</p>
        <p>Weight: {pikachuData.weight}</p>
        <p>Base Experience: {pikachuData.base_experience}</p>
        <p>Type: {pikachuData.types?.map(typeData => typeData.type.name).join()}</p>
        </div>
) : (
    <p>Loading...</p>
)}

{/*Charmander*/}

{charmanderData ? (
    <div>
        <h2>{charmanderData.name}</h2>
        <img src ={charmanderData.sprites.front_default} alt = {charmanderData.name} />
        <p>Height: {charmanderData.height}</p>
        <p>Weight: {charmanderData.weight}</p>
        <p>Base Experience: {charmanderData.base_experience}</p>
        <p>Type: {charmanderData.types?.map(typeData => typeData.type.name).join()}</p>
        </div>
) : (
    <p>Loading...</p>
)}

{/*Gastly*/}

{gastlyData ? (
    <div>
        <h2>{gastlyData.name}</h2>
        <img src ={gastlyData.sprites.front_default} alt = {gastlyData.name} />
        <p>Height: {gastlyData.height}</p>
        <p>Weight: {gastlyData.weight}</p>
        <p>Base Experience: {gastlyData.base_experience}</p>
        <p>Type: {gastlyData.types?.map(typeData => typeData.type.name).join(', ')}</p>
        </div>
) : (
    <p>Loading...</p>
)}

{/*Squirtle*/}

{squirtleData ? (
    <div>
        <h2>{squirtleData.name}</h2>
        <img src ={squirtleData.sprites.front_default} alt = {squirtleData.name} />
        <p>Height: {squirtleData.height}</p>
        <p>Weight: {squirtleData.weight}</p>
        <p>Base Experience: {squirtleData.base_experience}</p>
        <p>Type: {squirtleData.types?.map(typeData => typeData.type.name).join()}</p>
        </div>
) : (
    <p>Loading...</p>
)}

{/*Bulbasaur*/}

{bulbasaurData ? (
    <div>
        <h2>{bulbasaurData.name}</h2>
        <img src ={bulbasaurData.sprites.front_default} alt = {bulbasaurData.name} />
        <p>Height: {bulbasaurData.height}</p>
        <p>Weight: {bulbasaurData.weight}</p>
        <p>Base Experience: {bulbasaurData.base_experience}</p>
        <p>Type: {bulbasaurData.types?.map(typeData => typeData.type.name).join(', ')}</p>
        </div>
) : (
    <p>Loading...</p>
)}

{/*Oshawott*/}

{oshawottData ? (
    <div>
        <h2>{oshawottData.name}</h2>
        <img src ={oshawottData.sprites.front_default} alt = {oshawottData.name} />
        <p>Height: {oshawottData.height}</p>
        <p>Weight: {oshawottData.weight}</p>
        <p>Base Experience: {oshawottData.base_experience}</p>
        <p>Type: {oshawottData.types?.map(typeData => typeData.type.name).join()}</p>
        </div>
) : (
    <p>Loading...</p>
)}

{/*Axew*/}

{axewData ? (
    <div>
        <h2>{axewData.name}</h2>
        <img src ={axewData.sprites.front_default} alt = {axewData.name} />
        <p>Height: {axewData.height}</p>
        <p>Weight: {axewData.weight}</p>
        <p>Base Experience: {axewData.base_experience}</p>
        <p>Type: {axewData.types?.map(typeData => typeData.type.name).join(', ')}</p>
        </div>
) : (
    <p>Loading...</p>
)}

{/*Aron*/}

{aronData ? (
    <div>
        <h2>{aronData.name}</h2>
        <img src ={aronData.sprites.front_default} alt = {aronData.name} />
        <p>Height: {aronData.height}</p>
        <p>Weight: {aronData.weight}</p>
        <p>Base Experience: {aronData.base_experience}</p>
        <p>Type: {aronData.types?.map(typeData => typeData.type.name).join(', ')}</p>
        </div>
) : (
    <p>Loading...</p>
)}

{/*Trapinch*/}

{trapinchData ? (
    <div>
        <h2>{trapinchData.name}</h2>
        <img src ={trapinchData.sprites.front_default} alt = {trapinchData.name} />
        <p>Height: {trapinchData.height}</p>
        <p>Weight: {trapinchData.weight}</p>
        <p>Base Experience: {trapinchData.base_experience}</p>
        <p>Type: {trapinchData.types?.map(typeData => typeData.type.name).join(', ')}</p>
        </div>
) : (
    <p>Loading...</p>
)}

{/*Chimchar*/}

{chimcharData ? (
    <div>
        <h2>{chimcharData.name}</h2>
        <img src ={chimcharData.sprites.front_default} alt = {chimcharData.name} />
        <p>Height: {chimcharData.height}</p>
        <p>Weight: {chimcharData.weight}</p>
        <p>Base Experience: {chimcharData.base_experience}</p>
        <p>Type: {chimcharData.types?.map(typeData => typeData.type.name).join()}</p>
        </div>
) : (
    <p>Loading...</p>
)}

{/*Deino*/}

{deinoData ? (
    <div>
        <h2>{deinoData.name}</h2>
        <img src ={deinoData.sprites.front_default} alt = {deinoData.name} />
        <p>Height: {deinoData.height}</p>
        <p>Weight: {deinoData.weight}</p>
        <p>Base Experience: {deinoData.base_experience}</p>
        <p>Type: {deinoData.types?.map(typeData => typeData.type.name).join(', ')}</p>
        </div>
) : (
    <p>Loading...</p>
)}
</div>
    );
};

export default Pokemon;