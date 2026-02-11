import { useState } from "react";
import { getPokemon } from "../services/pokeApi";
import "./SearchPokemon.css";

export default function SearchPokemon({ onAdd }) {
  const [nome, setNome] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function buscar() {
    if (!nome) return;

    try {
      setCarregando(true);
      const pokemon = await getPokemon(nome);

      onAdd({
        ...pokemon,
        nickname: "",
        level: 1,
      });

      setNome("");
    } catch {
      alert("Pokémon não encontrado!");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="busca">
      <input
        className="busca-campo"
        type="text"
        placeholder="Digite o nome do Pokémon..."
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <button className="busca-botao" onClick={buscar}>
        {carregando ? "Buscando..." : "Capturar"}
      </button>
    </div>
  );
}
