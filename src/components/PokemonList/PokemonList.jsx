import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNext, updatePokemonList, updatePrev } from "../../reducers/pokemonSlice";
import { getPokemonListData } from "./helpers/getPokemonListData";
import ListItem from "./ListItem";
import PaginationControl from "./PaginationControl";

import './PokemonList.css';

const finalPage = 'https://pokeapi.co/api/v2/pokemon/?offset=140&limit=11';
const beforeFinalPage = 'https://pokeapi.co/api/v2/pokemon/?offset=120&limit=20';

const PokemonList = ({ clickOnPokemon }) => {

    const [baseUrl, setBaseUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [isFinalPage, setIsFinalPage] = useState(false);
    const [didFail, setDidFail] = useState(false);
    const { pokemons, next, previous } = useSelector(state => state);
    const dispatch = useDispatch();
    
    const fetchData = useCallback(async () => {
        const {pokemonList, previous, next, isError} = await getPokemonListData(baseUrl);

        dispatch(updatePokemonList(pokemonList))
        dispatch(updatePrev(previous))
        dispatch(updateNext(next))

        setDidFail(isError);
    }, [baseUrl])

    useEffect(() => {
        fetchData();
    }, [baseUrl])

    const handleOnNext = () => {
        setBaseUrl(next)

        if(baseUrl.includes('offset=120')) {
            setBaseUrl(finalPage);
            setIsFinalPage(true);
        }
    }
    const handleOnPrev = () => {
        setBaseUrl(previous)
        setIsFinalPage(false)

        if(baseUrl.includes('offset=140')) setBaseUrl(beforeFinalPage);
    }

    return (
        <div>
            <div className="pokemon-list">
                {
                    didFail ? 
                    <p>Something went wrong :( No pokemons to show!</p> :
                    pokemons.map(({ name, url }) => (
                        <ListItem
                            key={name}
                            name={name}
                            url={url}
                            setPreview={clickOnPokemon}
                        />

                    ))
                }
            </div>
            <PaginationControl 
                previous={previous}
                next={next}
                isFinalPage={isFinalPage}
                handleOnPrev={handleOnPrev}
                handleOnNext={handleOnNext}
            />
        </div>
    )
}

export default PokemonList;