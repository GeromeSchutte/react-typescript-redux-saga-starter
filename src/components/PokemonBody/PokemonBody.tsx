import React, { useState, useEffect } from 'react';
import { Pokemon } from '../../modules/Pokemon/Pokemon.types';

type PokemonBodyProps = {
    fetchPokemon: () => void;
    pokemon: Pokemon.Pokemon;
};

const PokemonBody: React.FC<PokemonBodyProps> 
    = ({ fetchPokemon, pokemon }: PokemonBodyProps) => {

    const [ imageLoading, setImageLoading ] = useState(false);

    const imageLoadFinished = () => {
        setImageLoading(false);
    };

    const imageLoadStarted = () => {
        setImageLoading(true);
    };

    const loadHandler = () => {
        imageLoadStarted();
        fetchPokemon();
    };

    return <>
        <h1 style={{display: imageLoading ? 'none' : 'block'}}>{pokemon?.name ?? 'No pokemon here yet. Click the button to load one!'}</h1>
        <span style={{visibility: imageLoading ? 'visible' : 'hidden'}}>Pokemon image loading</span>
        { pokemon?.imgLink && <img style={{visibility: imageLoading ? 'hidden' : 'visible' }} onLoad={imageLoadFinished} src={pokemon.imgLink} alt={pokemon?.name ?? 'pokemon sprite'}/>}
        <button onClick={loadHandler}>Load a pokemon</button>
    </>;
};

export default PokemonBody;