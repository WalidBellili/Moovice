import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <Link to="/">
          <h1 className="h1">Moovice</h1>
        </Link>
      </div>
      <nav>
        <Link to="/popular">
          <li>Popular</li>
        </Link>
        <Link to="/weekly">
          <li>Weekly</li>
        </Link>
        <Link to="/favorites">
          <li>Favorites</li>
        </Link>
      </nav>
      <article className="mobilNav">
        <Link to="/popular">
          <li>Popular</li>
        </Link>
        <Link to="/weekly">
          <li>Weekly</li>
        </Link>
        <Link to="/favorites">
          <li>Favorites</li>
        </Link>
      </article>
    </header>
  );
};

export default Header;
