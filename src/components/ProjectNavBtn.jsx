import { ArrowUpRightFromSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const projectRoutes = [
    "/projects/app",
    "/projects/agro-todate",
    "/projects/griow",
    "/projects/farm-profit-pal",
    "/projects/prime",
    "/projects/baker-site",
    "/projects/portfolio",
];

const ProjectNavBtn = ({ liveLink }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const currentIndex = projectRoutes.indexOf(location.pathname);
    const prevPath = currentIndex > 0 ? projectRoutes[currentIndex - 1] : null;
    const nextPath = currentIndex >= 0 && currentIndex < projectRoutes.length - 1 ? projectRoutes[currentIndex + 1] : null;

    return (
        <div className="mt-12 md:mt-16 flex flex-col text-center md:flex-row md:justify-between gap-4">
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-base inline-block px-6 py-3 bg-accentSoft hover:bg-accentSubtle text-primaryText rounded-xl hover:scale-105 transition-colors duration-300">
                <span className="inline-flex items-center gap-1">
                    View Live
                    <ArrowUpRightFromSquare size={16} />
                </span>
            </a>

            <div className="flex gap-4">
                <button
                    onClick={() => prevPath && navigate(prevPath)}
                    disabled={!prevPath}
                    className="text-base inline-block px-6 py-3 bg-accentSoft hover:bg-accentSubtle text-primaryText rounded-xl hover:scale-105 transition-colors duration-300 flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft size={16} />
                    Previous
                </button>
                <button
                    onClick={() => nextPath && navigate(nextPath)}
                    disabled={!nextPath}
                    className="text-base inline-block px-6 py-3 bg-accentSoft hover:bg-accentSubtle text-primaryText rounded-xl hover:scale-105 transition-colors duration-300 flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default ProjectNavBtn;