import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from "./types";
import { setAlert } from "./watchlistActions";
import axios from "axios";

export const registerUser = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post("/api/users", body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "failure")));
        }

        dispatch({
            type: REGISTER_FAIL,
        });
    }
};

export const loginUser = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post("/api/auth", body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
        });
    }
};
