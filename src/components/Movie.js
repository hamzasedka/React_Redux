import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  dislikeMoviesSuccess,
  likeMoviesSuccess,
  removedislikeMoviesSuccess,
  removelikeMoviesSuccess,
} from "../data/store/actions/LikeDislikeAction";
import { fetchMovies } from "../data/store/actions/MoviesAction";

function Movie({ movie }) {
  const [isDisliked, setisDisliked] = useState(false);
  const [isLiked, setisLiked] = useState(false);

  const dispatch = useDispatch();

  const toggleIsDisLiked = () => {
    dispatch(dislikeMoviesSuccess(movie));
    setisDisliked(!isDisliked);
    dispatch(fetchMovies());
  };
  const toggleIsDisLikedRemoved = () => {
    dispatch(removedislikeMoviesSuccess(movie));
    setisDisliked(!isDisliked);
    dispatch(fetchMovies());
  };

  const toggleIsLiked = () => {
    dispatch(likeMoviesSuccess(movie));
    setisLiked(!isLiked);
    dispatch(fetchMovies());
  };
  const toggleIsLikedRemoved = () => {
    dispatch(removelikeMoviesSuccess(movie));
    setisLiked(!isLiked);
    dispatch(fetchMovies());
  };

  return (
    <Card className="movie-card">
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.category}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          <button
            onClick={isDisliked ? toggleIsDisLiked : toggleIsDisLikedRemoved}
            className="Like_dislike"
          >
            {movie.dislikes > 1000 ? (
              <span> {movie.dislikes / 1000} K</span>
            ) : (
              <span> {movie.dislikes}</span>
            )}
            <AiFillDislike color="#FA383E" size={20} />
          </button>
          <button
            onClick={isLiked ? toggleIsLiked : toggleIsLikedRemoved}
            className="Like_dislike"
          >
            {movie.likes > 1000 ? (
              <span> {movie.likes / 1000} K</span>
            ) : (
              <span> {movie.likes}</span>
            )}

            <AiFillLike color="#385898" size={20} />
          </button>
        </small>
      </Card.Footer>
    </Card>
  );
}

export default Movie;
