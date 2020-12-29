import { ADD_FILM, WATCHLIST_LOADING } from "./types";
import axios from "axios";

export const setWatchlistLoading = () => {
    return {
        type: WATCHLIST_LOADING,
    };
};

export const addFilm = film => dispatch => {
    dispatch(setWatchlistLoading());

    axios.post("/api/films", film).then(res =>
        dispatch({
            type: ADD_FILM,
            payload: res.data.results,
        })
    );
};
