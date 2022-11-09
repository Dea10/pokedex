import { render } from "@testing-library/react"
import PokemonPreview from "../../src/components/PokemonPreview/PokemonPreview"

describe('PokemonPreview test', () => { 
    test('should match snapshot with no pokemon redered', () => {
        const {container} = render(<PokemonPreview />)

        expect(container).toMatchSnapshot();
    })

    test('should match snapshot with pokemon redered', () => {
        const pokemonSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        const {container} = render(<PokemonPreview pokemonSpriteUrl={pokemonSpriteUrl} />)

        expect(container).toMatchSnapshot();
    })
})