import ProjectDetailsPage from "../components/ProjectDetailsPage";
import prime from "../assets/prime.jpeg";
import primeShop from "../assets/prime-shop.jpeg";

const PrimePage = () => {
    const project = {
        title: "Prime",
        description: "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. It features a user-friendly interface, secure authentication, and seamless payment integration, providing users with a smooth shopping experience.",
        images: [prime, primeShop],
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
        liveLink: "https://prime-ecommerce.com",
        repoLink: "https://github.com/prime-ecommerce"
    };

    return (
        <ProjectDetailsPage project={project} />
    );
};

export default PrimePage;