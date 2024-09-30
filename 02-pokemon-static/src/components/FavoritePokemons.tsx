import type { FavoritePokemon } from "@interfaces/favorite-pokemons";
import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";


const getFavoritePokemons = (): FavoritePokemon[] => {
  const favoritePokemons: FavoritePokemon[] = JSON.parse(localStorage.getItem('favorite-pokemon') ?? '[]');
  const orderedPokemons = favoritePokemons.sort((a: FavoritePokemon, b: FavoritePokemon) => Number(a.id) - Number(b.id));
  return orderedPokemons;
}
export const FavoritePokemons = () => {

  const [pokemons, setPokemons] = createSignal(getFavoritePokemons());

  return (
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <For each={pokemons()}>
        {
          (pokemon) => (
            <FavoritePokemonCard pokemon={pokemon} />
          )
        }
      </For>

    </div>
  )
}