import React from "react";
import { Nav, NavLink, NavMenu, Logo, NavContainer } from "./NavbarElements";
import logoImage from "../../assets/logo.png"; // Adjust the path as needed

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <img src={logoImage} alt="Logo" />
        </Logo>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
