"use client";

import { motion } from "framer-motion";
import { images } from "../constants";
import "./About.scss";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        About <span>Me</span>
      </h2>
      <div className="app__about-container">
        <motion.div
          whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
          transition={{ duration: 0.5 }}
          className="app__about-img"
        >
          <img src={images.profile} alt="Andrew Mitchell" />
        </motion.div>
        <div className="app__about-text">
          <p className="app__about-intro">
            I&apos;m a Software Development Engineer at Amazon Web Services and a Computer
            Engineering graduate from the University of Notre Dame.
          </p>
          <p className="app__about-detail">
            My interest in software started early — building video games with
            Scratch and teaching myself Python in fifth grade. That curiosity
            grew into experience across the stack: C and C# for systems and game
            development, Python for tooling and algorithms, Go for cloud
            infrastructure, and JavaScript/TypeScript for web applications. I
            contribute to open source projects in the Kubernetes ecosystem and
            enjoy building projects that span from compilers to computer vision.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
