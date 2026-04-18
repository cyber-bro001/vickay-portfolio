import heroImg from '../assets/kay.jpg';

const Hero = () => {
    return (
        <section className="py-20 px-7 md:px-32 flex flex-col items-start">
            <div className="w-20 rounded-full overflow-hidden mb-6 md:mb-4 mt-5 md:mt-10">
                <img src={heroImg} alt="Hero" className="w-full h-auto rounded-lg shadow-lg" />
            </div>

            <div className="md:w-1/2 mb-8 md:mb-5">
                <h1 className="text-2xl md:text-4xl font-bold font-heading mb-4 leading-tight">Hey, I'm Vickay. <br />Web Developer</h1>
                <p className="text-sm md:text-base leading-tight">I build fast, usable web applications <br /> that support real business needs.</p>
            </div>
        </section>
    );
};

export default Hero;