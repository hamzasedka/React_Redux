import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Filter({ movies, callback }) {
  /*remove  */
  const duplicateCheck = [];
  movies &&
    movies
      .map((movie, index) => {
        if (duplicateCheck.includes(movie.category)) return null;
        duplicateCheck.push(movie.category);
        return movie;
      })
      .filter((e) => e);

  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">React-Redux</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Category"
              menuVariant="dark"
            >
              {duplicateCheck.map((category) => (
                <NavDropdown.Item
                  onClick={(event) => {
                    callback(event.target.innerText);
                  }}
                  key={category}
                >
                  {category}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Filter;
