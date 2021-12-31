import { Button, Col, NavDropdown, Row, Spinner } from "react-bootstrap";

import React, { useState } from "react";
import Movie from "./Movie";
import { useSelector } from "react-redux";
import Filter from "./Filter";
import { Pagination } from "antd";

function Movies() {
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [moviePerPage, setmoviePerPage] = useState(4);
  var movies = useSelector((MoviesState) => MoviesState.moviesData.movies);
  const isLoading = useSelector(
    (MoviesState) => MoviesState.moviesData.isLoading
  );
  const error = useSelector((MoviesState) => MoviesState.moviesData.error);
  ///////////////////////////////////////////////////////////////
  if (isLoading) {
    return (
      <Spinner
        className="bootstrapSpinner"
        animation="grow"
        role="status"
        size="md"
        variant="info"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error.message}
      </div>
    );
  }
  //////////////////////////////////////////////////////////////
  const callback = (searchTerm) => {
    setCategory(searchTerm);
  };
  const filterIt = (movies, category) => {
    let cat = category.toLowerCase();
    return movies.category.toLowerCase().includes(cat);
  };
  //////////////////////////////////////////////////////////////

  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <Button variant="primary">Précédent</Button>;
    }
    if (type === "next") {
      return <Button variant="primary">suivant</Button>;
    }
    return originalElement;
  };

  const indexofLastPage = page + moviePerPage;
  const indexofFirstPage = indexofLastPage - moviePerPage;
  const currentMovies = movies.slice(indexofFirstPage, indexofLastPage);

  const onShowSizeChange = (current, pageSize) => {
    setmoviePerPage(pageSize);
  };
  /////////////////////////////////////////////////////////////
  return (
    <>
      <Filter movies={movies} callback={callback} />
      <div className="row" style={{ margin: "2%" }}>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Row xs={1} md={3} className="g-5">
            {currentMovies
              .filter((movie) => filterIt(movie, category))
              .map((movie) => (
                <Col key={movie.id}>
                  <Movie movie={movie} />
                </Col>
              ))}
          </Row>

          <div
            style={{
              width: "100%",
              margin: "50px",
              textAlign: "center",
            }}
          >
            <Pagination
              onChange={(value) => setPage(value)}
              pageSize={moviePerPage}
              total={movies.length}
              current={page}
              itemRender={itemRender}
              onShowSizeChange={onShowSizeChange}
              showSizeChanger
              pageSizeOptions={["4", " 8", "12"]}
              responsive={true}
              showTotal={(total, range) => {}}
            />
          </div>
        </div>

        <div className="col-md-2"></div>
      </div>
    </>
  );
}

export default Movies;
