import { motion } from "motion/react";
import content from "../data/content.json";

export default function CTA() {
  const { heading, subtext, ctaBtn, viewWorkBtn } = content.cta;

  return (
    <section className="section-padding bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          {heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-white/80 mb-10"
        >
          {subtext}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href={content.personalInfo.resume} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
          >
            {ctaBtn}
          </a>
          <a href="#projects" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all">
            {viewWorkBtn}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
