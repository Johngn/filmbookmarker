import { ADD_FILM, WATCHLIST_LOADING, GET_WATCHLIST } from "./types";
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

    axios.post("/api/films", newFilm).then(res =>
        dispatch({
            type: ADD_FILM,
            payload: res.data.results,
        })
    );
};
