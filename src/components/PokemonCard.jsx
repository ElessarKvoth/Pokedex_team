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
      className="card-pokemon"
      style={{
        background: corFundo,
      }}
    >
      <h3>{apelido || pokemon.name}</h3>

      <img src={pokemon.image} alt={pokemon.name} />

      <div className="barra-tipo">
        <div className="barra-tipo-preenchimento" />
      </div>

      <p className="texto-tipo">Tipo: {pokemon.types.join(", ")}</p>

      <div className="entradas-pokemon">
        <input
          className="entrada-pokemon"
          placeholder="Apelido"
          value={apelido}
          onChange={(e) => setApelido(e.target.value)}
        />

        <input
          className="entrada-pokemon"
          type="number"
          value={nivel}
          onChange={(e) => setNivel(Number(e.target.value))}
        />
      </div>

      <div className="acoes-pokemon">
        <button className="botao-pokemon botao-salvar" onClick={salvar}>
          Salvar
        </button>

        <button
          className="botao-pokemon botao-liberar"
          onClick={() => onDelete(pokemon.id)}
        >
          Liberar
        </button>
      </div>
    </div>
  );
}
