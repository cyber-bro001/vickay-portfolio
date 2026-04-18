import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {

    return (
        <Router>
            <div className="max-w-4xl md:border-x border-accentSoft md:px-20 mx-auto">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<h1>Blog</h1>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;