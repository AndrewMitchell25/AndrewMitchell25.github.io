import React from 'react'
import "./About.scss"
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrappper'

const abouts = [
  { title: 'Web Development', description: "I am a good web developer", imgUrl: images.ctf},
  { title: 'Web Design', description: "I am a good web designer", imgUrl: images.ctf},
  { title: 'UI/UX', description: "I am a good ui/ux developer", imgUrl: images.ctf}
]

const About = () => {
  return (
    <>
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
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')