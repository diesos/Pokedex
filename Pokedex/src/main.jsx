
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './Components/nav.jsx'
import FetchPokemon from './Logic/FetchPokemon.jsx'
import FetchPokemonDetail from './Logic/FechPokdemonDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokedex" element={<FetchPokemon />} />
        <Route path="/detail/:id" element={<FetchPokemonDetail />} />
      </Routes>
    </Router>
  </StrictMode>
);
