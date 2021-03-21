import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";

export default function Header() {
  return (
    <header id="header">
      <Link to="/">
        <h1 className="title">COMP-308 Assignment3 MERN full-stack</h1>
      </Link>
      <AuthOptions />
    </header>
  );
}
