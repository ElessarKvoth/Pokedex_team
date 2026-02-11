import PokemonCard from "./PokemonCard";
import Simbolo from "../SIMBOLO.png";
import "./TeamList.css";

export default function TeamList({ team, onDelete, onUpdate }) {
  return (
    <div className="container-time">
      <h2 className="titulo-time">Seu Time Pokémon</h2>

      <div className="grade-time">
        {team.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </div>

      <div className="simbolo-time">
        <img src={Simbolo} alt="Símbolo" />
      </div>
    </div>
  );
}
