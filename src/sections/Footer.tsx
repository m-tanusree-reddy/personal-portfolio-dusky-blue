import content from "../data/content.json";

export default function Footer() {
  const { name } = content.personalInfo;
  const { copyright } = content.footer;

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-white dark:bg-dark-bg border-t border-slate-100 dark:border-dark-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-serif font-bold text-primary">
          {name}
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {content.navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-500 dark:text-dark-text-muted hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="text-sm text-slate-400 dark:text-dark-text-muted">
          © {new Date().getFullYear()} {copyright}
        </div>
      </div>
    </footer>
  );
}
