import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";


const ProjectCard = ({ project }) => {
    return (
        <div className="mb-10 p-4 rounded-2xl overflow-hidden border border-accentSoft hover:bg-cardBgHover transition-colors duration-300">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-2xl" />
            <div className="p-6 bg-cardBg rounded-2xl">
                <h2 className="text-primaryText text-lg font-bold mb-2">{project.title}</h2>
                <p className="text-sm text-mutedText">{project.description}</p>
                <Link to={`/projects/${project.id}`} className="text-sm inline-block mt-4 px-6 py-3 bg-accentSubtle hover:bg-accentSoft text-primaryText rounded-lg hover:scale-105 transition-colors duration-300 gap-1">
                    View Project
                    <ChevronRight className="inline-block ml-1" size={16} />
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;