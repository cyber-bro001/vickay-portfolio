import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { ChevronRight } from "lucide-react";

import prime from "../assets/prime.jpeg";
import bakerSite from "../assets/baker-site.jpeg";
import agroTodate from "../assets/agro-todate.jpeg";
import griow from "../assets/griow.jpeg";

const Work = () => {
    const images = [{ name: "Prime", img: prime, description: "Luxury fragrance store delivering a premium experience where every scent tells a story.", link: "/projects/prime" }, { name: "Butter & Bliss", img: bakerSite, description: "Cakes and treats platform for weddings, birthdays, and special occasions.", link: "/projects/baker-site" }, { name: "Agro Todate", img: agroTodate, description: "Real-time agriculture updates with useful farming tips and insights.", link: "/projects/agro-todate" }, { name: "Griow", img: griow, description: "Simple farming guides and resources for better agricultural practices.", link: "/projects/griow" }];

    return (
        <div className="container mx-auto px-7 md:px-15 py-20">
            <h1 className="text-xl text-center md:text-3xl font-bold mb-14 text-primaryText text-heading">Some Of The Projects I’ve Built And Shipped.</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    images.map((img, i) => (
                        <ProjectCard key={i} project={{ image: img.img, title: img.name, description: img.description, link: img.link }} />
                    ))
                }
            </div>
            <div className="flex justify-center mt-10">
                <Link to="/projects" className="text-base inline-block px-6 py-3 bg-accentColor hover:bg-accentHover text-primaryText rounded-xl hover:scale-105 transition-colors duration-300 gap-1">
                    View All
                    <ChevronRight className="inline-block ml-1" size={16} />
                </Link>
            </div>
        </div>
    );
};

export default Work;