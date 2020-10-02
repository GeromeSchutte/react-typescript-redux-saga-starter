import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { pokemonSaga } from '../modules/Pokemon/Pokemon.sagas';
import RootReducer from './RootReducer';

const composeEnhancers = composeWithDevTools({});

const sagaMiddleWare = createSagaMiddleware();
export const store = createStore(
    RootReducer, 
    composeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(pokemonSaga);