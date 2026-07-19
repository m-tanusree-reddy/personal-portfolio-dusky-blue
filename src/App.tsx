/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Internships from "./sections/Internships";
import Achievements from "./sections/Achievements";
import Leadership from "./sections/Leadership";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
