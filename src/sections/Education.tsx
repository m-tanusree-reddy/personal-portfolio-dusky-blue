import { motion } from "motion/react";
import content from "../data/content.json";
import SectionHeading from "../components/SectionHeading";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { heading, items } = content.education;

  return (
    <section id="education" className="section-padding bg-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title={heading} />
        
        <div className="space-y-8">
          {items.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-12 border-l-2 border-primary/20 pb-8 last:pb-0"
            >
              <div className="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                <GraduationCap size={14} />
              </div>
              
              <div className="bg-soft-grey dark:bg-dark-card p-8 rounded-3xl border border-slate-100 dark:border-dark-border hover-box">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{edu.degree}</h3>
                <p className="text-lg font-medium text-primary mb-2">{edu.institution}</p>
                <p className="text-slate-500 dark:text-dark-text-muted font-medium">{edu.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
