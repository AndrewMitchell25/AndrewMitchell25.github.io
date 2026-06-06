"use client";

import { useRef, useState, FormEvent } from "react";
import { MdMailOutline } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";
import emailjs from "@emailjs/browser";
import "./Footer.scss";

const Footer = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          "portfolio_contact_serv",
          "portfolio_contact_form",
          form.current,
          "uOEIZCFc2iNCwUbis"
        )
        .then(
          (result) => {
            setIsFormSubmitted(true);
            setLoading(false);
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
          }
        );
    }
  };

  return (
    <>
      <h2 className="head-text">
        Contact <span>Me</span>
      </h2>

      <div className="app__footer-content">
        <div className="app__footer-info">
          <div className="app__footer-card">
            <MdMailOutline />
            <a
              href="mailto:andrew.j.mitchell.247@gmail.com"
              className="p-text"
            >
              andrew.j.mitchell.247@gmail.com
            </a>
          </div>
          <div className="app__footer-card">
            <GiSmartphone />
            <a href="tel:+1 (714) 357-1663" className="p-text">
              +1 (714) 357-1663
            </a>
          </div>
        </div>

        {!isFormSubmitted ? (
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="app__footer-form"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="name"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
            />
            <textarea
              placeholder="Your Message"
              name="message"
            />
            <button type="submit">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        ) : (
          <div className="app__footer-success">
            <h3>Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
