import PokemonCard from "./PokemonCard";
import Simbolo from "../SIMBOLO.png";
import "./TeamList.css";

export default function TeamList({ team, onDelete, onUpdate }) {
  return (
    <div className="squad">
      <h2 className="squad-titulo">Seu Time Pokémon</h2>

      <div className="squad-grid">
        {team.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </div>

      <div className="rodape">
        <img src={Simbolo} alt="Símbolo" />
      </div>
    </div>
  );
}
