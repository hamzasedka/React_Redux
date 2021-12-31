import { combineReducers } from "redux";
import moviesReducer from "./MoviesReducer"
const rootReducer = combineReducers({
    moviesData:moviesReducer,
});
export default rootReducer;