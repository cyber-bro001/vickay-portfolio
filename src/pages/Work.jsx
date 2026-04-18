import { NavLink } from "react-router-dom";
import projectImg from "../assets/hero.png";

const Work = () => {
    return (
        <div className="container mx-auto px-4 py-20 max-w-4xl">
            <h1 className="text-xl md:text-3xl font-bold mb-6 text-primaryText text-heading">Work</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {
                Array(4).fill(projectImg).map((img, i) => (
                    <div key={i} className="mb-10 rounded-lg overflow-hidden shadow-lg">
                        <img src={img} alt={`Project ${i + 1}`} className="w-full h-64 object-cover" />
                        <div className="p-6 bg-cardBg">
                            <h2 className="text-lg font-bold mb-2">Project {i + 1}</h2>
                            <p className="text-sm text-mutedText">A brief description of the project and its features.</p>
                        </div>
                    </div>
                ))
            }
            </div>
            <NavLink to="/work" className="inline-block mt-4 px-6 py-2 bg-primaryText text-white rounded-lg hover:bg-primaryTextHover transition-colors duration-300">
                View All Projects
            </NavLink>
        </div>
    );
};

export default Work;