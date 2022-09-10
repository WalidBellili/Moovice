import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Weekly from "./pages/Weekly";
import "./assets/styles/index.css";
import Movie from "./pages/Movie";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="popular" element={<Popular />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
