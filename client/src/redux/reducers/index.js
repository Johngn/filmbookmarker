import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import watchlistReducer from "./watchlistReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
    films: homeReducer,
    watchlist: watchlistReducer,
    alert: alertReducer,
});
