import React from 'react'
import image1 from './Image/Nnamdi.jpg'
import image2 from './Image/chakra.png'
import image3 from './Image/github.png'
import image4 from './Image/css3.png'
import image5 from './Image/react.png'
import image6 from './Image/javaScript.png'
import image7 from './Image/html.png'
import { motion as m } from 'framer-motion'


function About() {
  return (
    <m.div 
    initial={{y: '100%'}}
    animate={{ y: '0%' }}
    transition={{ duration: 1, ease: 'easeOut' }}
    exit={{opacity: 1}}
    className='about'>
      <div className="intro mb">
        <img src={image1} alt="Me"  className='img'/>
        <div className="card name">
          <h1 className='mb'>Hello!!</h1>
          <p>I'm Nnamdi Nnuforole,<br />
            a budding React and WordPress devoloper<br />
            with a unique blend of skills<br />
            and sizeable amount experiences.<br />
            I graduated with a degree in Physics<br />
            from Michael Okpara University of Agriculture Umudike,<br />
            Nigeria, where my journey into the world began<br />
          </p>
        </div>
      </div>
      <div className="underline mb"></div>
      <div className="skill-mission flex mb">
        <div className="skills card">
          <h1 className='mb'>Skills</h1>
          <ul className='ul'>
            <li><span className='span'>React Development:</span>
              Proficient in crafting<br />
              dynamic and responsive user interfaces using React.Js
            </li><br />
            <li><span className='span'>WordPress Development:</span> Skilled in creating<br />
              customizeable and feature-rich websites with wordpress
            </li><br />
            <li><span className='span'>Quality Assurance:</span> Served as a Quality Assurance<br />
              Tester at Zealight Innovation Labs during my one year compulsory <br />
              National Youth Service Corps (NYSC), <br />
              ensuring the delivery of high-quality software products.
            </li><br />
          </ul>
        </div>
        <div className="mission card">
          <h1 className='mb'>Mission</h1>
          <p>I am a self-taught React developor passionate about leveraging my skills to create<br />
            innovative and seamless digital experiences. Whether <br />
            it's buiding dynamic web applications with React or crafting<br />
            feature-rich websites using WordPress, I am Dedicated to<br />
            pushing the boundaries of what technologgy can achieve.<br />
          </p>
        </div>

      </div>
      <div className="underline mb"></div>
      <div className="skill-image">
        <h1 className='mb'>My Skills</h1>
        <div>
          <img className='img' src={image7} alt="html-logo" />
          <img className='img' src={image4} alt="css-logo" />
          <img className='img' src={image6} alt="javaScript-logo" />
          <img className='img' src={image5} alt="react-logo" />
          <img className='img' src={image2} alt="chakra-logo" />
          <img className='img' src={image3} alt="github-logo" />
        </div>
      </div>


    </m.div>
  )
}

export default About