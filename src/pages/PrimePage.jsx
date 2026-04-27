import ProjectDetailsPage from "../components/ProjectDetailsPage";
import prime from "../assets/prime.jpeg";
import primeShop from "../assets/prime-shop.jpeg";

const PrimePage = () => {
    const project = {
        title: "Prime",
        description: "A luxury fragrance e-commerce platform designed to deliver a premium digital shopping experience. Users can explore a curated collection of scents, each telling a unique story, with a focus on elegant UI, smooth navigation, and a refined brand feel.",
impact: "Enhances product perception and improves user engagement through a visually rich, high-end interface.",
        images: [prime, primeShop],
        technologies: ["React", "Tailwindcss", "JavaScript"],
        liveLink: "https://prime-ruby.vercel.app/"
    };

    return (
        <ProjectDetailsPage project={project} />
    );
};

export default PrimePage;