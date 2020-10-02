import * as ActionTypes from './Pokemon.actionTypes';
import InitialState from '../../store/InitialState';
import { Pokemon } from './Pokemon.types';

type PokemonReducerType = (
    state: Pokemon.State,
    action: Pokemon.Action
) => Pokemon.State;
    
const reducer: PokemonReducerType = (
    state: Pokemon.State = InitialState.pokemon,
    action: Pokemon.Action
) => {
    switch (action.type) {
        case ActionTypes.REQUEST_FETCH:
            return {
                ...state,
                loading: true,
                message: null
            };
            case ActionTypes.REQUEST_SUCCEEDED:
                return {
                    ...state,
                    loading: false,
                    pokemon: action.pokemon
        };
        case ActionTypes.REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                message: action.message
            };
        default:
            return state
    };
};

export default reducer;