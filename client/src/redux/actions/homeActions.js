import { DEFAULT_FILMS, SEARCH_FILM, HOME_LOADING } from "./types";
import axios from "axios";

export const setHomeLoading = () => {
    return {
        type: HOME_LOADING,
    };
};

export const getDefaultFilms = () => dispatch => {
    dispatch(setHomeLoading());

    axios
        .get(
            "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0b94b1025e86742975b86c5a81513b54"
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

    axios
        .get(
            `https://api.themoviedb.org/3/search/movie?api_key=0b94b1025e86742975b86c5a81513b54&query="${searchTerm}"`
        )
        .then(res =>
            dispatch({
                type: SEARCH_FILM,
                payload: res.data.results,
            })
        );
};
