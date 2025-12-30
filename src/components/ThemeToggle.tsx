"use client";

import { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check initial theme
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={`theme-toggle transition-all duration-300 ${isDark
                ? "bg-gray-900 border-2 border-sky-400"
                : "bg-white border-2 border-orange-400"
                }`}
            aria-label="Toggle theme"
        >
            {isDark ? (
                // Moon icon for dark mode - sky blue
                <MdDarkMode className="w-6 h-6 text-sky-400" />
            ) : (
                // Sun icon for light mode - orange
                <MdLightMode className="w-6 h-6 text-orange-500" />
            )}
        </button>
    );
}
