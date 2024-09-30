import type { FavoritePokemon } from "@interfaces/favorite-pokemons";
import { type Component, createSignal, Show } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
}


export const FavoritePokemonCard: Component<Props> = (props) => {

  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`;

  const handleDelete = () => {
    const favoritePokemons = JSON.parse(localStorage.getItem('favorite-pokemon') ?? '[]');
    const newFavoritePokemons = favoritePokemons.filter((pokemon: FavoritePokemon) => pokemon.id !== props.pokemon.id);
    localStorage.setItem('favorite-pokemon', JSON.stringify(newFavoritePokemons));
    setIsVisible(false);
  }

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col items-center justify-center p-4 bg-slate-700 shadow-lg rounded-md">
        <a href={`/pokemons/${props.pokemon.name}`}>
          <img
            src={imageSrc}
            alt={props.pokemon.name}
            width={150}
            height={150}
            style={`view-transition-name: ${props.pokemon.name}-image`}
          />
          <p class="capitalize">#{props.pokemon.id} - {props.pokemon.name}</p>
        </a>
        <button class="bg-red-500 text-white mt-4 px-4 py-2 rounded-md" onClick={handleDelete}>Delete</button>
      </div>
    </Show>
  )
}