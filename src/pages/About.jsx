import heroImg from '../assets/kay.jpg';

const About = () => {

    return (
        <section className="py-20 px-3 flex flex-col items-start">
            <div className="container mx-auto px-4 py-20 max-w-4xl">
                <h1 className="text-xl md:text-3xl font-bold mb-6 text-primaryText text-heading">About</h1>
                <p className="text-sm md:text-base leading-relaxed mb-4">I like building clean, scalable web applications with a strong focus on performance and user experience. For me, it’s really about solving problems—taking an idea and turning it into something simple, usable, and reliable.</p>
                <p className="text-sm md:text-base leading-relaxed mb-4">I’m a frontend developer based in Nigeria, working with modern web technologies to build responsive interfaces and solid user experiences. I pay attention to details and write code that’s clean, maintainable, and built to last. It’s not just about how it looks—it has to feel right and work smoothly.</p>
                <p className="text-sm md:text-base leading-relaxed">Right now, I’m focused on improving my skills and growing into more advanced areas of development. My goal is to build complete, production-ready products and keep getting better through real-world projects and hands-on experience.</p>
            </div>
            <div className="w-full overflow-hidden mb-6 md:mb-4 mt-5 md:mt-10 flex items-center">
                <img src={heroImg} alt="Hero" className="mx-auto  w-52 md:w-64 h-auto rounded-lg shadow-lg object-cover" />
            </div>
        </section>
    );
};

export default About;