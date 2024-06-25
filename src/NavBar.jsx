import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
} from "react-bootstrap";

  function NavBar( {navState} ) {
    
    const navItem = navState;
    return (
      <div>
        <div className="wrapper100" style={{ position: "absolute" }}>
          <Navbar expand="lg" className="pt-3 wrapper90" id="mainNav">
            <Container fluid className="alignCenter navv">
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Brand as={Link} to="/">
                {navItem.NavbarBrand}
              </Navbar.Brand>
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link>
                    <Link to="/home" className="nav-item">
                      {" "}
                      {navItem.collection}{" "}
                    </Link>
                  </Nav.Link>
                  <NavDropdown
                    title={navItem.category}
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item to="/">Action</NavDropdown.Item>
                    <NavDropdown.Item to="/">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item to="/">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link disabled>
                    <Link to="/" className="nav-item">
                      Go Pro
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Form className="d-flex alignCenter navform">
                <Form.Control
                  type="search"
                  placeholder="Search Artist..."
                  className="search py-2"
                  aria-label="Search Artist"
                />
                <Button variant="" className="mx-5 d-sm-non">
                  <Link
                    className="nav-item px-4 py-2 trans-btn auth"
                    to="/signin"
                  >
                    {navItem.signin}
                  </Link>
                </Button>
                <Button variant="" className="nav-item block-btn auth mmm">
                  <Link className="" to="/signup">
                    {navItem.signup}
                  </Link>
                </Button>
              </Form>
            </Container>
          </Navbar>{" "}
        </div>
      </div>
    );
  }

export default NavBar;
