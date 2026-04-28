import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import Catalog from "./containers/Catalog";
import CarDetailContainer from "./containers/CarDetail";
import LoginContainer from "./containers/LoginContainer";
import SignUpContainer from "./containers/SignUpContainer";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CarDetailContainer />} />
				<Route path="/login" element={<LoginContainer />} />
				<Route path="/signup" element={<SignUpContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
