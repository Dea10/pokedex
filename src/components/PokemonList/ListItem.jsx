import { useNavigate } from "react-router-dom";
import { getPokemonSpriteUrl } from './helpers/getPokemonSpriteUrl';

import './ListItem.css';

const ListItem = ({ name, url, setPreview }) => {

    const navigate = useNavigate();

    const handleOnClick = async () => {
        const pokemonSpriteUrl = await getPokemonSpriteUrl(url);
        setPreview(pokemonSpriteUrl);
    }
    
    const handleOnDoubleClick = () => {
        navigate("/PokemonInfo", {state: {url}});
    }

    return (
        <div 
            className='list-item' 
            onDoubleClick={handleOnDoubleClick}
            onClick={handleOnClick}    
        >
            {name}
        </div>
    )
}

export default ListItem;