import React from 'react';
import Pokemon from './Pokemon';

const Home = () => {
    return (  
        <div className= "pokedex-content">
        <img src = {require('./Pokemon-ball-image-removebg.jpg')} id = "pokeballLogo" alt = 'pokemon ball'></img>    
        
        <div className = 'd-flex justify-content-center"'>
           <Pokemon /> 
        </div> 
           </div>        
    );
};

export default Home;