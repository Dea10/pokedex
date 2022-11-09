import './PokemonPreview.css';

const PokemonPreview = ({ pokemonSpriteUrl=null }) => {
    return (
        <div className='pokemon-preview-container'>
            <div className="pokemon-preview">
                {
                    !!pokemonSpriteUrl ?
                        <img src={pokemonSpriteUrl} alt="" /> :
                        <small className='preview-text'>Click on a pokemon to preview</small>
                }
            </div>
        </div>
    )
}

export default PokemonPreview;