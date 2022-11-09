import React from 'react';
import { colors } from '../../assets/colors';

import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
    const {id, name, weight, height, spriteUrl, type, isError} = pokemon;

    if ( isError ) return <p> Pokemon not found, try again </p>

    return (
        <div className='pokemon-card' style={{backgroundColor: colors[type]}}>
            <div className='image-container'>
                <img src={spriteUrl} alt={name} />
                <small>{`${id}: ${name}`}</small>
            </div>
            <hr />
            <div className='stats-container'>
                <small>Type: {type}</small>
                <small>Height: {height} ft</small>
                <small>Weight: {weight} lb</small>
            </div>
        </div>
    )
}

export default PokemonCard;
