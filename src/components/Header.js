import { Link } from "react-router-dom";

const DesktopHeader = () => {
  return (
    <header className="header">
      <div className="title">
        <Link to="/">
          <h1 className="h1">Moovice</h1>
        </Link>
      </div>
      <nav className="nav">
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
    </header>
  );
};

export default DesktopHeader;
