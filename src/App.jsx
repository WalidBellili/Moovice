import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Favorite from "./pages/Favorites";
import Popular from "./pages/Popular";
import Weekly from "./pages/Weekly";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";
import Movie from "./pages/Movie";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
