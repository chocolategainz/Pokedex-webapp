import React from 'react';
import Pokemon from './Pokemon';

const Home = () => {
    return (  
        <div className= "d-flex justify-content-center">
        <img src = {require('./Pokemon-ball-image-removebg.jpg')} id = "pokeballLogo" alt = 'pokemon ball'></img>    
       
        <div>
           <Pokemon /> 
        </div> 

            </div>       
    );
};

export default Home;