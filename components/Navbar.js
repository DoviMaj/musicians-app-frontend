import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
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
      <Nav navbar>
        <NavItem>
          <Link href="/" passHref>
            <NavLink>Home</NavLink>
          </Link>
        </NavItem>
      </Nav>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link href="/musician_form" passHref>
              <NavLink>Register Musician</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/band_form" passHref>
              <NavLink>Register Band</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/musicians" passHref>
              <NavLink>Musicians</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/bands" passHref>
              <NavLink>Bands</NavLink>
            </Link>
          </NavItem>
        </Nav>

        <Image src="/band.svg" width="50" height="50" />
      </Collapse>
    </Navbar>
  );
};

export default Nav_bar;
