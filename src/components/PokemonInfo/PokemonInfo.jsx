import { useLocation, useNavigate } from "react-router-dom";
import { useGetPokemon } from "./hooks/useGetPokemon";
import PokemonCard from "./PokemonCard";

const PokemonInfo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {state: { url }} = location

    const pokemon = useGetPokemon( url );

    return (
        <div>
            <PokemonCard pokemon={pokemon} />
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default PokemonInfo;