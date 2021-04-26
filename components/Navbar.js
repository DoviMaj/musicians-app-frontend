import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
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

const Nav_bar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar
      style={{ backgroundColor: "#eee8e8 !important" }}
      className={styles.navbar}
      color="light"
      light
      expand="md"
    >
      <Link href="/" passHref>
        <NavbarBrand>Home</NavbarBrand>
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem></NavItem>
          <NavItem>
            <Link href="/musician-form" passHref>
              <NavLink>Register Musician</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/band-form" passHref>
              <NavLink>Register Band</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/musicians" passHref>
              <NavLink>Musicians</NavLink>
            </Link>
          </NavItem>
        </Nav>
        <NavbarText>Musicians App</NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default Nav_bar;
