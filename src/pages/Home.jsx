import Hero from "./Hero";
import WorkShowcase from "../components/WorkShowcase";
import About from "./About";
import Work from "./Work";

const Home = () => {

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Hero />
            <WorkShowcase />
            <About />
            <Work />
        </div>
    );
};

export default Home;