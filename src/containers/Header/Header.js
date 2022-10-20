import React from 'react'
import "./Header.scss"
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap } from "../../wrappper"

/*const scaleVariants = {
  whileInView:{
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
*/

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{opacity: [0,1]}}
        transition={{duration: 1.5}}
      >
        <h1 className='app__header-title'>Andrew <span>Mitchell</span></h1>
        <p className='app__header-subtitle'>Computer Engineering Undergraduate Student</p>
        <motion.div
          transition={{delayChildren: 2}}
          className="app__header-c"
        >
          <motion.div 
            className='app__header-circle'
            whileInView={{scale: [0,1]}}
            transition={{duration: 1}} 
          >
            <motion.img 
              src={images.circle1} 
              alt="" 
              animate={{ rotate: 360 }}
              transition={{
                loop: Infinity,
                ease: "linear",
                duration: 100
              }}
            />
          </motion.div>
          <motion.div 
            className='app__header-circle'
            whileInView={{scale: [0,1]}}
            transition={{duration: 1}} 
          >
            <motion.img 
              src={images.circle2} 
              alt="" 
              animate={{ rotate: 360 }}
              transition={{
                loop: Infinity,
                ease: "linear",
                duration: 30
              }}
            />
          </motion.div>
          <motion.div 
            className='app__header-circle'
            whileInView={{scale: [0,1]}}
            transition={{duration: 1}} 
          >
            <motion.img 
              src={images.circle3} 
              alt="" 
              animate={{ rotate: 360 }}
              transition={{
                loop: Infinity,
                ease: "linear",
                duration: 75
              }}
            />
          </motion.div>
          <motion.div 
            className='app__header-circle'
            whileInView={{scale: [0,1]}}
            transition={{duration: 1}} 
          >
            <motion.img 
              src={images.circle4} 
              alt="" 
              animate={{ rotate: 360 }}
              transition={{
                loop: Infinity,
                ease: "linear",
                duration: 100
              }}
            />
          </motion.div>
          <motion.div 
            className='app__header-circle'
            whileInView={{scale: [0,1]}}
            transition={{duration: 1}} 
          >
            <motion.img 
              src={images.circle5} 
              alt="" 
              animate={{ rotate: 360 }}
              transition={{
                loop: Infinity,
                ease: "linear",
                duration: 50
              }}
            />
          </motion.div>
        </motion.div>

      </motion.div>
      {/*
      <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0,1]}}
        transition={{duration: 0.5}}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app-flex'>
            <span>👋</span>
            <div style={{marginLeft:20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Andrew</h1>
            </div>
          </div>
          <div className='app__flex tag-cmp'>
            <p className='p-text'>Computer Engineer</p>
            <p className='p-text'>Undergraduate Student</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity: [0,1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0,1]}}
          transition={{duration: 1, ease: "easeInOut"}}
          src={images.circle}
          alt="profile_circle"
          className="overlay-circle"
        />
      </motion.div>

      <motion.div
        variant = {scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.python, images.react, images.javascript].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle"/>
          </div>
        ))}
      </motion.div>
        */}
    </div>
  )
}

export default AppWrap(Header, 'home')
