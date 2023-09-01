import React from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from "../../wrappper"
import { images } from '../../constants'
//import ReactTooltip from "react-tooltip"
import "./Skills.scss"

const skills = [
  {name: 'C', imgUrl: images.c, bgColor: '#edf2fa'},
  {name: 'Python', imgUrl: images.python, bgColor: '#edf2fa'},
  {name: 'JavaScript', imgUrl: images.javascript, bgColor: '#edf2fa'},
  {name: 'React', imgUrl: images.react, bgColor: '#edf2fa'},
  {name: 'HTML', imgUrl: images.html, bgColor: '#edf2fa'},
  {name: 'CSS', imgUrl: images.css, bgColor: '#edf2fa'},
  {name: 'Git', imgUrl: images.git, bgColor: '#edf2fa'},
  {name: 'GitHub', imgUrl: images.github, bgColor: '#edf2fa'}
]

const experiences = [
  {name: 'Computer Consultant', company: 'Engineering & Science Computing at Notre Dame', description: "Process and image new laptops and desktops, set-up and deliver computers to staff, and assist faculty with troubleshooting IT problems.", year: '2022-2023'},
  {name: 'Software Engineering Intern', company: 'NASA Jet Propulsion Laboratory', description: "Worked with a partner to improve the DSN Telemetry Accountability Project under the Deep Space Network Emulator team, which tracks telemetry data as it travels from spacecraft to JPL by generating accountability records at specific venues along the path. Used C to implement new capabilities which allow the project to handle multiple different types of telemetry data simultaneously and process each stream correctly.", year: '2023'},
  {name: 'Customer Service Associate', company: 'Fountain Bowl', description: "Solved customer problems and provided a clean and healthy environment at a local bowling alley.", year: '2022'},
  {name: 'Personal Tutor', company: 'Self Employed', description: "Created and implemented lesson plans in various subjects for middle and high school students, teaching challenging topics in one-on-one tutoring sessions.", year: '2018-2021'}
]

const Skills = () => {
  return (
    <>
      <h2 className='head-text'>Skills & <span>Experience</span></h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div 
              whileInView={{opacity:[0,1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className='app__flex' style={{backgroundColor:skill.bgColor}}>
                <img src={skill.imgUrl} alt={skill.name}/>
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className='app__skills-exp'>
          <motion.div className='app__skills-exp-item'>
            {experiences.map((work) => (
              <div key={work.name}>
                <motion.div
                  whileInView={{opacity:[0,1]}}
                  transition={{duration: 0.5}}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={work.name}
                >
                  <h4 className='bold-text'>{work.name}</h4>
                  <p className='p-text'>{work.year}</p>
                  <p className='p-text'>{work.company}</p>
                  <p className='p-text'>{work.description}</p>
                </motion.div>
                {/*<ReactTooltip
                  id={work.name}
                  effect='solid'
                  arrowColor='#fff'
                  className='skills-tooltip'
                >
                  {work.description}
                </ReactTooltip> */}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div 
        whileInView={{opacity:[0,1]}}
        transition={{duration: 0.5}}
        className='app__skills-resume'
      >
        <a href={process.env.PUBLIC_URL + "AndrewMitchell_Resume.pdf"} target="_blank" rel='noreferrer'>
          <motion.button
          whileHover={{scale: 1.1}}
          className="app__skills-resbutton app__flex p-text"
          >
            Download My Resume
          </motion.button>
        </a>
      </motion.div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg')