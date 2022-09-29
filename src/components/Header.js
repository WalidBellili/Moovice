import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="">
      <div className="navLeft">
        <Link to="/">
          <h1>MOOVICE</h1>
        </Link>
      </div>
      <div className="navRight">
        <Link to="/popular">Popular</Link>
        <Link to="/weekly">Weekly</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
   
  );
};

export default Header;
