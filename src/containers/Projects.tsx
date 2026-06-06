"use client";

import { useState } from "react";
import { FiExternalLink, FiGithub, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { images } from "../constants";
import "./Projects.scss";

const allProjects = [
  {
    title: "Portals",
    description:
      "A 3D first-person puzzle game based on Portal, created with Unity and C#.",
    projectLink: "/projects/PortalWebGL/index.html",
    imgUrl: images.portals,
    tags: ["Unity/C#"],
  },
  {
    title: "Traffic Signal Controller",
    description:
      "A VLSI microchip designed in Verilog that implements a traffic light controller for a 4-way intersection, synthesized using the eFabless chipIgnite flow in GF180nm technology and passing Multi-Project Wafer and Tapeout tests.",
    projectLink: "https://repositories.efabless.com/zvincent/traffic-signal-controller",
    codeLink: "https://repositories.efabless.com/zvincent/traffic-signal-controller",
    imgUrl: images.chip,
    tags: ["Verilog", "Hardware"],
  },
  {
    title: "Cyber Annihilation",
    description:
      "A 2D top down shooter game created with Unity and C#.",
    projectLink: "/projects/ShooterWebGL/index.html",
    imgUrl: images.shooter,
    tags: ["Unity/C#"],
  },
  {
    title: "Self-Driving Car",
    description:
      "A machine learning program written with JavaScript that uses a neural network to teach a car to drive on its own.",
    projectLink: "/Self-Driving-Car/",
    codeLink: "https://github.com/AndrewMitchell25/Self-Driving-Car",
    imgUrl: images.cars,
    tags: ["JavaScript"],
  },
  {
    title: "Autonomous Robot",
    description:
      "A Raspberry Pi-powered robot that drives autonomously on a miniature road using a custom computer vision model to read fake road signs, with Bluetooth remote control as an alternative mode.",
    imgUrl: images.robot,
    tags: ["Python", "Computer Vision", "Hardware"],
  },
  {
    title: "Face Recognition",
    description:
      "An open-set face recognition system using MediaPipe for face detection and a CNN to generate facial embeddings, achieving ~80% accuracy in identifying known faces from video.",
    projectLink: "https://github.com/AndrewMitchell25/Face-Recognition",
    codeLink: "https://github.com/AndrewMitchell25/Face-Recognition",
    tags: ["Python", "Computer Vision"],
  },
  {
    title: "Cryptography Suite",
    description:
      "An interactive GUI application implementing Vigenere Cipher, Triple DES, AES, and RSA with visual step-by-step explanations of the encryption and decryption process, built with a team of 4.",
    projectLink: "https://github.com/tealeaf2/ND_CompSecurity_Project",
    codeLink: "https://github.com/tealeaf2/ND_CompSecurity_Project",
    tags: ["Python", "Cryptography"],
  },
  {
    title: "Cambio",
    description:
      "A distributed card game system written in Python that allows multiple players to play Cambio over a network using a client-server architecture.",
    projectLink: "https://github.com/AndrewMitchell25/cambio",
    codeLink: "https://github.com/AndrewMitchell25/cambio",
    tags: ["Python"],
  },
  {
    title: "Project: Horizon",
    description:
      "A web-app prototype created with Python and Flask during a Hackathon that aims to encourage homeowners to switch to renewable energy by providing a free consultation on the benefits of going solar in their area.",
    projectLink: "https://sol-solutions.vercel.app/",
    codeLink: "https://github.com/AndrewMitchell25/project-horizon",
    imgUrl: images.projecthorizon,
    tags: ["Web App", "Python"],
  },
  {
    title: "Sudoku Solver",
    description:
      "A sudoku solver program written in Python that was developed using a recursive backtracking algorithm.",
    projectLink: "https://github.com/AndrewMitchell25/SudokuSolver",
    codeLink: "https://github.com/AndrewMitchell25/SudokuSolver",
    imgUrl: images.sudoku,
    tags: ["Python"],
  },
  {
    title: "AMTimer",
    description:
      "Prototype Rubik's Cube timer capable of generating random scrambles, manipulating a cube model to display the scrambled state, and keeping track of each user's statistics over time.",
    projectLink: "https://github.com/AndrewMitchell25/AMTimer",
    codeLink: "https://github.com/AndrewMitchell25/AMTimer",
    imgUrl: images.amtimer,
    tags: ["React", "Web App"],
  },
  {
    title: "Flappy Bird NEAT",
    description:
      "A Python program using Pygame that implements a neural network AI using NEAT to play Flappy Bird.",
    projectLink: "https://github.com/AndrewMitchell25/FlappyBirdNEAT",
    codeLink: "https://github.com/AndrewMitchell25/FlappyBirdNEAT",
    imgUrl: images.flappy,
    tags: ["Python"],
  },
  {
    title: "The AM News",
    description:
      "A news application built with Next.js 13 and TypeScript that uses the Mediastack API and Stepzen to create an up-to-date news source.",
    projectLink: "https://amnews.vercel.app/",
    codeLink: "https://github.com/AndrewMitchell25/amnews",
    imgUrl: images.amnews,
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "Tyler the Twitter Bot",
    description:
      "A Twitter bot written with Javascript and using Google Firestore, designed to take programming quotes from an API and Tweet them.",
    projectLink: "https://twitter.com/TylerIsABot2",
    codeLink: "https://github.com/AndrewMitchell25/Tyler",
    imgUrl: images.twitter,
    tags: ["JavaScript"],
  },
  {
    title: "Chess AI",
    description:
      "A work in progress, using React to create a working chess app with plans to create a chess AI in the future.",
    projectLink: "/Chess/",
    codeLink: "https://github.com/AndrewMitchell25/Chess",
    imgUrl: images.chess,
    tags: ["React"],
  },
  {
    title: "Capture the Flag",
    description:
      "A 2D game created using Unity and C#, involved graphic design, UI, scripting, and developed into both a PC and mobile app.",
    projectLink: "/projects/CTFWebGL/index.html",
    codeLink: "https://github.com/AndrewMitchell25/Capture-the-Flag",
    imgUrl: images.ctf,
    tags: ["Unity/C#", "Mobile App", "Pinned"],
  },
  {
    title: "B-Minor Compiler",
    description:
      "A complete compiler with lexical analysis, parsing, semantic analysis/typechecking, and x86 assembly generation for Bminor, a custom C-like language.",
    projectLink: "https://github.com/AndrewMitchell25/amitch27-compiler",
    codeLink: "https://github.com/AndrewMitchell25/amitch27-compiler",
    imgUrl: images.compiler,
    tags: ["C", "Assembly", "Pinned"],
  },
  {
    title: "Cube Solver",
    description:
      "Uses the Kociemba algorithm with Iterative Deepening A* search and heuristic tables to solve any Rubik's cube in under 3 seconds (25 moves or less). OpenCV detects the cube state via webcam, creating a full scan-to-solution pipeline.",
    projectLink: "https://github.com/AndrewMitchell25/cube-solver",
    codeLink: "https://github.com/AndrewMitchell25/cube-solver",
    imgUrl: images.cubeSolver,
    tags: ["Python", "Pinned"],
  },
  {
    title: "Gesture Control Glove",
    description:
      "A wearable glove using flex sensors and accelerometers with a Raspberry Pi to translate hand motion into computer control, built with a team of 3.",
    projectLink: "https://github.com/zachvin/capstone",
    codeLink: "https://github.com/zachvin/capstone",
    imgUrl: images.glove,
    tags: ["Python", "Hardware", "Pinned"],
  },
];

const languages = [
  "All", "C", "JavaScript", "Next.js", "Python", "React", "TypeScript", "Unity/C#", "Verilog",
];

const categories = [
  "All", "Pinned", "Web App", "Mobile App", "Computer Vision", "Cryptography", "Hardware",
];

const Projects = () => {
  const [lang, setLang] = useState("All");
  const [cat, setCat] = useState("Pinned");

  const filtered =
    lang === "All" && cat === "All"
      ? [...allProjects].sort((a, b) =>
          a.tags.includes("Pinned") === b.tags.includes("Pinned") ? 0
            : a.tags.includes("Pinned") ? -1 : 1
        )
      : allProjects.filter((p) => {
          const matchLang = lang === "All" || p.tags.includes(lang);
          const matchCat = cat === "All" || p.tags.includes(cat);
          return matchLang && matchCat;
        });

  return (
    <>
      <h2 className="head-text">
        My <span>Projects</span>
      </h2>

      <div className="projects-filter">
        <div className="projects-select-group">
          <label htmlFor="lang-select">Language</label>
          <div className="projects-select-wrapper">
            <select
              id="lang-select"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              {languages.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
            <FiChevronDown className="projects-select-arrow" />
          </div>
        </div>
        <div className="projects-select-group">
          <label htmlFor="cat-select">Category</label>
          <div className="projects-select-wrapper">
            <select
              id="cat-select"
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <FiChevronDown className="projects-select-arrow" />
          </div>
        </div>
      </div>

      <motion.div layout className="projects-grid">
        {filtered.map((project, i) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="projects-card"
          >
            {project.imgUrl && (
              <div className="projects-card-img">
                <img src={project.imgUrl} alt={project.title} />
              </div>
            )}
            <div className="projects-card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="projects-card-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="projects-card-links">
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <FiExternalLink /> Live
                </a>
                {project.codeLink && (
                  <a href={project.codeLink} target="_blank" rel="noreferrer">
                    <FiGithub /> Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Projects;
