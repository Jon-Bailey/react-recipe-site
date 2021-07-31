import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li href="#">LOGO</li>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/about">
        <li >About</li>
        </Link>
        <Link  to="/recipes">
        <li>Recipes</li>
        </Link>
        </ul>
      <div className="navbar-signUp">
        <a>SIGN UP</a>
      </div>
      </nav>
  );
}