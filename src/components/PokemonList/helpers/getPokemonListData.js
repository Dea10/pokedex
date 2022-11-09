export const pokemonListDataDefault = {
    pokemonList: [],
    previous: null,
    next: null,
    isError: false
}

export const getPokemonListData = async (url) => {
    try {
        const resp = await fetch(url);
        const data = await resp.json();

        return {
            ...pokemonListDataDefault,
            pokemonList: data.results,
            previous: data.previous,
            next: data.next
        };
    } catch (error) {
        return {
            ...pokemonListDataDefault,
            isError: true
        }
    }
}