import { motion } from "motion/react";
import content from "../data/content.json";
import SectionHeading from "../components/SectionHeading";
import { Mail, MapPin, Linkedin, Github, Code } from "lucide-react";

export default function Contact() {
  const { email, location, socials } = content.personalInfo;
  const { heading, subheading, form, infoHeading, socialHeading } = content.contact;

  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={heading} subtitle={subheading} />
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-dark-text mb-2">{form.name}</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-dark-text mb-2">{form.email}</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-dark-text mb-2">{form.subject}</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-dark-text mb-2">{form.message}</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none dark:text-white"></textarea>
              </div>
              <button type="button" className="btn-primary w-full py-4">{form.submit}</button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">{infoHeading}</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mr-6 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{form.email}</p>
                  <a href={`mailto:${email}`} className="text-lg font-medium text-slate-800 dark:text-dark-text hover:text-primary transition-colors">{email}</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mr-6 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{location}</p>
                  <p className="text-lg font-medium text-slate-800 dark:text-dark-text">{location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">{socialHeading}</p>
              <div className="flex space-x-4">
                <a href={socials.linkedin} className="w-12 h-12 rounded-full border-2 border-slate-100 dark:border-dark-border flex items-center justify-center text-slate-600 dark:text-dark-text hover:border-primary hover:text-primary transition-all">
                  <Linkedin size={20} />
                </a>
                <a href={socials.github} className="w-12 h-12 rounded-full border-2 border-slate-100 dark:border-dark-border flex items-center justify-center text-slate-600 dark:text-dark-text hover:border-primary hover:text-primary transition-all">
                  <Github size={20} />
                </a>
                <a href={socials.leetcode} className="w-12 h-12 rounded-full border-2 border-slate-100 dark:border-dark-border flex items-center justify-center text-slate-600 dark:text-dark-text hover:border-primary hover:text-primary transition-all">
                  <Code size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
