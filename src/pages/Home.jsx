import Hero from "./Hero";
import WorkShowcase from "../components/WorkShowcase";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {

    return (
        <div className="container mx-auto py-8 max-w-4xl">
            <Hero />
            <WorkShowcase />
            <About />
            <Work />
            <Contact />
        </div>
    );
};

export default Home;