import { useState, useEffect } from "react";
import content from "../data/content.json";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sparks, setSparks] = useState<{ id: number; left: string; color: string; size: number; dx: string; dy: string; duration: string; delay: string }[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHelloClick = () => {
    const goldColors = ["#FFD700", "#FFA500", "#FF8C00", "#FFE4B5", "#FFFDD0", "#FFFFFF"];
    const newSparks = Array.from({ length: 65 }).map((_, i) => {
      const size = 4 + Math.random() * 6;
      // Staggered horizontal positions across the viewport width
      const left = `${Math.random() * 100}vw`;
      const dx = `${-50 + Math.random() * 100}px`;
      // Rain down across the full viewport height
      const dy = "105vh";
      const duration = `${1.5 + Math.random() * 1.5}s`;
      const delay = `${Math.random() * 1.5}s`;

      return {
        id: Date.now() + i + Math.random(),
        left,
        color: goldColors[Math.floor(Math.random() * goldColors.length)],
        size,
        dx,
        dy,
        duration,
        delay
      };
    });

    setSparks((prev) => [...prev, ...newSparks]);

    // Clean up
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !newSparks.find((ns) => ns.id === s.id)));
    }, 5000);
  };

  return (
    <>
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
            <button 
              onClick={handleHelloClick}
              className="btn-primary text-sm py-2 px-5 cursor-pointer relative select-none transition-transform active:scale-95"
            >
              Hello!
            </button>
          </div>
        </div>
      </nav>

      {/* Full screen sparks rain overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        {sparks.map((spark) => (
          <span
            key={spark.id}
            className="absolute pointer-events-none animate-firework"
            style={{
              left: spark.left,
              top: "-20px",
              width: `${spark.size}px`,
              height: `${spark.size}px`,
              transform: "translate(-50%, 0)",
              "--dx": spark.dx,
              "--dy": spark.dy,
              "--duration": spark.duration,
              "--delay": spark.delay,
                } as React.CSSProperties}
              >
                <div 
                  className="w-full h-full rotate-45"
                  style={{
                    backgroundColor: spark.color,
                    boxShadow: `0 0 5px ${spark.color}`,
                  }}
                />
              </span>
            ))}
          </div>
    </>
  );
}
