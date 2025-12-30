"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiGo,
    SiPython,
    SiPostgresql,
    SiMongodb,
    SiGit,
    SiDocker,
    SiNodedotjs,
    SiFigma,
    SiBootstrap,
    SiMysql,
    SiLinux,
    SiCplusplus,
    SiKotlin,
    SiPhp,
    SiFirebase,
    SiSupabase
} from "react-icons/si";
import { IconType } from "react-icons";

// Import JSON data
import educationData from "@/data/education.json";
import experienceData from "@/data/experience.json";
import skillsData from "@/data/skills.json";

// Icon mapping
const iconMap: Record<string, IconType> = {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiGo,
    SiPython,
    SiPostgresql,
    SiMongodb,
    SiGit,
    SiDocker,
    SiNodedotjs,
    SiFigma,
    SiBootstrap,
    SiMysql,
    SiLinux,
    SiCplusplus,
    SiKotlin,
    SiPhp,
    SiFirebase,
    SiSupabase,
};

// Get display name from icon name
const getDisplayName = (iconName: string): string => {
    const nameMap: Record<string, string> = {
        SiReact: "React",
        SiNextdotjs: "Next.js",
        SiTypescript: "TypeScript",
        SiJavascript: "JavaScript",
        SiHtml5: "HTML5",
        SiCss3: "CSS3",
        SiTailwindcss: "Tailwind",
        SiGo: "Go",
        SiPython: "Python",
        SiPostgresql: "PostgreSQL",
        SiMongodb: "MongoDB",
        SiGit: "Git",
        SiDocker: "Docker",
        SiNodedotjs: "Node.js",
        SiFigma: "Figma",
        SiBootstrap: "Bootstrap",
        SiMysql: "MySQL",
        SiLinux: "Linux",
        SiCplusplus: "C++",
        SiKotlin: "Kotlin",
        SiPhp: "PHP",
        SiFirebase: "Firebase",
        SiSupabase: "Supabase",
    };
    return nameMap[iconName] || iconName;
};

// Minimum skills for animation (if below this, show static)
const MIN_SKILLS_FOR_ANIMATION = 6;

// Skill rows configuration
const skillRows = [
    { title: "Frontend", key: "frontend" as keyof typeof skillsData, direction: "left" },
    { title: "Backend", key: "backend" as keyof typeof skillsData, direction: "right" },
    { title: "Tools", key: "tools" as keyof typeof skillsData, direction: "left" },
];

export default function About() {
    const { ref: titleRef, isInView: titleInView } = useInView(0.3);
    const { ref: profileRef, isInView: profileInView } = useInView(0.2);
    const { ref: whoAmIRef, isInView: whoAmIInView } = useInView(0.2);
    const { ref: whatIDoRef, isInView: whatIDoInView } = useInView(0.2);
    const { ref: educationRef, isInView: educationInView } = useInView(0.2);
    const { ref: experienceRef, isInView: experienceInView } = useInView(0.2);
    const { ref: skillsRef, isInView: skillsInView } = useInView(0.2);

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    ref={titleRef as React.RefObject<HTMLHeadingElement>}
                    className={`text-3xl md:text-4xl font-bold text-center text-orange-500 dark:text-sky-400 mb-12 transition-all duration-700 ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    About Me
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Left Side - Image and Bio */}
                    <div className="flex flex-col space-y-6">
                        {/* Profile Image - Responsive size */}
                        <div
                            ref={profileRef as React.RefObject<HTMLDivElement>}
                            className={`flex justify-center transition-all duration-700 ${profileInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <div className="relative w-48 h-56 sm:w-64 sm:h-72 lg:w-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-400 dark:border-sky-400">
                                <Image
                                    src="/images/profile.jpg"
                                    alt="Marchel Karuna Kwee"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Who Am I Description */}
                        <div
                            ref={whoAmIRef as React.RefObject<HTMLDivElement>}
                            className={`bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg border-2 border-orange-200 dark:border-sky-400/30 transition-all duration-700 delay-100 ${whoAmIInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h3 className="text-xl font-bold text-orange-500 dark:text-sky-400 mb-3">
                                Who Am I?
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                                My name is Marchel Karuna Kwee. My journey in technology began with a deep curiosity about how software is crafted to solve real-world problems. That curiosity has since evolved into a professional dedication to Software Development. I am focused on building robust, efficient, and user-centric software solutions, with a strong passion for continuously exploring the broad spectrum of technologies within the industry.
                            </p>
                        </div>

                        {/* What I Do - Compact Service Cards */}
                        <div
                            ref={whatIDoRef as React.RefObject<HTMLDivElement>}
                            className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-2 border-orange-200 dark:border-sky-400/30 flex-grow transition-all duration-700 delay-200 ${whatIDoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h3 className="text-xl font-bold text-orange-500 dark:text-sky-400 mb-4">
                                What I Do?
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {/* Web Development */}
                                <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-[1.02] transition-transform">
                                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-orange-100 dark:bg-sky-900/50 text-orange-500 dark:text-sky-400 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Web App Development</h4>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">Building responsive web apps</p>
                                    </div>
                                </div>

                                {/* UI/UX Design */}
                                <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-[1.02] transition-transform">
                                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-orange-100 dark:bg-sky-900/50 text-orange-500 dark:text-sky-400 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white">UI/UX Design</h4>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">Creating intuitive interfaces</p>
                                    </div>
                                </div>

                                {/* Mobile App Development */}
                                <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-[1.02] transition-transform">
                                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-orange-100 dark:bg-sky-900/50 text-orange-500 dark:text-sky-400 flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Mobile App Development</h4>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">Developing mobile apps</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Education, Experience, Skills */}
                    <div className="flex flex-col space-y-6">
                        {/* Education */}
                        <div
                            ref={educationRef as React.RefObject<HTMLDivElement>}
                            className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-2 border-orange-200 dark:border-sky-400/30 transition-all duration-700 ${educationInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h3 className="text-xl font-bold text-orange-500 dark:text-sky-400 mb-4">
                                Education
                            </h3>
                            <ul className="space-y-3">
                                {educationData.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="w-3 h-3 mt-1.5 rounded-full bg-orange-500 dark:bg-sky-400 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {item.subtitle} • {item.year}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Experience */}
                        <div
                            ref={experienceRef as React.RefObject<HTMLDivElement>}
                            className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-2 border-orange-200 dark:border-sky-400/30 transition-all duration-700 delay-100 ${experienceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h3 className="text-xl font-bold text-orange-500 dark:text-sky-400 mb-4">
                                Experience
                            </h3>
                            <ul className="space-y-3">
                                {experienceData.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="w-3 h-3 mt-1.5 rounded-full bg-orange-500 dark:bg-sky-400 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {item.company} • {item.period}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Skills & Technologies */}
                        <div
                            ref={skillsRef as React.RefObject<HTMLDivElement>}
                            className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-2 border-orange-200 dark:border-sky-400/30 transition-all duration-700 delay-200 ${skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <h3 className="text-xl font-bold text-orange-500 dark:text-sky-400 mb-4">
                                Skills & Technologies
                            </h3>
                            <div className="space-y-4">
                                {skillRows.map((row, rowIndex) => {
                                    const skills = skillsData[row.key] as string[];
                                    const shouldAnimate = skills.length >= MIN_SKILLS_FOR_ANIMATION;

                                    return (
                                        <div key={rowIndex}>
                                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                                                {row.title}
                                            </p>
                                            <div className="overflow-hidden">
                                                <div
                                                    className={`flex gap-4 ${shouldAnimate
                                                        ? row.direction === "left"
                                                            ? "animate-marquee-left"
                                                            : "animate-marquee-right"
                                                        : "justify-start flex-wrap"
                                                        }`}
                                                    style={shouldAnimate ? { width: "max-content" } : {}}
                                                >
                                                    {/* Render skills - duplicate only if animating */}
                                                    {(shouldAnimate ? [...skills, ...skills] : skills).map(
                                                        (iconName, index) => {
                                                            const IconComponent = iconMap[iconName];
                                                            if (!IconComponent) return null;

                                                            return (
                                                                <div
                                                                    key={index}
                                                                    className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 p-1 sm:p-2 bg-gray-50 dark:bg-gray-700 rounded-xl hover:scale-110 transition-transform cursor-pointer group flex-shrink-0"
                                                                    title={getDisplayName(iconName)}
                                                                >
                                                                    <IconComponent className="w-7 h-7 text-orange-500 dark:text-sky-400" />
                                                                    <span className="text-[10px] text-gray-600 dark:text-gray-300 text-center mt-1 leading-tight">
                                                                        {getDisplayName(iconName)}
                                                                    </span>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
