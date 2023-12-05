import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux';
import { searchAction } from "./store/SearchSlice";

import { Nav, NavDropdown,Navbar,Container,Form,Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const NavBar = () => {

  const [searchQuery , setSearchQuery]= useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {
   dispatch(searchAction(searchQuery));   // use redux approach
    console.log("hitted", searchQuery);
    setSearchQuery("");
  }

  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/home">My Shopping App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/mens">Link</Nav.Link>
            <NavDropdown title="Others" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/jeans">Jeans</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Kurtis">
                Kurtis
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/trousers">
                Trousers
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/kids">
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>(setSearchQuery(e.target.value))}
            />
            <Button variant="outline-success" onClick={handleSearch}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  );
};

export default NavBar;
