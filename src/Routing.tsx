import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import Catalog from "./containers/Catalog";
import CarDetailContainer from "./containers/CarDetail";
import LoginContainer from "./containers/LoginContainer";
import SignUpContainer from "./containers/SignUpContainer";
import FavoritesContainer from "./containers/Favorites";
import ScrollToTop from "./components/ScrollToTop";

export default function Routing() {
  return (
    <BrowserRouter>
			<ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CarDetailContainer />} />
				<Route path="/login" element={<LoginContainer />} />
				<Route path="/signup" element={<SignUpContainer />} />
				<Route path="/favorites" element={<FavoritesContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
