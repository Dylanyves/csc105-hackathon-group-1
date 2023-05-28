import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Neptune from "./pages/Neptune";
import Ocean from "./pages/Ocean";
import Sky from "./pages/Sky";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
