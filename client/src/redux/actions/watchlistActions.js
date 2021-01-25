import {
    ADD_FILM,
    WATCHLIST_LOADING,
    GET_WATCHLIST,
    DELETE_FILM,
    SET_ALERT,
    REMOVE_ALERT,
} from "./types";
import axios from "axios";
import { v4 as uuid } from "uuid";

export const setWatchlistLoading = () => {
    return {
        type: WATCHLIST_LOADING,
    };
};

export const setAlert = (msg, alertType) => dispatch => {
    const id = uuid();

    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 3000);
};

export const addFilm = newFilm => dispatch => {
    dispatch(setWatchlistLoading());

    axios
        .post("/api/films", newFilm)
        .then(
            () =>
                dispatch({
                    type: ADD_FILM,
                }),
            dispatch(setAlert("Film added to watchlist", "success"))
        )
        .catch(err => console.log(err));
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

export const deleteWatchlistFilm = filmId => dispatch => {
    dispatch(setWatchlistLoading());

    axios.delete(`/api/films/${filmId}`).then(
        res =>
            dispatch({
                type: DELETE_FILM,
                payload: filmId,
            }),
        dispatch(setAlert("Film removed from watchlist", "success"))
    );
};
