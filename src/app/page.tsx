"use client";

import { motion } from "framer-motion";
import { SocialMedia, NavigationDots } from "../components";
import { Header, About, Experience, Contributions, Footer } from "../containers";
import Projects from "../containers/Projects";

interface SectionWrapperProps {
  idName: string;
  className: string;
  children: React.ReactNode;
}

const SectionWrapper = ({ idName, className, children }: SectionWrapperProps) => (
  <div id={idName} className={`app__container ${className}`}>
    <SocialMedia />
    <div className="app__wrapper app__flex">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__flex"
        style={{ width: "100%", flexDirection: "column", flex: 1 }}
      >
        {children}
      </motion.div>
      <div className="copyright">
        <p className="p-text">&copy;2026 Andrew Mitchell</p>
        <p className="p-text">All rights reserved</p>
      </div>
    </div>
    <NavigationDots active={idName} />
  </div>
);

export default function Home() {
  return (
    <>
      <SectionWrapper idName="home" className="app__primarybg">
        <Header />
      </SectionWrapper>
      <SectionWrapper idName="about" className="app__whitebg">
        <About />
      </SectionWrapper>
      <SectionWrapper idName="experience" className="app__primarybg">
        <Experience />
      </SectionWrapper>
      <SectionWrapper idName="projects" className="app__whitebg">
        <Projects />
      </SectionWrapper>
      <SectionWrapper idName="contributions" className="app__primarybg">
        <Contributions />
      </SectionWrapper>
      <SectionWrapper idName="contact" className="app__whitebg">
        <Footer />
      </SectionWrapper>
    </>
  );
}
