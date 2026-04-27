import ProjectDetailsPage from "../components/ProjectDetailsPage";

import bakerSite from "../assets/baker-site.jpeg";
import bakerSiteMenu from "../assets/baker-site-menu.jpeg";

const BakerSitePage = () => {
    const project = {
        title: "Baker Site",
        description: "A modern bakery website built with React and Tailwind CSS. It features a visually appealing design, showcasing the bakery's products and services, along with an easy-to-navigate interface for customers.",
        images: [bakerSite, bakerSiteMenu],
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        liveLink: "https://baker-site.com",
        repoLink: "https://github.com/baker-site"
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <ProjectDetailsPage project={project} />
        </div>
    );
};

export default BakerSitePage;