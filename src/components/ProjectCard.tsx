"use client";

import { useState } from "react";
import Image from "next/image";
import {
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiPython,
    SiBootstrap,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiGo,
    SiTailwindcss,
    SiPhp,
    SiKotlin,
    SiFirebase,
    SiCplusplus,
    SiGodotengine,
    SiAseprite,
    SiAdobeaudition,
    SiJetpackcompose,
    SiGooglecloud,
    SiRedis
} from "react-icons/si";
import { IconType } from "react-icons";

interface Project {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    role: string;
    timeline: string;
    contributor: string;
    image: string;
    techStack: string[];
    link: string;
}

const techIcons: { [key: string]: IconType } = {
    css3: SiCss3,
    html5: SiHtml5,
    javascript: SiJavascript,
    python: SiPython,
    bootstrap: SiBootstrap,
    react: SiReact,
    nextjs: SiNextdotjs,
    typescript: SiTypescript,
    go: SiGo,
    tailwind: SiTailwindcss,
    php: SiPhp,
    kotlin: SiKotlin,
    firebase: SiFirebase,
    cplusplus: SiCplusplus,
    godot: SiGodotengine,
    aseprite: SiAseprite,
    "adobe audition": SiAdobeaudition,
    jetpack: SiJetpackcompose,
    "google cloud": SiGooglecloud,
    redis: SiRedis,
};

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    // Check if link is valid
    const hasValidLink = project.link && project.link !== "#" && project.link.trim() !== "";

    return (
        <div
            className={`flip-card w-full max-w-sm h-[480px] cursor-pointer ${isFlipped ? "flipped" : ""
                }`}
            onClick={handleFlip}
        >
            <div className="flip-card-inner">
                {/* Front of Card */}
                <div className="flip-card-front bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl p-3 flex flex-col border-2 border-orange-300 dark:border-sky-400/50 rounded-2xl">
                    {/* Project Image - Larger */}
                    <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 mb-3 border-2 border-orange-200 dark:border-sky-400/30">
                        {project.image ? (
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg font-bold text-orange-500 dark:text-sky-400 text-center mb-2">
                        {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-3 flex-grow line-clamp-3">
                        {project.shortDescription}
                    </p>

                    {/* Tech Stack Icons - Max 5 */}
                    <div className="flex justify-center gap-3 mb-3">
                        {project.techStack.slice(0, 5).map((tech, index) => {
                            const Icon = techIcons[tech.toLowerCase()];
                            return Icon ? (
                                <Icon
                                    key={index}
                                    className="w-5 h-5 text-orange-500 dark:text-sky-400"
                                />
                            ) : null;
                        })}
                    </div>

                    {/* Navigate Button - Disabled if no link */}
                    {hasValidLink ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="mx-auto px-5 py-1.5 border-2 border-orange-500 dark:border-sky-400 text-orange-500 dark:text-sky-400 rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white dark:hover:bg-sky-400 dark:hover:text-gray-900 transition-all"
                        >
                            View Project
                        </a>
                    ) : (
                        <span className="mx-auto px-5 py-1.5 border-2 border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 rounded-full text-sm font-medium cursor-not-allowed">
                            Coming Soon
                        </span>
                    )}
                </div>

                {/* Back of Card */}
                <div className="flip-card-back bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl p-4 flex flex-col border-2 border-orange-300 dark:border-sky-400/50 rounded-2xl">
                    {/* Project Title */}
                    <h3 className="text-lg font-bold text-orange-500 dark:text-sky-400 text-center mb-2">
                        {project.title}
                    </h3>
                    <div className="w-full h-0.5 bg-orange-200 dark:bg-sky-400/30 mb-3" />

                    {/* Details */}
                    <div className="space-y-2 text-sm flex-grow overflow-y-auto">
                        <div>
                            <span className="font-bold text-orange-500 dark:text-sky-400">Description: </span>
                            <span className="text-gray-600 dark:text-gray-300">
                                {project.description}
                            </span>
                        </div>
                        <div>
                            <span className="font-bold text-orange-500 dark:text-sky-400">Role: </span>
                            <span className="text-gray-600 dark:text-gray-300">
                                {project.role}
                            </span>
                        </div>
                        <div>
                            <span className="font-bold text-orange-500 dark:text-sky-400">Timeline: </span>
                            <span className="text-gray-600 dark:text-gray-300">
                                {project.timeline}
                            </span>
                        </div>
                        <div>
                            <span className="font-bold text-orange-500 dark:text-sky-400">Contributor: </span>
                            <span className="text-gray-600 dark:text-gray-300">
                                {project.contributor}
                            </span>
                        </div>
                    </div>

                    {/* Tech Stack Icons - Max 5, Larger */}
                    <div className="flex justify-center gap-4 my-3">
                        {project.techStack.slice(0, 5).map((tech, index) => {
                            const Icon = techIcons[tech.toLowerCase()];
                            return Icon ? (
                                <Icon
                                    key={index}
                                    className="w-8 h-8 text-orange-500 dark:text-sky-400"
                                />
                            ) : null;
                        })}
                    </div>

                    {/* Navigate Button - Disabled if no link */}
                    {hasValidLink ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="mx-auto px-5 py-1.5 border-2 border-orange-500 dark:border-sky-400 text-orange-500 dark:text-sky-400 rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white dark:hover:bg-sky-400 dark:hover:text-gray-900 transition-all"
                        >
                            View Project
                        </a>
                    ) : (
                        <span className="mx-auto px-5 py-1.5 border-2 border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 rounded-full text-sm font-medium cursor-not-allowed">
                            Coming Soon
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
