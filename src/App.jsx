import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StarWars from './components/starwars';
import StarWarDetails from './components/starwarsDetails';



function App() {

  return (
    <BrowserRouter>
    <div>
          <Routes>
            <Route exact path="/people/:id" element={<StarWarDetails/>}/>
            <Route exact path="/" element={<StarWars/>}/>
            <Route exact path="/page/:id" element={<StarWars/>}/>
          </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App