import ProjectDetailsPage from "../components/ProjectDetailsPage";
import griow from "../assets/griow.jpeg";
import griowArticle from "../assets/griow-article.jpeg";

const GriowPage = () => {
    const project = {
        title: "Griow",
        description: "A farming resource hub created to simplify agriculture for both beginners and experienced farmers. It offers structured guides and actionable tips that break down complex farming practices into clear, easy-to-follow steps.",
impact: "Makes agricultural knowledge more accessible, reducing the learning curve for new and growing farmers.",
        images: [griow, griowArticle],
        technologies: ["React", "Tailwindcss", "JavaScript", "Node.js", "MongoDB", "Express"],
        liveLink: "https://griow.vercel.app/"
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <ProjectDetailsPage project={project} />
        </div>
    );
};

export default GriowPage;