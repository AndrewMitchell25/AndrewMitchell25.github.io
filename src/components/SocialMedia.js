import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export default function SocialMedia() {
  return (
    <div className='app__social'>
      <a href='https://github.com/AndrewMitchell25' target="_blank" rel='noreferrer'>
        <BsGithub />
      </a>
            
      <a href='https://www.linkedin.com/in/andrew-mitchell-572710225/' target="_blank" rel='noreferrer'>
        <BsLinkedin />
      </a>
    </div>
  )
}
