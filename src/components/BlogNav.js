import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarText } from 'reactstrap';

const BlogNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavLink to="/" className="navbar-brand">Simple Blog</NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/" className="nav-link">All posts</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Just a simple blog.</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default BlogNav;