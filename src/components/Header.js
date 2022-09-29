import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <nav className="navbar navbar-dark bg-dark">
    //   <div className="">
    //     <Link to="/">
    //       <h1>MOOVICE</h1>
    //     </Link>
    //   </div>
    //   <div className="">
    //     <Link to="/popular">Popular</Link>
    //     <Link to="/weekly">Weekly</Link>
    //     <Link to="/favorites">Favorites</Link>
    //   </div>
    // </nav>
    <nav className="nav justify-content-around align-items-center">
      <div className="">
        <Link to="/">
          <h1>MOOVICE</h1>
        </Link>
      </div>
      <Link to="/popular">Popular</Link>
      <Link to="/weekly">Weekly</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
};

export default Header;
