import { GET_FILMS, ADD_FILM, DELETE_FILM } from "../actions/types";

const initialState = {
    films: [
        { id: 1, title: "Test" },
        { id: 2, title: "Three" },
        { id: 3, title: "Four" },
    ],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FILMS:
            return {
                ...state,
            };
        default:
            return state;
    }
}
