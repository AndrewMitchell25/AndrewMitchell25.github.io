import React, { useState } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrappper";
import { images } from "../../constants";

const works = [
  {
    title: "Project: Horizon",
    description:
      "A web-app prototype created with Python and Flask during a Hackathon that aims to encourage homeowners to switch to renewable energy by providing a free consultation on the benefits of going solar in their area.",
    projectLink: "https://sol-solutions.vercel.app/",
    codeLink: "https://github.com/AndrewMitchell25/project-horizon",
    imgUrl: images.projecthorizon,
    tags: ["Web App", "Finished", "Python", "Pinned"],
  },
  {
    title: "Capture the Flag",
    description:
      "A 2D game created using Unity and C#, involved graphic design, UI, scripting, and developed into both a PC and mobile app. ",
    projectLink: process.env.PUBLIC_URL + "/projects/CTFWebGL/index.html",
    codeLink: "https://github.com/AndrewMitchell25/Capture-the-Flag",
    imgUrl: images.ctf,
    tags: ["Unity/C#", "Mobile App", "Finished", "Pinned"],
  },
  {
    title: "Sudoku Solver",
    description:
      "A sudoku solver program written in Python that was developed using a recursive backtracking algorithm.",
    projectLink: "https://github.com/AndrewMitchell25/SudokuSolver",
    codeLink: "https://github.com/AndrewMitchell25/SudokuSolver",
    imgUrl: images.sudoku,
    tags: ["Python", "Finished", "Pinned"],
  },
];

const otherWorks = [
  {
    title: "Flappy Bird NEAT",
    description:
      "A Python program using Pygame that implements a neural network AI using NEAT to play Flappy Bird.",
    projectLink: "https://github.com/AndrewMitchell25/FlappyBirdNEAT",
    codeLink: "https://github.com/AndrewMitchell25/FlappyBirdNEAT",
    imgUrl: images.flappy,
    tags: ["Python", "Finished"],
  },
  {
    title: "The AM News",
    description:
      "A news application built with Next.js 13 and TypeScript that uses the Mediastack API and Stepzen to create an up-to-date news source.",
    projectLink: "https://amnews.vercel.app/",
    codeLink: "https://github.com/AndrewMitchell25/amnews",
    imgUrl: images.amnews,
    tags: ["Next.js", "React", "Finished", "TypeScript"],
  },
  {
    title: "Tyler the Twitter Bot",
    description:
      "A Twitter bot written with Javascript and using Google Firestore, designed to take programming quotes from an API and Tweet them.",
    projectLink: "https://twitter.com/TylerIsABot2",
    codeLink: "https://github.com/AndrewMitchell25/Tyler",
    imgUrl: images.twitter,
    tags: ["JavaScript", "Finished"],
  },
  {
    title: "Chess AI",
    description:
      "A work in progress, using React to create a working chess app with plans to create a chess AI in the future.",
    projectLink: process.env.PUBLIC_URL + "/Chess/",
    codeLink: "https://github.com/AndrewMitchell25/Chess",
    imgUrl: images.chess,
    tags: ["In Progress", "React"],
  },
  {
    title: "Self-Driving Car",
    description:
      "A machine learning program written with JavaScript that uses a neural network to teach a car to drive on its own.",
    projectLink: process.env.PUBLIC_URL + "/Self-Driving-Car/",
    codeLink: "https://github.com/AndrewMitchell25/Self-Driving-Car",
    imgUrl: images.cars,
    tags: ["In Progress", "JavaScript"],
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("Pinned");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState(works);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "Pinned") {
        setFilterWork(works);
      } else if (item === "All") {
        setFilterWork(works.concat(otherWorks));
      } else {
        setFilterWork(
          works.concat(otherWorks).filter((work) => work.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Project <span>Portfolio</span>
      </h2>

      <div className="app__work-filter">
        {[
          "Pinned",
          "Web App",
          "Mobile App",
          "JavaScript",
          "Python",
          "Unity/C#",
          "React",
          "Next.js",
          "Finished",
          "In Progress",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app_flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
