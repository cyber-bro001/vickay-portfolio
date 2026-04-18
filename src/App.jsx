import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import WorkPage from "./pages/WorkPage";
import Footer from "./components/Footer";

const App = () => {

    return (
        <Router>
            <div className="max-w-4xl md:border-x border-accentSoft mx-auto">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<h1>Blog</h1>} />
                    <Route path="/work" element={<WorkPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;