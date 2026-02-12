import { useState, useEffect } from "react";
import "./Pokedex.css";

export default function Pokedex({ onAdd }) {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pokemonsPerPage = 12;

  useEffect(() => {
    // Calculos paginísticos
    const offset = (currentPage - 1) * pokemonsPerPage;

    // Busca lista básica de pokemons
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${pokemonsPerPage}&offset=${offset}`,
    )
      .then((res) => res.json())
      .then(async (data) => {
        // Promise.all executa todas as requisições em paralelo e espera todas terminarem
        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            // Busca dados 
            const res = await fetch(pokemon.url);
            const details = await res.json();

        
            return {
              id: details.id,
              name: details.name,
              image: details.sprites.front_default,
              types: details.types.map((t) => t.type.name),
              level: 1,
              nickname: "",
            };
          }),
        );

        console.log(`Carregados ${detailedPokemons.length} pokemons`);
        // Remove pokemons antigos e carrega os novos
        setPokemons(detailedPokemons);
      });
  }, [currentPage]);

  return (
    <div className="pokedex-container">
      <h2 className="pokedex-titulo">Pokédex</h2>

      <div className="pokedex-grid">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="pokedex-card">
            <h3>{pokemon.name}</h3>

            <img src={pokemon.image} alt={pokemon.name} />

            <div className="pokedex-tipo">
              <p>Tipo: {pokemon.types.join(", ")}</p>
            </div>

            <button className="pokedex-botao" onClick={() => onAdd(pokemon)}>
              Adicionar ao time
            </button>
          </div>
        ))}
      </div>

      <div className="pokedex-paginacao">
        <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
          Anterior
        </button>

        <span>Página {currentPage}</span>

        <button onClick={() => setCurrentPage((p) => p + 1)}>Próximo</button>
      </div>
    </div>
  );
}
