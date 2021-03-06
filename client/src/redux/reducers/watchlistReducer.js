import { ADD_FILM, DELETE_FILM, GET_WATCHLIST } from "../actions/types";

const initialState = {
    loading: false,
    films: [],
};

export default function watchlistReducer(state = initialState, action) {
    switch (action.type) {
        case GET_WATCHLIST:
            return {
                ...state,
                films: action.payload,
                loading: false,
            };
        case ADD_FILM:
            return {
                ...state,
                loading: false,
            };
        case DELETE_FILM:
            return {
                ...state,
                films: state.films.filter(film => film._id !== action.payload),
                loading: false,
            };
        default:
            return state;
    }
}
