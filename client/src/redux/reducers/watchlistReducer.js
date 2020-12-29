import { ADD_FILM } from "../actions/types";

const initialState = {
    loading: false,
    films: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_FILM:
            return {
                ...state,
                films: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
