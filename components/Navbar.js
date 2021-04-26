import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/musician-form">Musician Form</Link>
      <Link href="/band-form">Band Form</Link>
      <Link href="/musicians">Musicians</Link>
    </nav>
  );
};

export default Navbar;
