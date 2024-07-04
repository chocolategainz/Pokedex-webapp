import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import News from './Components/Pages/News';
import Events from './Components/Pages/Events';
import './PokedexDesign.scss';

function App() {
  return (
<div className = 'Nav'> 
  <Router>
<header className = ''>
 
  <Navbar />
</header>
<Routes>
<Route exact path = "/" element = {<Home />} />
<Route exact path = "/About" element = {<About />} />
<Route exact path = "/News" element = {<News />} />
<Route exact path = "/Events" element = {<Events />} />
</Routes>
  </Router>
</div>
   
     
       
  
    
   
    
  );
}

export default App;
