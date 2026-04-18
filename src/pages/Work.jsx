import { NavLink } from "react-router-dom";
import projectImg from "../assets/hero.png";
import ProjectCard from "../components/ProjectCard";
import { ChevronRight } from "lucide-react";

const Work = () => {
    return (
        <div className="container mx-auto px-7 md:px-15 py-20">
            <h1 className="text-xl text-center md:text-3xl font-bold mb-14 text-primaryText text-heading">Some Of The Projects I’ve Built And Shipped.</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    Array(4).fill(projectImg).map((img, i) => (
                        <ProjectCard key={i} project={{ image: img, title: `Project ${i + 1}`, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }} />
                    ))
                }
            </div>
            <div className="flex justify-center mt-10">
                <NavLink to="/work" className="text-base inline-block px-6 py-3 bg-accentColor hover:bg-accentHover text-primaryText rounded-xl hover:scale-105 transition-colors duration-300 gap-1">
                    View All
                    <ChevronRight className="inline-block ml-1" size={16} />
                </NavLink>
            </div>
        </div>
    );
};

export default Work;