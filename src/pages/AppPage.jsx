import ProjectDetailsPage from "../components/ProjectDetailsPage";
import app from "../assets/app.png";
import appModal from "../assets/app-modal.png";

const AppPage = () => {
    const project = {
        title: "App",
        description: "A modern web application built with React and Node.js.",
        images: [app, appModal],
technologies: ["React", "Firebase", "Tailwind CSS"],
liveLink: "https://app.com",
repoLink: "https://github.com/user/app"
    };

    return (
        <ProjectDetailsPage project={project} />
    );
};

export default AppPage;