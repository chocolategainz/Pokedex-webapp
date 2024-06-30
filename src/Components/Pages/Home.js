import React from 'react';


const Home = () => {
    return (
        <div className = "container">
            <h1>Snap</h1>
            <img src = {require('./Pokemon-ball-image.jpg')} className = "pokeballLogo" alt = 'pokemon ball' width = {400}></img>
        </div>
    );
};

export default Home;