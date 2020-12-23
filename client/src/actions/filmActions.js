import { GET_FILMS, ADD_FILM, DELETE_FILM } from "./types";

export const getFilms = () => {
    return {
        type: GET_FILMS,
    };
};
