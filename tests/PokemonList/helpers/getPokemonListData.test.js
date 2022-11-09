import { getPokemonListData } from "../../../src/components/PokemonList/helpers/getPokemonListData";

describe('getPokemonListData test', () => {
    test('should return a pokemon list', async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon';
        const pokemonListData = await getPokemonListData(url)

        expect(pokemonListData.pokemonList.length).toBe(20);
    })
    test('should return error', async () => {
        const url = 'https://pokeapi.co/api/v2/pokemo';
        const pokemonListData = await getPokemonListData(url)
    
        expect(pokemonListData.isError).toBe(true);
    })

    test('should return error', async () => {
        const pokemonListData = await getPokemonListData()
    
        expect(pokemonListData.isError).toBe(true);
    })
    
})