import { initState } from "../MoviesState";
import {
  DISLIKE_MOVIE_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_LOADING,
  FETCH_MOVIES_SUCCESS,
  LIKE_MOVIE_SUCCESS,
  REMOVE_DISLIKE_MOVIE_SUCCESS,
  REMOVE_LIKE_MOVIE_SUCCESS,
} from "../types";
const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return { ...state, movies: action.payload };
    case FETCH_MOVIES_LOADING:
      return { ...state, isLoading: action.payload };
    case FETCH_MOVIES_ERROR:
      return { ...state, error: action.payload };
    case LIKE_MOVIE_SUCCESS:
      state.movies.map((movie) => {
        if (movie.id === action.payload.id) {
          movie.likes += 1;
        }
      });
      return { ...state };
    case DISLIKE_MOVIE_SUCCESS:
      state.movies.map((movie) => {
        if (movie.id === action.payload.id) {
          movie.dislikes += 1;
        }
      });
      return { ...state };
    case REMOVE_LIKE_MOVIE_SUCCESS:
      state.movies.map((movie) => {
        if (movie.id === action.payload.id) {
          movie.likes -= 1;
        }
      });
      return { ...state };
    case REMOVE_DISLIKE_MOVIE_SUCCESS:
      state.movies.map((movie) => {
        if (movie.id === action.payload.id) {
          movie.dislikes -= 1;
        }
      });
      return { ...state };
    default:
      return state;
  }
};
export default moviesReducer;
