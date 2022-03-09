import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container,FormControl,Button,Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";

function NavbarPage() {
  return (
    <div>
      <Navbar  bg="dark" variant="dark"  expand="lg">
  <Container fluid>
      <LinkContainer to='/'>
    <Navbar.Brand href="#">Stocks</Navbar.Brand>
      </LinkContainer>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
          <LinkContainer to='/'> 
        <Nav.Link >Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/detail'> 
        <Nav.Link >Detail</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/add'> 
        <Nav.Link >Add Stocks</Nav.Link>
          </LinkContainer>
        
       
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}

export default NavbarPage;
