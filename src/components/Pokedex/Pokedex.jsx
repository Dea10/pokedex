import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import PokemonPreview from "../PokemonPreview/PokemonPreview";

import './Pokedex.css';

const Pokedex = () => {
    const [pokemonPreviewImg, setPokemonPreviewImg] = useState('')

    return (
        <div className="pokedex">
            <PokemonPreview pokemonSpriteUrl={pokemonPreviewImg} />
            <PokemonList clickOnPokemon={setPokemonPreviewImg} />
        </div>
    )
}

export default Pokedex;