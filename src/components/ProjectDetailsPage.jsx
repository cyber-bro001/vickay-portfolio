import { ArrowUpRightFromSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


const ProjectDetailsPage = ({ project }) => {
    return (
        <div className="container mx-auto px-7 md:px-16 py-20 max-w-4xl">
            <h1 className="text-2xl md:text-4xl md:text-3xl font-bold mb-6 text-primaryText text-heading mt-10">{project.title}</h1>
            <div className="p-3 md:p-6 bg-cardBg rounded-lg border border-accentSoft">
   <span className="text-base md:text-lg font-bold mb-4 block">Description</span>
            <p className="text-sm md:text-base leading-relaxed mb-4">{project.description}</p>
   <span className="text-base md:text-lg font-bold mb-4 block">Impact: </span>
            <p className="text-sm md:text-base leading-relaxed mb-4">{project.impact}</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 mt-10 md:mt-16">
                {project.images.map((image, index) => (
                    <div key={index} className="rounded-lg shadow-md overflow-hidden w-58 h-58 md:h-79 flex-shrink-0 rounded-2xl bg-cardBg p-4 md:p-6 border border-accentSoft">   
                    <img src={image} alt={project.title} className="w-full h-auto rounded-lg shadow-2xl" />
                    </div>
                ))}
            </div>
            <div className="mt-16 md:mt-20">
                <h2 className="text-lg font-bold mb-4 text-primaryText">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-cardBg border border-accentSoft text-primaryText px-3 py-1 rounded-full text-sm">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="mt-12 md:mt-16 flex flex-col text-center md:flex-row md:justify-between gap-4">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-base inline-block px-6 py-3 bg-accentSoft hover:bg-accentSubtle text-primaryText rounded-xl hover:scale-105 transition-colors duration-300">
                    <span className="inline-flex items-center gap-1">
                        View Live
                        <ArrowUpRightFromSquare size={16} />
                    </span>
                </a>

                <div className="flex gap-4">
                    <button className="text-base inline-block px-6 py-3 bg-accentSoft hover:bg-accentSubtle text-primaryText rounded-xl hover:scale-105 transition-colors duration-300 flex items-center gap-1">
                        <ChevronLeft size={16} />
                        Previous
                    </button>
                    <button className="text-base inline-block px-6 py-3 bg-accentSoft hover:bg-accentSubtle text-primaryText rounded-xl hover:scale-105 transition-colors duration-300 flex items-center gap-1">
                        Next
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;