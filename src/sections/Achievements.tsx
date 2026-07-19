import { motion } from "motion/react";
import content from "../data/content.json";
import SectionHeading from "../components/SectionHeading";
import { Trophy } from "lucide-react";

export default function Achievements() {
  const { heading, items } = content.achievements;

  return (
    <section id="achievements" className="section-padding bg-white dark:bg-dark-bg">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={heading} />
        
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((achievement, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center p-6 bg-soft-grey dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-dark-border hover-box"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                <Trophy size={24} />
              </div>
              <p className="font-medium text-slate-800 dark:text-dark-text">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
