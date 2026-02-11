import { useState } from "react";
import "./PokemonCard.css";

export default function PokemonCard({ pokemon, onDelete, onUpdate }) {
  const [apelido, setApelido] = useState(pokemon.nickname);
  const [nivel, setNivel] = useState(pokemon.level);

  const cores = {
    fire: "#ff6b6b",
    water: "#4dabf7",
    grass: "#51cf66",
    electric: "#ffd43b",
    psychic: "#f06595",
    ice: "#74c0fc",
    dragon: "#845ef7",
    dark: "#343a40",
    fairy: "#fcc2d7",
    normal: "#adb5bd",
    fighting: "#ff922b",
    poison: "#da77f2",
    ground: "#c92a2a",
    flying: "#91a7ff",
    bug: "#82c91e",
    rock: "#868e96",
    ghost: "#5f3dc4",
    steel: "#ced4da",
  };

  function salvar() {
    onUpdate(pokemon.id, { nickname: apelido, level: nivel });
  }

  const tipoPrincipal = pokemon.types[0];
  const corFundo = cores[tipoPrincipal] || "#999";

  return (
    <div
      className="cartao"
      style={{
        background: corFundo,
      }}
    >
      <h3>{apelido || pokemon.name}</h3>

      <img src={pokemon.image} alt={pokemon.name} />

      <div className="barra">
        <div className="vida" />
      </div>

      <p className="tipo">Tipo: {pokemon.types.join(", ")}</p>

      <div className="campos">
        <input
          className="campo"
          placeholder="Apelido"
          value={apelido}
          onChange={(e) => setApelido(e.target.value)}
        />

        <input
          className="campo"
          type="number"
          value={nivel}
          onChange={(e) => setNivel(Number(e.target.value))}
        />
      </div>

      <div className="acoes">
        <button className="botao botao-salvar" onClick={salvar}>
          Salvar
        </button>

        <button
          className="botao botao-liberar"
          onClick={() => onDelete(pokemon.id)}
        >
          Liberar
        </button>
      </div>
    </div>
  );
}
