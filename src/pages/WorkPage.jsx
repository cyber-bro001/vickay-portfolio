import ProjectCard from "../components/ProjectCard";

import prime from "../assets/prime.jpeg";
import bakerSite from "../assets/baker-site.jpeg";
import agroTodate from "../assets/agro-todate.jpeg";
import griow from "../assets/griow.jpeg";
import farmProfitPal from "../assets/farm-profit-pal.jpeg";
import app from "../assets/app.png";
import portfolio from "../assets/portfolio.jpeg";

const WorkPage = () => {
  const images = [{ name: "Prime", img: prime, link: "/projects/prime" }, { name: "Baker Site", img: bakerSite, link: "/projects/baker-site" }, { name: "Agro Todate", img: agroTodate, link: "/projects/agro-todate" }, { name: "Griow", img: griow, link: "/projects/griow" }, { name: "Farm Profit Pal", img: farmProfitPal, link: "/projects/farm-profit-pal" }, { name: "App", img: app, link: "/projects/app" }, { name: "Portfolio", img: portfolio, link: "/projects/portfolio" }];

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-xl md:text-3xl font-bold mb-8 text-primaryText text-heading text-center mt-10 md:mt-20">Some Of The Projects I’ve Built And Shipped.</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {
          images.map((img, i) => (
            <ProjectCard key={i} project={{ image: img.img, title: img.name, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", link: img.link }} />
          ))
        }
      </div>
    </div>
  );
};

export default WorkPage;    