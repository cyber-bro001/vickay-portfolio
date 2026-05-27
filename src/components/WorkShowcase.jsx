import { Link } from "react-router-dom";

import prime from "../assets/prime.jpeg";
import appLp from "../assets/vrenly-v1-lp.jpeg";
import agroTodate from "../assets/agro-todate.jpeg";
import griow from "../assets/griow.jpeg";


const WorkShowcase = () => {
  const images = [
    { name: "App", img: appLp, link: "/projects/app" },
    { name: "Agro Todate", img: agroTodate, link: "/projects/agro-todate" },
    { name: "Griow", img: griow, link: "/projects/griow" },
    { name: "Prime", img: prime, link: "/projects/prime" }
  ];

  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-10">

      {/* Gradient masks 
      <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-backgroundColor to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-backgroundColor to-transparent z-10" />
      */}

      <div className="flex w-max gap-8 animate-scroll hover:[animation-play-state:paused]">
        {images.map((img, i) => (
          <div
            key={i}
            className="w-96 h-58 md:h-79 flex-shrink-0 rounded-2xl bg-cardBg p-4 border border-accentSoft"
          >
            <Link to={img.link}>
              <img
                src={img.img}
                alt="Work Showcase"
                className={`w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105 md:hover:scale-110`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkShowcase;