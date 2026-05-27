import { SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiFigma, SiFramer, SiGit, SiFirebase, SiNodedotjs, SiMongodb } from "react-icons/si"
import { FaCss3 } from "react-icons/fa";

const Skills = () => {
    const skills = [
        { icon: SiHtml5 },
        { icon: FaCss3 },
        { icon: SiJavascript },
        { icon: SiReact },
        { icon: SiTailwindcss },
        { icon: SiFigma },
        { icon: SiFramer },
        { icon: SiGit },
        { icon: SiFirebase },
        { icon: SiNodedotjs },
        { icon: SiMongodb }
    ];

    const scrollSkills = [...skills, ...skills];

    return (
        <div className="relative w-80 left-1/2 -translate-x-1/2 overflow-hidden py-10">

            {/* Gradient masks */}
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-backgroundColor to-transparent z-10" />
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-backgroundColor to-transparent z-10" />

            <div className="flex w-max gap-8 animate-scroll">
                {scrollSkills.map((skill, index) => {
                    const Icon = skill.icon;

                    return (
                        <div
                            key={index}
                            className="flex-shrink-0 rounded-2xl bg-cardBg p-2 border border-accentSoft"
                        >
                            <Icon className="text-4xl" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;