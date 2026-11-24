import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/login";
import Registration from "./pages/Registration";
import About from "./pages/About";
import Services from "./pages/Services";
import Insurance_Info from "./pages/Insurance_Info";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/insurance_info" element={<Insurance_Info />} />
        </Routes>
    );
}

export default App;