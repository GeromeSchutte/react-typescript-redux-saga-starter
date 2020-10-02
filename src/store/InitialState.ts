import { Pokemon } from "../modules/Pokemon/Pokemon.types";

export type AppState = {
    pokemon: Pokemon.State
};

const initialState: AppState = {
    pokemon: {
        loading: false,
        message: null,
        pokemon: {
            name: null,
            imgLink: null
        }
    }
};

export default initialState;