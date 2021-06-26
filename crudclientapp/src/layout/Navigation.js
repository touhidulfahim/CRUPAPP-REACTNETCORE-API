import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="navbar navbar-expand-lg container-fluid"
        style={{ backgroundColor: "#47b8b8", color: "#fff" }}
      >
        <NavbarBrand href="/" className="text-light">
          CRUDAPP
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="text-light" />
        <Collapse className="text-light" isOpen={isOpen} navbar>
          <Nav className="mr-auto text-light" navbar>
            <NavItem>
              <Link to="/home" className="nav-link text-light active">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/employee" className="nav-link text-light">
                Employee
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
