import Hero from "./Hero";
import WorkShowcase from "../components/WorkShowcase";
import About from "./About";

const Home = () => {

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Hero />
            <WorkShowcase />
            <About />
        </div>
    );
};

export default Home;