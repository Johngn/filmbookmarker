import {
    ADD_FILM,
    WATCHLIST_LOADING,
    GET_WATCHLIST,
    DELETE_FILM,
} from "./types";
import axios from "axios";

export const setWatchlistLoading = () => {
    return {
        type: WATCHLIST_LOADING,
    };
};

export const getWatchlistFilms = () => dispatch => {
    dispatch(setWatchlistLoading());

    axios.get("/api/films").then(res =>
        dispatch({
            type: GET_WATCHLIST,
            payload: res.data,
        })
    );
};

export const addFilm = newFilm => dispatch => {
    dispatch(setWatchlistLoading());

    axios.post("/api/films", newFilm).then(() =>
        dispatch({
            type: ADD_FILM,
        })
    );
};

export const deleteWatchlistFilm = filmId => dispatch => {
    dispatch(setWatchlistLoading());

    axios.delete(`/api/films/${filmId}`).then(res =>
        dispatch({
            type: DELETE_FILM,
            payload: filmId,
        })
    );
};
