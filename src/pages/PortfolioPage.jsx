import ProjectDetailsPage from "../components/ProjectDetailsPage";
import portfolio from "../assets/portfolio.jpeg";
import portfolioAbout from "../assets/portfolio-about.jpeg";

const PortfolioPage = () => {
    const project = {
        title: "Portfolio Site",
        description: "A personal portfolio website showcasing frontend development projects, technical skills, and design approach. It emphasizes clean UI, responsiveness, and performance, providing a structured experience for potential clients and employers.",
impact: "Strengthens personal branding and improves how potential clients and recruiters perceive your work.",  
        images: [portfolio, portfolioAbout],
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        liveLink: "https://mister-kay-portfolio.vercel.app/"
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <ProjectDetailsPage project={project} />
        </div>
    );
};

export default PortfolioPage;