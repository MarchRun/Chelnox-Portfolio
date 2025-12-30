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
    SiLinux
} from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", icon: SiCss3, color: "#1572B6" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Go", icon: SiGo, color: "#00ADD8" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
        ],
    },
];

export default function Skills() {
    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 dark:text-sky-400 mb-12">
                    Skills & Technologies
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border-2 border-orange-200 dark:border-sky-400/30"
                        >
                            <h3 className="text-xl font-semibold text-orange-500 dark:text-sky-400 mb-6 text-center">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="flex flex-col items-center justify-center p-3 bg-white dark:bg-gray-700 rounded-xl border border-orange-200 dark:border-sky-400/20 hover:border-gray-900 dark:hover:border-white hover:scale-105 transition-all cursor-pointer group"
                                        title={skill.name}
                                    >
                                        <skill.icon
                                            className="w-8 h-8 mb-2 transition-colors"
                                            style={{ color: skill.color }}
                                        />
                                        <span className="text-xs text-gray-600 dark:text-gray-300 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
