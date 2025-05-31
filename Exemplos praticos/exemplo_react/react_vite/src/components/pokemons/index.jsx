import './index.css'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import PokemonCard from './PokemonCard'

function PekemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [pageForm, setPageForm] = useState(0);
    const limit = 20;

    useEffect(() => {
        api.get(`/pokemon?limit=${limit}&offset=${page * limit}`).then(res => {
            setPokemons(res.data.results);
            setLoading(false);
        }).catch(err => {
            console.error("Erro ao carregar os pokémons:", err);
            setLoading(false);
        });
    }, [page]);

    const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setPage((prev) => prev + 1);


    return (
        <>
            <h1>Lista de Pokémons</h1>

            <div className="pokemon-pagination">

                <button onClick={handlePrev} disabled={page === 0}>Anterior</button>
                <span>Página {page + 1}</span>
                <button onClick={handleNext}>Próxima</button>
                <span>Ir para página:</span>
                <input
                    type="number"
                    min={1}
                    onChange={e => {
                        const value = Number(e.target.value);
                        if (value >= 1) setPageForm(value - 1);
                    }}
                    className="pokemon-page-input"
                />
                <button
                    onClick={() => setPage(pageForm)}
                >
                    Confirmar
                </button>
            </div>
            {loading ? <p>Carregando pokémons...</p> :
                <div className='pokemon-list'>
                    {pokemons && pokemons.map((item) => (
                        <PokemonCard key={item.name} data={item} />
                    ))}
                </div>
            }
        </>
    )
}

export default PekemonList
