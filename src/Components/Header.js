import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";

export default function Header() {
  return (
    <>
      <header id="home">
        <Navbar></Navbar>
        <Home></Home>
      </header>
    </>
  );
}
