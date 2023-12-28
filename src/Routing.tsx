import { BrowserRouter , Route, Routes  } from "react-router-dom";

import Home from "./containers/Home";
import Catalog from "./containers/Catalog";


function Routing() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
            </Routes>
        </BrowserRouter>
    )
};


export default Routing;