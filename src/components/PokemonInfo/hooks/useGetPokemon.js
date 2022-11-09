import { useEffect, useState } from "react";

const pokemonInitialState = {
    id: '',
    name: '',
    weight: '',
    height: '',
    spriteUrl: '',
    type: '',
    isError: false,
};

export const useGetPokemon = ( url ) => {

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setPokemon({
                    ...pokemonInitialState,
                    id: data.id,
                    name: data.name,
                    weight: data.weight,
                    height: data.height,
                    spriteUrl: data.sprites.front_default,
                    type: data.types[0].type.name,
                })
            })
            .catch(() => {
                setPokemon({
                    ...pokemonInitialState,
                    isError: true
                })
            })
    }, [])

    return pokemon;
}