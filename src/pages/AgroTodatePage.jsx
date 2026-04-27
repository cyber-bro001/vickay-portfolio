import ProjectDetailsPage from "../components/ProjectDetailsPage";
import agroTodate from "../assets/agro-todate.jpeg";
import agroTodateSearch from "../assets/agro-todate-search.jpeg";

const AgroTodatePage = () => {
    const project = {
        title: "Agro Todate",
        description: "An agriculture update platform that provides farmers with real-time access to relevant news, insights, and practical tips. It helps users stay informed and make smarter farming decisions through timely and useful content.",
impact: "Empowers farmers with up-to-date knowledge, improving awareness and day-to-day decision-making.",
        images: [agroTodate, agroTodateSearch],
        technologies: ["React", "Tailwindcss", "JavaScript"],
        liveLink: "https://agro-todate.vercel.app/"
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <ProjectDetailsPage project={project} />
        </div>
    );
};

export default AgroTodatePage;  