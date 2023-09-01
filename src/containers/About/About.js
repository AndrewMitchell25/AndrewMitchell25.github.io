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
          currently studying to get a Bachelor's Degree of Science in Computer Engineering. <br />
          I have loved programming from a young age. I started coding video games with Scratch 
          and taught myself the basics of Python when I was in fifth grade. Since then, I have 
          continued to develop video games with C# using Unity, learned C and Python in class, 
          and have recently delved into JavaScript and web development. With every project, my 
          love for programming has only grown more intense, and, when coupled with my passion for 
          learning, has allowed me to develop skills in a wide variety of software development 
          fields, including cybersecurity and app development.

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