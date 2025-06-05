import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import PokemonList from './components/pokemons/PokemonList'
import Home from './components/home'
import PokemonView from './components/pokemons/PokemonView'
import Header from './components/header/Header'
import LocationList from './components/locations/LocationList'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemons' element={<PokemonList />} />
          <Route path='/pokemons/:id' element={<PokemonView />} />
          <Route path='/locations/' element={<LocationList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
