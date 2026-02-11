export async function getPokemon(name) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
  );

  if (!response.ok) {
    throw new Error("Pokémon não encontrado");
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    types: data.types.map(t => t.type.name)
  };
}
