import { combineReducers } from "redux";
import pokemonReducer from "../modules/Pokemon/Pokemon.reducer";

const rootReducer = combineReducers({
    pokemon: pokemonReducer
});

export default rootReducer;