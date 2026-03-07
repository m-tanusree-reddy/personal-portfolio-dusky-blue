import { motion } from "motion/react";
import content from "../data/content.json";
import SectionHeading from "../components/SectionHeading";
import { Users } from "lucide-react";

export default function Leadership() {
  const { heading, items } = content.leadership;

  return (
    <section id="leadership" className="section-padding bg-soft-grey dark:bg-dark-bg/50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={heading} />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center p-6 bg-white dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-dark-border hover-box"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                <Users size={20} />
              </div>
              <p className="font-medium text-slate-800 dark:text-dark-text">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
