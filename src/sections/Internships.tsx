import { motion } from "motion/react";
import content from "../data/content.json";
import SectionHeading from "../components/SectionHeading";
import { Briefcase } from "lucide-react";

export default function Internships() {
  const { heading, items } = content.internships;

  return (
    <section id="internships" className="section-padding bg-bg-light dark:bg-dark-bg/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={heading} />
        
        <div className="space-y-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card-bg p-8 rounded-3xl hover-box flex gap-6"
            >
              <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary shrink-0">
                <Briefcase size={32} />
              </div>
              
              <div>
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{item.company}</h3>
                </div>
                <p className="text-lg font-medium text-primary mb-4">{item.role}</p>
                <p className="text-slate-600 dark:text-dark-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
