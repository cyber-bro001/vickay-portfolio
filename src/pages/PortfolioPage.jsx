import ProjectDetailsPage from "../components/ProjectDetailsPage";
import portfolio from "../assets/portfolio.jpeg";
import portfolioAbout from "../assets/portfolio-about.jpeg";

const PortfolioPage = () => {
    const project = {
        title: "Portfolio",
        description: "This portfolio website is a showcase of my work and skills as a web developer. Built with React and Tailwind CSS, it features a clean and modern design that highlights my projects, experience, and contact information. The site is fully responsive, ensuring a seamless experience across all devices.",  
        images: [portfolio, portfolioAbout],
        technologies: ["React", "Tailwind CSS", "Vite"],
        liveLink: "https://victor-portfolio.com",
        repoLink: "https://github.com/victor-portfolio"
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <ProjectDetailsPage project={project} />
        </div>
    );
};

export default PortfolioPage;