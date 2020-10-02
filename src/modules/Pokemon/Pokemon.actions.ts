import * as ActionTypes from './Pokemon.actionTypes';

export const requestPokemonFetch = (id: number) => {
    return {
        type: ActionTypes.REQUEST_FETCH,
        payload: {
            id
        }
    };
};