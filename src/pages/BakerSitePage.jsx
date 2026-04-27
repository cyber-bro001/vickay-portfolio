import ProjectDetailsPage from "../components/ProjectDetailsPage";

import bakerSite from "../assets/baker-site.jpeg";
import bakerSiteMenu from "../assets/baker-site-menu.jpeg";

const BakerSitePage = () => {
    const project = {
        title: "Butter & Bliss",
        description: "A cakes and treats ordering platform built for special occasions like weddings and birthdays. Users can browse products and place orders directly through the site, which are instantly sent to the baker via WhatsApp for quick and seamless communication.",
impact: "Reduces ordering friction and speeds up customer–vendor communication, leading to faster conversions.",
        images: [bakerSite, bakerSiteMenu],
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        liveLink: "https://baker-website-six.vercel.app/"
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <ProjectDetailsPage project={project} />
        </div>
    );
};

export default BakerSitePage;