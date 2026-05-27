import ProjectDetailsPage from "../components/ProjectDetailsPage";
import prime from "../assets/prime.jpeg";
import primeShop from "../assets/prime-shop.jpeg";

const PrimePage = () => {
    const project = {
        title: "Prime",
        description: "A comprehensive luxry fragrance store. It's sleek providing users with a smooth shopping experience.",
        images: [prime, primeShop],
        technologies: ["React", "Javascript", "Tailwindcss"],
        liveLink: "https://prime-ruby.vercel.app/"
    };

    return (
        <ProjectDetailsPage project={project} />
    );
};

export default PrimePage;