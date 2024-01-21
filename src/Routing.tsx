import { BrowserRouter , Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import Catalog from "./containers/Catalog";
import CarDetailVerification from "./components/CarDetailVerification";


function Routing() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:id" element={<CarDetailVerification/>}/>
            </Routes>
        </BrowserRouter>
    )
};


export default Routing;