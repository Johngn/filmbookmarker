import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import watchlistReducer from "./watchlistReducer";

export default combineReducers({
    films: homeReducer,
    watchlist: watchlistReducer,
});
