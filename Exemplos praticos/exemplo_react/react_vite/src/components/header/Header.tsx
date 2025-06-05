import { Link } from "react-router"

import './Header.css'

function Header(){
    return(
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/pokemons">Pokémons</Link>
                <Link to="/locations">Locais</Link>
            </nav>
        </header>
        
    )
}

export default Header