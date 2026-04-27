import ProjectDetailsPage from "../components/ProjectDetailsPage";
import griow from "../assets/griow.jpeg";
import griowArticle from "../assets/griow-article.jpeg";

const GriowPage = () => {
    const project = {
        title: "Griow",
        description: "Griow is a cutting-edge social media platform designed to foster meaningful connections and creative expression. Built with React and Node.js, it offers a unique blend of features including personalized feeds, real-time messaging, and multimedia sharing, creating an engaging and dynamic online community.",
        images: [griow, griowArticle],
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        liveLink: "https://griow.com",
        repoLink: "https://github.com/griow"
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <ProjectDetailsPage project={project} />
        </div>
    );
};

export default GriowPage;