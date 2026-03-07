import { useState, useEffect } from "react";
import content from "../data/content.json";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-slate-100 dark:border-dark-border py-3 shadow-sm" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold text-primary">{content.navbar.logo}</a>
        
        <div className="hidden md:flex items-center space-x-8">
          {content.navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-700 dark:text-dark-text hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a 
            href={content.personalInfo.resume} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary text-sm py-2 px-5"
          >
            {content.navbar.ctaText}
          </a>
        </div>
      </div>
    </nav>
  );
}
