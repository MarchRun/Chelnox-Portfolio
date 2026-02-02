"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect current section
      const sections = ["home", "about", "projects", "contact"];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if section is in view (top of section is near top of viewport)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
    { name: "LOGIN", href: "https://chelnox-sso.vercel.app", external: true },
  ];

  // Use transparent header for Hero and Projects sections
  const useTransparentHeader = currentSection === "home" || currentSection === "projects";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled && !useTransparentHeader
        ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-b-[2rem] border-b-4 border-orange-400 dark:border-sky-400 header-shadow"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link
              href="#home"
              className={`text-2xl md:text-3xl font-black text-orange-500 dark:text-sky-400 hover:text-gray-900 dark:hover:text-white transition-all duration-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
            >
              CHELNOX
            </Link>
            <span className={`text-xs font-semibold text-orange-400 dark:text-sky-300 transition-all duration-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
              Ver 1.4
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                target={(link as any).external ? "_blank" : undefined}
                rel={(link as any).external ? "noopener noreferrer" : undefined}
                className={`text-base font-semibold transition-all duration-500 ${currentSection === link.href.replace("#", "")
                  ? "text-gray-900 dark:text-white"
                  : "text-orange-500 dark:text-sky-400 hover:text-gray-900 dark:hover:text-white"
                  } ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-orange-500 dark:text-sky-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 z-50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="py-4 space-y-1 bg-white dark:bg-gray-900 rounded-b-2xl shadow-lg">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                target={(link as any).external ? "_blank" : undefined}
                rel={(link as any).external ? "noopener noreferrer" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-3 text-lg font-semibold transition-all duration-300 ${currentSection === link.href.replace("#", "")
                  ? "text-gray-900 dark:text-white bg-orange-50 dark:bg-sky-900/30"
                  : "text-orange-500 dark:text-sky-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  } ${isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                  }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms" }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
