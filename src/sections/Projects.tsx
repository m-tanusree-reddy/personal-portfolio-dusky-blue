import { motion } from "motion/react";
import content from "../data/content.json";
import SectionHeading from "../components/SectionHeading";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const { heading, items } = content.projects;

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={heading} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group card-bg rounded-3xl overflow-hidden hover-box p-8"
            >
              <div className="flex flex-col h-full">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </a>
                <p className="text-slate-600 dark:text-dark-text-muted mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold text-primary-dark bg-bg-light dark:bg-primary/10 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-primary font-bold hover:text-primary-dark transition-colors"
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
