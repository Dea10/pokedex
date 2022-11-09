import { getPokemonSpriteUrl } from "../../../src/components/PokemonList/helpers/getPokemonSpriteUrl"

describe('getPokemonSpriteUrl test', () => {
    test('should return a valid url', async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
        const pokemonSpriteUrl = await getPokemonSpriteUrl(url);
    
        expect(typeof pokemonSpriteUrl).toBe('string')
    })

    test('should return null', async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/ditt'
        const pokemonSpriteUrl = await getPokemonSpriteUrl(url);
    
        expect(pokemonSpriteUrl).toBe(null)
    })
})