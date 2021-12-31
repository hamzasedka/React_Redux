import {
  DISLIKE_MOVIE_SUCCESS,
  LIKE_MOVIE_SUCCESS,
  REMOVE_DISLIKE_MOVIE_SUCCESS,
  REMOVE_LIKE_MOVIE_SUCCESS,
} from "../types";

export const likeMoviesSuccess = (data) => {
  return {
    type: LIKE_MOVIE_SUCCESS,
    payload: data,
  };
};
export const dislikeMoviesSuccess = (data) => {
  return {
    type: DISLIKE_MOVIE_SUCCESS,
    payload: data,
  };
};

export const removedislikeMoviesSuccess = (data) => {
  return {
    type: REMOVE_DISLIKE_MOVIE_SUCCESS,
    payload: data,
  };
};

export const removelikeMoviesSuccess = (data) => {
  return {
    type: REMOVE_LIKE_MOVIE_SUCCESS,
    payload: data,
  };
};
