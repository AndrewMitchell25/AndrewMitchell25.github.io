"use client";

import { motion } from "framer-motion";
import { images } from "../constants";
import "./Header.scss";

const circles = [
  { src: images.circle1, duration: 100 },
  { src: images.circle2, duration: 30 },
  { src: images.circle3, duration: 75 },
  { src: images.circle4, duration: 100 },
  { src: images.circle5, duration: 50 },
];

const Header = () => {
  return (
    <div className="app__header app__flex">
      <div className="app__header-c">
        {circles.map((circle, index) => (
          <div key={index} className="app__header-circle">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={circle.src}
                alt=""
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: circle.duration,
                }}
              />
            </motion.div>
          </div>
        ))}
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="app__header-content"
      >
        <h1 className="app__header-title">
          Andrew <span>Mitchell</span>
        </h1>
        <p className="app__header-subtitle">
          Software Development Engineer at AWS
        </p>
      </motion.div>
    </div>
  );
};

export default Header;
