import ProjectCard from "../components/ProjectCard";

import prime from "../assets/prime.jpeg";
import bakerSite from "../assets/baker-site.jpeg";
import agroTodate from "../assets/agro-todate.jpeg";
import griow from "../assets/griow.jpeg";
import farmProfitPal from "../assets/farm-profit-pal.jpeg";
import app from "../assets/app.png";
import portfolio from "../assets/portfolio.jpeg";

const WorkPage = () => {
  const images = [{ name: "Prime", img: prime, description: "Luxury fragrance store delivering a premium experience where every scent tells a story.", link: "/projects/prime" }, { name: "Butter & Bliss", img: bakerSite, description: "Cakes and treats platform for weddings, birthdays, and special occasions.", link: "/projects/baker-site" }, { name: "Agro Todate", img: agroTodate, description: "Real-time agriculture updates with useful farming tips and insights.", link: "/projects/agro-todate" }, { name: "Griow", img: griow, description: "Simple farming guides and resources for better agricultural practices.", link: "/projects/griow" }, { name: "Farm Profit Pal", img: farmProfitPal, description: "A farm management tool that helps farmers track expenses, calculate profits, and gain clear insights into whether their operations are yielding gains or losses.", link: "/projects/farm-profit-pal" }, { name: "App", img: app, description: "A goal-tracking application built to help users set clear objectives, monitor their progress over time, and stay consistent in achieving personal or professional milestones.", link: "/projects/app" }, { name: "Portfolio", img: portfolio, description: "A modern portfolio website for a frontend web developer, showcasing projects, technical skills, and a strong focus on clean design, usability, and performance.", link: "/projects/portfolio" }];

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-xl md:text-3xl font-bold mb-8 text-primaryText text-heading text-center mt-10 md:mt-20">Some Of The Projects I’ve Built And Shipped.</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {
          images.map((img, i) => (
            <ProjectCard key={i} project={{ image: img.img, title: img.name, description: img.description, link: img.link }} />
          ))
        }
      </div>
    </div>
  );
};

export default WorkPage;    