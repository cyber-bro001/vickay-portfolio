import ProjectCard from "../components/ProjectCard";

import prime from "../assets/prime.jpeg";
import bakerSite from "../assets/baker-site.jpeg";
import agroTodate from "../assets/agro-todate.jpeg";
import griow from "../assets/griow.jpeg";
import farmProfitPal from "../assets/farm-profit-pal.jpeg";
import appLp from "../assets/vrenly-v1-lp.jpeg";
import portfolio from "../assets/portfolio.jpeg";

const WorkPage = () => {
  const images = [
    { name: "Vrenly v1", img: appLp, link: "/projects/app", description: "Vrenly v1 Is a productivity app that helps users set goal, track them and achieve their goals. It's simple and intiutive user interface gives them an overall good user experience." },
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
    {
      name: "Farm Profit Pal",
      img: farmProfitPal,
      link: "/projects/farm-profit-pal",
      description: "Farm Profit Pal is a comprehensive farm management software designed to help farmers optimize their operations and maximize profitability. It offers a range of features including farm operations insight, checks profits or loss and provides actionable insights for better decision-making.",
    },
    {
      name: "Prime",
      img: prime,
      link: "/projects/prime",
      description: "A comprehensive luxry fragrance store. It's sleek providing users with a smooth shopping experience."
    },
    {
      name: "Baker Site",
      img: bakerSite,
      link: "/projects/baker-site",
      description:
        "A modern bakery website built with React and Tailwind CSS. It features a visually appealing design, showcasing the bakery's products and services, along with an easy-to-navigate interface for customers.",
    },
    {
      name: "Portfolio",
      img: portfolio,
      link: "/projects/portfolio",
      description:
        "This portfolio website is a showcase of my work and skills as a web developer. Built with React and Tailwind CSS, it features a clean and modern design that highlights my projects, experience, and contact information. The site is fully responsive, ensuring a seamless experience across all devices.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-xl md:text-3xl font-bold mb-8 text-primaryText text-heading text-center mt-10 md:mt-20">
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
    </div>
  );
};

export default WorkPage;
