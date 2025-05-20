import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-950 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-red-500">
          Moovice
        </Link>
        <nav className="flex gap-6 text-sm sm:text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-400 font-semibold" : "hover:text-red-300"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/popular"
            className={({ isActive }) =>
              isActive ? "text-red-400 font-semibold" : "hover:text-red-300"
            }
          >
            Populaires
          </NavLink>

          <NavLink
            to="/weekly"
            className={({ isActive }) =>
              isActive ? "text-red-400 font-semibold" : "hover:text-red-300"
            }
          >
            Tendances
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "text-red-400 font-semibold" : "hover:text-red-300"
            }
          >
            Favoris
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
