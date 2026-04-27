import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import WorkPage from "./pages/WorkPage";
import Footer from "./components/Footer";
import PrimePage from "./pages/PrimePage";
import BakerSite from "./pages/BakerSitePage";
import BakerSitePage from "./pages/BakerSitePage";
import AgroTodatePage from "./pages/AgroTodatePage";
import GriowPage from "./pages/GriowPage";
import FarmProfitPalPage from "./pages/FarmProfitPalPage";
import AppPage from "./pages/AppPage";
import PortfolioPage from "./pages/PortfolioPage";

const App = () => {

    return (
        <Router>
            <div className="max-w-4xl md:border-x border-accentSoft mx-auto">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<h1>Blog</h1>} />
                    <Route path="/projects" element={<WorkPage />} />
                    <Route path="/projects/prime" element={<PrimePage />} />
                    <Route path="/projects/baker-site" element={<BakerSitePage />} />
                    <Route path="/projects/agro-todate" element={<AgroTodatePage />} />
                    <Route path="/projects/griow" element={<GriowPage />} />
                    <Route path="/projects/farm-profit-pal" element={<FarmProfitPalPage />} />
                    <Route path="/projects/app" element={<AppPage />} />
                    <Route path="/projects/portfolio" element={<PortfolioPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;