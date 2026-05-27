import ProjectDetailsPage from "../components/ProjectDetailsPage";
import farmProfitPal from "../assets/farm-profit-pal.jpeg";

const FarmProfitPalPage = () => {
    const project = {
        title: "Farm Profit Pal",
        description: "Farm Profit Pal is a comprehensive farm management software designed to help farmers optimize their operations and maximize profitability. It offers a range of features including farm operations insight, checks profits or loss and provides actionable insights for better decision-making.",
        images: [farmProfitPal],
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        liveLink: "https://farm-profit-pal.vercel.app/"
        liveLink: "https://farm-profit-pal.vercel.app/"
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <ProjectDetailsPage project={project} />
        </div>
    );
};

export default FarmProfitPalPage;   