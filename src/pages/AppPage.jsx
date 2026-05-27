import ProjectDetailsPage from "../components/ProjectDetailsPage";
import app from "../assets/vrenly-v1-lp.jpeg";
import appModal from "../assets/vrenly-v1-lpa.jpeg";

const AppPage = () => {
    const project = {
        title: "Vrenly v1",
        description: "Vrenly v1 Is a productivity app that helps users set goal, track them and achieve their goals. It's simple and intiutive user interface gives them an overall good user experience.",
        images: [app, appModal],
        technologies: ["React", "Tailwindcss", "Firebase", "Firestore"],
        liveLink: "https://vrenly.vercel.app/"
    };

    return (
        <ProjectDetailsPage project={project} />
    );
};

export default AppPage;