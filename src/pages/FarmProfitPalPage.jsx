import ProjectDetailsPage from "../components/ProjectDetailsPage";
import farmProfitPal from "../assets/farm-profit-pal.jpeg";
import farmProfitPalClip from "../assets/farm-profit-pal-clip.mp4";

const FarmProfitPalPage = () => {
    const project = {
        title: "Farm Profit Pal",
        description: "Farm Profit Pal is a comprehensive farm management software designed to help farmers optimize their operations and maximize profitability. It offers a range of features including crop planning, financial tracking, inventory management, and data analytics to provide actionable insights for better decision-making.",
        images: [farmProfitPal],
        videos: [farmProfitPalClip],
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        liveLink: "https://farm-profit-pal.com",
        repoLink: "https://github.com/farm-profit-pal"
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <ProjectDetailsPage project={project} />
        </div>
    );
};

export default FarmProfitPalPage;   