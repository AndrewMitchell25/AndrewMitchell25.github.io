import React from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from "../../wrappper"
import { images } from '../../constants'
import ReactTooltip from "react-tooltip"
import "./Skills.scss"

const skills = [
  {name: 'React', imgUrl: images.react, bgColor: '#edf2fa'},
  {name: 'C', imgUrl: images.c, bgColor: '#edf2fa'},
  {name: 'Python', imgUrl: images.python, bgColor: '#edf2fa'},
  {name: 'Git', imgUrl: images.git, bgColor: '#edf2fa'},
  {name: 'HTML', imgUrl: images.html, bgColor: '#edf2fa'},
  {name: 'CSS', imgUrl: images.css, bgColor: '#edf2fa'},
  {name: 'JavaScript', imgUrl: images.javascript, bgColor: '#edf2fa'}
]

const experiences = [
  {name: 'Computer Consultant', company: 'Engineering & Science Computing at Notre Dame', description: "", year: '2022'},
  {name: 'Customer Service Associate', company: 'Fountain Bowl', description: "", year: '2022'},
  {name: 'Volunteer Project Member', company: 'CS4Good', description: "", year: '2022'},
  {name: 'Personal Tutor', company: 'Self Employed', description: "", year: '2018-2021'}
]

const Skills = () => {
  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

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
                </motion.div>
                <ReactTooltip
                  id={work.name}
                  effect='solid'
                  arrowColor='#fff'
                  className='skills-tooltip'
                >
                  {work.description}
                </ReactTooltip>
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
        <a href={process.env.PUBLIC_URL + "Andrew_Mitchell_Resume.pdf"} target="_blank" rel='noreferrer'>
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