import ProjectDetailsPage from "../components/ProjectDetailsPage";
import agroTodate from "../assets/agro-todate.jpeg";
import agroTodateSearch from "../assets/agro-todate-search.jpeg";

const AgroTodatePage = () => {
    const project = {
        title: "Agro Todate",
        description: "Agro Todate is a comprehensive agricultural management platform designed to empower farmers with real-time data and insights. It offers features such as farming tips, weather forecasting, and market price tracking, helping farmers make informed decisions and optimize their agricultural practices.",
        images: [agroTodate, agroTodateSearch],
        technologies: ["React", "Tailwindcss", "Javascript"],
        liveLink: "https://agro-todate.vercel.app/"
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <ProjectDetailsPage project={project} />
        </div>
    );
};

export default AgroTodatePage;  