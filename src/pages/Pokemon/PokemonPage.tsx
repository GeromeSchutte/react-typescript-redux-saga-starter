import React, { useCallback } from 'react';
import PokemonBody from '../../components/PokemonBody/PokemonBody';
import { connect } from 'react-redux';
import { Pokemon } from '../../modules/Pokemon/Pokemon.types';
import { Dispatch, bindActionCreators } from 'redux';
import * as PokemonActionCreators from '../../modules/Pokemon/Pokemon.actions';
import { AppState } from '../../store/InitialState';

type PokemonPageProps = {
    pokemon: Pokemon.Pokemon,
    pokemonActions: {
        requestPokemonFetch: (id: number) => void;
    }
};

const PokemonPage: React.FC<PokemonPageProps> = (props: PokemonPageProps) => {
    const fetchPokemon = useCallback(() => {
        const randomPokemonId = Math.ceil(Math.random() * 720) + 1;
        props.pokemonActions.requestPokemonFetch(randomPokemonId);

    }, [props.pokemonActions]);

    return <>
        <PokemonBody pokemon={props.pokemon} fetchPokemon={fetchPokemon}/>
    </>;
};

const mapStateToProps = ({ pokemon }: AppState) => ({
    pokemon: pokemon.pokemon,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    pokemonActions: bindActionCreators(PokemonActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage);