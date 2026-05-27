import ProjectDetailsPage from "../components/ProjectDetailsPage";
import griow from "../assets/griow.jpeg";
import griowArticle from "../assets/griow-article.jpeg";

const GriowPage = () => {
    const project = {
        title: "Griow",
        description: "Griow is a platform that provides farmers, students and agri-enthusiasts with rich farming practices. It's the farmers first knowledge hub.",
        images: [griow, griowArticle],
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        liveLink: "https://griow.vercel.app/"
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <ProjectDetailsPage project={project} />
        </div>
    );
};

export default GriowPage;