import { useEffect, useState } from "react";
import SearchPokemon from "./components/SearchPokemon";
import Pokedex from "./components/Pokedex";
import TeamList from "./components/TeamList";
import Logo from "./logo.png";
import "./App.css";

function App() {
  const [time, setTime] = useState(() => {
    const salvo = localStorage.getItem("time");
    return salvo ? JSON.parse(salvo) : [];
  });

  useEffect(() => {
    localStorage.setItem("time", JSON.stringify(time));
  }, [time]);

  function adicionarPokemon(pokemon) {
    if (time.length >= 6) {
      alert("Seu time já tem 6 Pokémon!");
      return;
    }

    const existe = time.find((p) => p.id === pokemon.id);
    if (existe) {
      alert("Esse Pokémon já está no time!");
      return;
    }

    setTime([...time, pokemon]);
  }

  function removerPokemon(id) {
    setTime(time.filter((p) => p.id !== id));
  }

  function atualizarPokemon(id, novosDados) {
    const novoTime = time.map((p) => {
      if (p.id === id) {
        return { ...p, ...novosDados };
      }
      return p;
    });
    setTime(novoTime);
  }

  return (
    <div className="app">
      <div className="app-conteudo">
        <img className="logo" src={Logo} alt="Pokedex" />

        <SearchPokemon onAdd={adicionarPokemon} />

        <Pokedex onAdd={adicionarPokemon} />

        <TeamList
          team={time}
          onDelete={removerPokemon}
          onUpdate={atualizarPokemon}
        />
      </div>
    </div>
  );
}

export default App;
