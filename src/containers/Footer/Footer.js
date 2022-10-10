import React, { useRef, useState } from 'react'
import { AppWrap, MotionWrap } from "../../wrappper"
import { MdMailOutline } from "react-icons/md"
import { GiSmartphone } from "react-icons/gi"
import emailjs from '@emailjs/browser';

import "./Footer.scss"

const Footer = () => {
  const form = useRef()
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);

    emailjs.sendForm('portfolio_contact_serv', 'portfolio_contact_form', form.current, 'uOEIZCFc2iNCwUbis')
        .then((result) => {
            setIsFormSubmitted(true);
            setLoading(false);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  }

  return (
    <>
      <h2 className='head-text'>Contact me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <MdMailOutline />
          <a href="mailto:andrew.j.mitchell.247@gmail.com" className="p-text">andrew.j.mitchell.247@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <GiSmartphone />
          <a href="tel:+1 (714) 357-1663" className="p-text">+1 (714) 357-1663</a>
        </div>
      </div>

      {!isFormSubmitted ? 
        <form ref={form} onSubmit={handleSubmit} className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type="text" placeholder="Your Name" name="name" />
          </div>
          <div className='app__flex'>
            <input className='p-text' type="email" placeholder="Your Email" name="email" />
          </div>
          <div>
            <textarea className='p-text'placeholder='Your Message' name="message" />
          </div>
          <button type='submit' className='p-text'>{loading ? 'Sending' : 'Send Message'}</button>
        </form>
      : 
        <h3 className='head-text'>Thank you for getting in touch!</h3>
      }

    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg')