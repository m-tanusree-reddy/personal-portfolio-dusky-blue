import { motion } from "motion/react";
import content from "../data/content.json";
import SectionHeading from "../components/SectionHeading";
import { Linkedin, Github, Code } from "lucide-react";
import profilePic from "../profile.png";

export default function About() {
  const { heading, text } = content.about;
  const { socials } = content.personalInfo;

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={heading} />
        
        <div className="grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-10 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-[330px] mx-auto lg:mx-0 w-full"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={profilePic} 
                alt="About Me" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/5 rounded-full -z-10 blur-3xl"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {Array.isArray(text) ? (
              text.map((para, i) => (
                <p key={i} className="text-lg text-slate-600 dark:text-dark-text-muted leading-relaxed mb-6">
                  {para}
                </p>
              ))
            ) : (
              <p className="text-lg text-slate-600 dark:text-dark-text-muted leading-relaxed mb-8">
                {text}
              </p>
            )}
            
            <div className="flex space-x-6">
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
                <Linkedin size={28} />
              </a>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
                <Github size={28} />
              </a>
              <a href={socials.leetcode} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
                <Code size={28} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
