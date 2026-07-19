import { motion } from "motion/react";
import content from "../data/content.json";
import SectionHeading from "../components/SectionHeading";

export default function Skills() {
  const { heading, subheading, categories } = content.skills;

  return (
    <section id="skills" className="section-padding bg-soft-grey dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={heading} subtitle={subheading} />
        
        <div className="flex flex-wrap justify-center gap-4">
          {categories.flatMap(cat => cat.items).map((skill, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="pill-tag"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-bg p-8 rounded-2xl hover-box"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span key={i} className="text-sm text-slate-600 dark:text-dark-text bg-bg-light dark:bg-slate-700 px-3 py-1 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
