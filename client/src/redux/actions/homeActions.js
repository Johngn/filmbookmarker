import { DEFAULT_FILMS, SEARCH_FILM, HOME_LOADING } from "./types";
import axios from "axios";

export const setHomeLoading = () => {
    return {
        type: HOME_LOADING,
    };
};

export const getDefaultFilms = () => dispatch => {
    dispatch(setHomeLoading());

    delete axios.defaults.headers.common["x-auth-token"]; // This stops CORS error

    axios
        .get(
            `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}`
        )
        .then(res =>
            dispatch({
                type: DEFAULT_FILMS,
                payload: res.data.results,
            })
        );
};

export const searchFilm = searchTerm => dispatch => {
    dispatch(setHomeLoading());

    delete axios.defaults.headers.common["x-auth-token"]; // This stops CORS error

    axios
        .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}&query="${searchTerm}"`
        )
        .then(res =>
            dispatch({
                type: SEARCH_FILM,
                payload: res.data.results,
            })
        );
};
