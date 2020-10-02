import pokemonReducer from './Pokemon.reducer';
import initialState from '../../store/InitialState';
import { Pokemon } from './Pokemon.types';
import * as ActionTypes from './Pokemon.actionTypes';

describe('PokemonReducer', () => {
    const defaultState = initialState.pokemon;
    const defaultAction = {
        pokemon: {
            name: 'pikachu',
            imgLink: 'pikachu.png'
        },
        payload: {
            id: 0
        },
        message: ''
    }

    it('Should given an action with a type it doesn\'t recognise, return the state as it was given', () => {
        const action: Pokemon.Action = {
            ...defaultAction,
            type: 'UNRECOGNIZED'
        };

        const actual = pokemonReducer(defaultState, action);

        expect(actual).toBe(defaultState);
    });

    it(`Should given an action with a '${ActionTypes.REQUEST_FETCH}' type, clear errors and indicate loading as being in progress`, () => {
        const action: Pokemon.Action = {
            ...defaultAction,
            type: ActionTypes.REQUEST_FETCH
        };

        const stateOverrides = [
            {
                loading: true,
                message: 'some error'
            },
            {
                loading: false,
                message: null
            }
        ];

        for (const override of stateOverrides) {
            const testState = {
                ...defaultState,
                ...override
            }

            const actual = pokemonReducer(testState, action);

            expect(actual.loading).toBe(true);
            expect(actual.message).toBeNull();
        }
    });

    it(`Should given an action with a '${ActionTypes.REQUEST_FAILED}' or '${ActionTypes.REQUEST_SUCCEEDED}' type, indicate loading as being finished`, () => {
        const typeOverrides = [
            ActionTypes.REQUEST_FAILED,
            ActionTypes.REQUEST_SUCCEEDED
        ];

        for (const override of typeOverrides) {
            
        }
    });
});