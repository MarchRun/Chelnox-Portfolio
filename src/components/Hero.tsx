"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedinIn
} from "react-icons/fa";

const FloatingBubbles = dynamic(() => import("./FloatingBubbles"), {
    ssr: false,
});

// Calculate age dynamically
const calculateAge = () => {
    const birthYear = 2003;
    const today = new Date();
    return today.getFullYear() - birthYear;
};

// Typing phrases
const phrases = [
    "a Full-Stack Developer",
    `${calculateAge()} Years Old`,
    "passionate about learning",
];

// Social links
const socialLinks = [
    {
        icon: FaEnvelope,
        href: "mailto:marchelk372@gmail.com",
        label: "Email",
        hoverBg: "hover:bg-[#EA4335]",
    },
    {
        icon: FaFacebookF,
        href: "https://www.facebook.com/marchel.karuna/",
        label: "Facebook",
        hoverBg: "hover:bg-[#1877F2]",
    },
    {
        icon: FaInstagram,
        href: "https://www.instagram.com/mar.chel_k/",
        label: "Instagram",
        hoverBg: "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]",
    },
    {
        icon: FaGithub,
        href: "https://github.com/MarchRun",
        label: "GitHub",
        hoverBg: "hover:bg-[#333333]",
    },
    {
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/marchelkarunakwee/",
        label: "LinkedIn",
        hoverBg: "hover:bg-[#0A66C2]",
    },
];

export default function Hero() {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [showName, setShowName] = useState(false);
    const [showTyping, setShowTyping] = useState(false);

    // Entrance animation
    useEffect(() => {
        const timer1 = setTimeout(() => setShowName(true), 300);
        const timer2 = setTimeout(() => setShowTyping(true), 800);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    // Typing effect
    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            if (displayedText.length < currentPhrase.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2500);
            }
        } else {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, 40);
            } else {
                setIsDeleting(false);
                setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentPhraseIndex]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800" />
                <div className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 146, 60, 0.3) 0%, transparent 50%),
                                         radial-gradient(circle at 75% 75%, rgba(249, 115, 22, 0.2) 0%, transparent 50%),
                                         radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 70%)`,
                    }}
                />
                <div className="absolute inset-0 dark:opacity-40"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.2) 0%, transparent 40%),
                                         radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.15) 0%, transparent 40%)`,
                    }}
                />
            </div>

            {/* Floating Bubbles Particles */}
            <FloatingBubbles />

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 pt-16">
                {/* Name with animated gradient */}
                <h1
                    className={`font-[family-name:var(--font-poppins)] text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 transition-all duration-700 ${showName ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <span className="text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient-shift bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 dark:from-sky-400 dark:via-cyan-400 dark:to-blue-400 drop-shadow-sm">
                        Marchel Karuna Kwee
                    </span>
                </h1>

                {/* Typing effect */}
                <div
                    className={`max-w-2xl mx-auto text-xl md:text-2xl font-medium mb-6 transition-all duration-700 delay-300 ${showTyping ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <span className="text-gray-800 dark:text-gray-200">I&apos;m </span>
                    <span className="text-orange-600 dark:text-sky-400 font-bold">
                        {displayedText}
                    </span>
                    <span className="animate-pulse text-orange-600 dark:text-sky-400">|</span>
                </div>

                {/* Social Links */}
                <div
                    className={`flex items-center justify-center gap-3 mb-8 transition-all duration-700 delay-400 ${showTyping ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    {socialLinks.map((social, index) => (
                        <Link
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className={`w-10 h-10 flex items-center justify-center rounded-full bg-transparent border-2 border-orange-400 dark:border-sky-400 text-orange-500 dark:text-sky-400 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-lg hover:text-white ${social.hoverBg}`}
                        >
                            <social.icon className="w-5 h-5" />
                        </Link>
                    ))}
                </div>

                {/* Buttons */}
                <div
                    className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${showTyping ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <a
                        href="#about"
                        className="px-8 py-3 bg-orange-500 dark:bg-sky-500 text-white rounded-xl font-semibold hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Get Started
                    </a>
                    <a
                        href="/Marchel_Karuna_CV.pdf"
                        download="Marchel_Karuna_CV.pdf"
                        className="px-8 py-3 border-2 border-orange-500 dark:border-sky-400 text-orange-600 dark:text-sky-400 rounded-xl font-semibold hover:bg-gray-900 hover:border-gray-900 hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-gray-900 transition-all"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}
