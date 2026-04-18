import heroImg from '../assets/hero.png';

const WorkShowcase = () => {
  const images = Array(10).fill(heroImg);
  const duplicated = [...images, ...images];

  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-10">

      {/* Gradient masks */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-backgroundColor to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-backgroundColor to-transparent z-10" />

      <div className="flex w-max gap-8 animate-scroll hover:[animation-play-state:paused]">
        {duplicated.map((img, i) => (
          <div
            key={i}
            className="w-72 h-48 flex-shrink-0 rounded-2xl bg-cardBg"
          >
            <img
              src={img}
              alt="Work Showcase"
              className={`w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105 ${
                i % 2 === 0 ? "rotate-3" : "-rotate-3"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkShowcase;