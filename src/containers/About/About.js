import React from 'react'
import "./About.scss"
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrappper'
/*
const abouts = [
  { title: 'Web Development', description: "I am a good web developer", imgUrl: images.ctf},
  { title: 'Web Design', description: "I am a good web designer", imgUrl: images.ctf},
  { title: 'UI/UX', description: "I am a good ui/ux developer", imgUrl: images.ctf}
]
*/

const About = () => {
  return (
    <>
      <h2 className='head-text'>About <span>Me</span></h2>
      <div className='app__flex app__profiles'>
        <p className='app__about-text'>
          I am an undergraduate student at the University of Notre Dame,
          currently studying to get a Bachelor's Degree of Science in Computer Engineering. I have been 
          programming in some form or another since 5th grade and it has become a passion of mine. I am
          always searching for new things to learn, and I enjoy problem-solving.
        </p>
      </div>

      {/*
      <h2 className='head-text'>I Know That <span>Good Development</span><br /> means <span>Good Business</span></h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <h2 className='p-text' style={{marginTop: 10}}>{about.description}</h2>
          </motion.div>
        ))}
      </div>
      */}
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')