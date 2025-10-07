import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>Hello! My name is Muhammad Suhaim. As a recent graduate of PNY Training Lahore, I am a highly motivated and enthusiastic Full Stack Developer
 eager to contribute my skills to a dynamic team. My comprehensive training has equipped me with a strong
 foundation in both front-end and back-end technologies, including HTML, CSS, TailWind CSS, JavaScript,
 React, Node.js, Python, PHP, My SQL.  </p>
                        <br />
                        <p>I am a quick learner, adept at problem-solving, and passionate about
 creating efficient, user-friendly applications. I am seeking an opportunity to apply my knowledge,
 continuously grow, and make a meaningful impact in a professional development environment.</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
