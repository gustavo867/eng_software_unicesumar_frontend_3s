import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import PokemonList from './components/pokemons/index'
import Home from './components/home'
import PokemonView from './components/pokemons/PokemonView'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemons' element={<PokemonList />} />
          <Route path='/pokemons/:id' element={<PokemonView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
