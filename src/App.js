import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Weekly from "./pages/Weekly";
import Popular from "./pages/Popular";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
// import Cards from "./pages/Cards";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/weekly"}>Weekly</Link>
              </li>
              <li>
                <Link to={"/popular"}>Popular</Link>
              </li>
              <li>
                <Link to={"/favorites"}>Favorites</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
