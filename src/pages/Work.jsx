import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { ChevronRight } from "lucide-react";

import prime from "../assets/prime.jpeg";
import appLp from "../assets/vrenly-v1-lp.jpeg";
import agroTodate from "../assets/agro-todate.jpeg";
import griow from "../assets/griow.jpeg";


import Skills from "../components/Skills";

const Work = () => {
  const images = [
    {
      name: "Vrenly v1",
      img: appLp,
      link: "/projects/app",
      description:
        "Vrenly v1 Is a productivity app that helps users set goal, track them and achieve their goals. It's simple and intiutive user interface gives them an overall good user experience.",
    },
    {
      name: "Agro Todate",
      img: agroTodate,
      link: "/projects/agro-todate",
      description: "Agro Todate is a comprehensive agricultural management platform designed to empower farmers with real-time data and insights. It offers features such as farming tips, weather forecasting, and market price tracking, helping farmers make informed decisions and optimize their agricultural practices.",
    },
    {
      name: "Griow",
      img: griow,
      link: "/projects/griow",
      description: "Griow is a platform that provides farmers, students and agri-enthusiasts with rich farming practices. It's the farmers first knowledge hub.",
    },
    { name: "Prime", img: prime, link: "/projects/prime", description: "A comprehensive luxry fragrance store. It's sleek providing users with a smooth shopping experience." }
  ];

  return (
    <div className="container mx-auto px-7 md:px-15 py-20">
      <Skills />

      <h1 className="text-xl text-center md:text-3xl font-bold mb-14 text-primaryText text-heading">
        Some Of The Projects I’ve Built And Shipped.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((img, i) => (
          <ProjectCard
            key={i}
            project={{
              image: img.img,
              title: img.name,
              description: img.description,
              link: img.link,
            }}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to="/projects"
          className="text-base inline-block px-6 py-3 bg-accentColor hover:bg-accentHover text-primaryText rounded-xl hover:scale-105 transition-colors duration-300 gap-1"
        >
          View All
          <ChevronRight className="inline-block ml-1" size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Work;
