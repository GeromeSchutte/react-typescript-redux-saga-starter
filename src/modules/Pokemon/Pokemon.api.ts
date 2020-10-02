import axios from 'axios';
import * as URLs from '../../constants/URLs';
import { Pokemon } from './Pokemon.types';

export const getPokemon = async (id: number) => {
    const pokemonUrl = `${URLs.pokemon.GET_POKEMON}${id}`;

    const result = await axios.get(pokemonUrl);
    const pokemon: Pokemon.Pokemon = {
        name: result.data.name,
        imgLink: result.data.sprites.front_default
    };

    return pokemon;
};