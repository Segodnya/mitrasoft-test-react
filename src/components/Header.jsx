import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../assets/2023-06-04 12.51.52.jpg";

function Header() {
  return (
    <Navbar bg="light" expand="lg" style={{ gap: "10px" }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{ gap: "10px" }}>
        <NavDropdown title={<UserAvatar />} id="basic-nav-dropdown">
          <NavDropdown.Item>Кирилл Куренцов</NavDropdown.Item>
          <NavDropdown.Item>kurentsov.k@gmail.com</NavDropdown.Item>
        </NavDropdown>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/mitrasoft-test-react">
            Posts
          </Nav.Link>
          <Nav.Link as={Link} to="/mitrasoft-test-react/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand as={Link} to="/mitrasoft-test-react">
        Посты и комментарии
      </Navbar.Brand>
    </Navbar>
  );
}

function UserAvatar() {
  return (
    <img
      src={avatar}
      style={{ width: "48px", height: "48px", borderRadius: "50%" }}
      alt="User Avatar"
    />
  );
}

export default Header;
