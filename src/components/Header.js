import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="title">
        <Link to="/">
          <h1>MOOVICE</h1>
        </Link>
      </div>
      <div className="link">
        <Link to="/popular">Popular</Link>
        <Link to="/weekly">Weekly</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
};

export default Header;
