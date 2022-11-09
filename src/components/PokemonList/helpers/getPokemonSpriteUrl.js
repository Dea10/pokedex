export const getPokemonSpriteUrl = async (url) => {

    try {
        const resp = await fetch(url)
        const data = await resp.json()
        const pokemonSpriteUrl = data.sprites.front_default
    
        return pokemonSpriteUrl;    
    } catch (error) {
        return null;
    }
}