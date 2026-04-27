import ProjectDetailsPage from "../components/ProjectDetailsPage";
import farmProfitPal from "../assets/farm-profit-pal.jpeg";
import farmProfitPalClip from "../assets/farm-profit-pal-clip.mp4";

const FarmProfitPalPage = () => {
    const project = {
        title: "Farm Profit Pal",
        description: "A farm profit management tool that calculates farmers’ inputs (expenses) and returns intelligent insights using AI. It provides profit analysis, actionable advice, and “what-if” scenarios to help farmers make better financial decisions.",
impact: "Helps farmers understand profitability clearly and explore smarter strategies to increase returns.",
        images: [farmProfitPal],
        videos: [farmProfitPalClip],
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        liveLink: "https://farm-profit-pal.vercel.app/"
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <ProjectDetailsPage project={project} />
        </div>
    );
};

export default FarmProfitPalPage;   