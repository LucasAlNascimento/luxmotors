import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import Catalog from "./containers/Catalog";

function Routing() {
    return(
        <Router>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
            </Routes>
        </Router>
    )
}

export default Routing;