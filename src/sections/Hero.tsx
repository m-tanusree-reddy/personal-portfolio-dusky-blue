import { motion } from "motion/react";
import content from "../data/content.json";

export default function Hero() {
  const { name, title, tagline } = content.personalInfo;
  const { greeting, viewWorkBtn, downloadResumeBtn } = content.hero;

  return (
    <section id="home" className="min-h-screen flex items-center bg-bg-light dark:bg-dark-bg section-padding pt-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              {greeting} <span className="text-primary">{name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-primary-dark mb-6">
              {title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-dark-text-muted mb-10 max-w-xl leading-relaxed">
              "{tagline}"
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">{viewWorkBtn}</a>
              <a 
                href={content.personalInfo.resume} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline"
              >
                {downloadResumeBtn}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-dark-border">
              <img 
                src="https://i.postimg.cc/PJ5gkfhD/upscaled-pic2.png" 
                alt={name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
