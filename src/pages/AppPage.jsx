import ProjectDetailsPage from "../components/ProjectDetailsPage";
import app from "../assets/app.png";
import appModal from "../assets/app-modal.png";

const AppPage = () => {
    const project = {
        title: "App",
        description: "A goal-tracking application designed to help users stay consistent and accountable. It enables users to set clear objectives, monitor progress over time, and stay focused through a simple and intuitive interface.",
impact: "Encourages consistency and improves users’ ability to achieve personal and professional goals.",
        images: [app, appModal],
technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
liveLink: "https://evia-six.vercel.app/"
    };

    return (
        <ProjectDetailsPage project={project} />
    );
};

export default AppPage;