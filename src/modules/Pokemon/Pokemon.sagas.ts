import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from './Pokemon.api';
import { Pokemon } from './Pokemon.types';
import * as ActionTypes from './Pokemon.actionTypes';

export function* fetchPokemon(action: Pokemon.FetchAction) {
    try {
        const pokemon: Pokemon.Pokemon = yield call(Api.getPokemon, action.payload.id);
        yield put({
            type: ActionTypes.REQUEST_SUCCEEDED,
            pokemon,
        });
    } catch (e) {
        yield put({
            type: ActionTypes.REQUEST_FAILED,
            message: e.message
        });
    }
};

export function* pokemonSaga() {
    yield takeEvery(ActionTypes.REQUEST_FETCH, fetchPokemon);
};