"use client";

import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { FaAws } from "react-icons/fa";
import {
  SiC,
  SiPython,
  SiGo,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiKubernetes,
  SiDocker,
  SiUnity,
} from "react-icons/si";
import { images } from "../constants";
import "./Experience.scss";

const skillGroups = [
  {
    label: "Languages",
    items: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    label: "Cloud & Tools",
    items: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Unity", icon: SiUnity, color: "#222222" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
    ],
  },
];

const experiences = [
  {
    name: "Software Development Engineer",
    company: "Amazon Web Services",
    description:
      "Work on the EKS Node Lifecycle team, contributing to EKS Auto Mode and OSS Karpenter.",
    year: "2025-Present",
    imgUrl: images.aws,
  },
  {
    name: "Computer Consultant",
    company: "Engineering & Science Computing at Notre Dame",
    description:
      "Process and image new laptops and desktops, set-up and deliver computers to staff, and assist faculty with troubleshooting IT problems.",
    year: "2022-2025",
    imgUrl: images.notreDame,
  },
  {
    name: "Software Development Engineer Intern",
    company: "Amazon Web Services",
    description:
      "Worked with the ECS Fargate Agent team to improve service visibility by implementing additional availability metrics in Go and combining them with existing ones to create the Fargate Data Plane Availability Dashboard, helping oncall operators root cause issues in tens of millions of running instances.",
    year: "2024",
    imgUrl: images.aws,
  },
  {
    name: "Software Engineering Intern",
    company: "NASA Jet Propulsion Laboratory",
    description:
      "Worked with a partner to improve the DSN Telemetry Accountability Project under the Deep Space Network Emulator team, which tracks telemetry data as it travels from spacecraft to JPL by generating accountability records at specific venues along the path. Used C to implement new capabilities which allow the project to handle multiple different types of telemetry data simultaneously and process each stream correctly.",
    year: "2023",
    imgUrl: images.jpl,
  },
  {
    name: "Customer Service Associate",
    company: "Fountain Bowl",
    description:
      "Solved customer problems and provided a clean and healthy environment at a local bowling alley.",
    year: "2022",
    imgUrl: images.fountainBowl,
  },
  {
    name: "Personal Tutor",
    company: "Self Employed",
    description:
      "Created and implemented lesson plans in various subjects for middle and high school students, teaching challenging topics in one-on-one tutoring sessions.",
    year: "2018-2021",
  },
];

const Experience = () => {
  return (
    <>
      <h2 className="head-text">
        Skills & <span>Experience</span>
      </h2>

      <div className="app__skills-container">
        <div className="app__skills-list">
          {skillGroups.map((group) => (
            <div className="app__skills-group" key={group.label}>
              <h4 className="app__skills-group-label">{group.label}</h4>
              <div className="app__skills-group-items">
                {group.items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      whileInView={{ opacity: [0, 1], transition: { duration: 0.5 } }}
                      whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                      className="app__skills-item app__flex"
                      key={skill.name}
                    >
                      <div
                        className="app__flex app__skills-icon"
                        style={{ backgroundColor: `${skill.color}1A` }}
                      >
                        <Icon style={{ color: skill.color }} />
                      </div>
                      <p className="p-text">{skill.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="app__skills-exp">
          <div className="app__skills-exp-list">
            <div className="app__skills-exp-line" />
            {experiences.map((work, index) => (
              <motion.div
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="app__skills-exp-item"
                key={work.name}
              >
                <div className="app__skills-exp-card">
                  <div className="app__skills-exp-card-top">
                    <div className="app__skills-exp-logo">
                      {work.imgUrl ? (
                        <img src={work.imgUrl} alt={work.company} />
                      ) : (
                        <FiBriefcase />
                      )}
                    </div>
                    <div className="app__skills-exp-card-body">
                      <div className="app__skills-exp-header">
                        <span className="app__skills-exp-title">
                          {work.name}
                        </span>
                        <span className="app__skills-exp-year">{work.year}</span>
                      </div>
                      <p className="app__skills-exp-company">{work.company}</p>
                      <p className="app__skills-exp-desc">{work.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__skills-resume"
      >
        <a
          href="/Andrew-Mitchell-Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="app__skills-resbutton app__flex p-text"
          >
            Download My Resume
          </motion.button>
        </a>
      </motion.div>
    </>
  );
};

export default Experience;
