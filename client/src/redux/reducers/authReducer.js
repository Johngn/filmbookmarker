import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
