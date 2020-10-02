/// <reference path="Pokemon.index.ts" />
export namespace Pokemon {
    export type Pokemon = {
        name: string | null;
        imgLink: string | null;
    };

    export type State = {
        pokemon: Pokemon;
        loading: boolean;
        message: string | null;
    }

    export type FetchAction = {
        type: string;
        payload: {
            id: number;
        };
    };

    export type FetchSuccessAction = {
        type: string,
        pokemon: Pokemon
    }

    export type FetchFailAction = {
        type: string,
        message: string
    }

    export type Action = FetchAction & FetchFailAction & FetchSuccessAction
};