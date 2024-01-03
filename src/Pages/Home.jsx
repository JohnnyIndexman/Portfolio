import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from './Image/images (7).jpeg'
import { useNavigate, Link } from 'react-router-dom';
import { motion as m } from 'framer-motion'



function Home() {
  const words = [' React Developer', ' WordPress Developer', ' Quality Assurance Tester'];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  function type() {
    const currentWord = words[wordIndex];
    const shouldDelete = isDeleting ? 1 : -1;
    console.log(isDeleting)

    setText((current) => currentWord.substring(0, current.length - shouldDelete));

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((current) => (current + 1) % words.length);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => type(), isDeleting ? 100 : 200);

    return () => clearTimeout(timer);
  }, [type, isDeleting, text, wordIndex]);

  const greetings = () => {
    let currentTime = new Date().getHours()
    if (currentTime >= 0 && currentTime < 12) {
      return 'Good Morning'
    }
    else if (currentTime >= 12 && currentTime < 16) {
      return 'Good Afternoon'
    }
    else {
      return 'Good Evening'
    }

  }

  const backWards = useNavigate()

  function handleClick() {
    return backWards('/contact')
  }

  return (
    <m.div
      initial={{y: '100%'}}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
      exit={{opacity: 1}}
      className='home-page'>
      <div className="writeup">
        <m.h1
        initial={{y: '100%'}}
        animate={{y: '0%'}}
        transition={{delay:1, duration:1}}
        >Hi there, {greetings()}!!
        </m.h1>
        <m.h2
        initial={{y: '100%'}}
        animate={{y: '0%'}}
        transition={{delay:1, duration:1}}
        >I AM NNAMDI JOHN<br /> NNUFOROLE
         </m.h2>
        <m.h1 
        initial={{y: '100%'}}
        animate={{y: '0%'}}
        transition={{delay:1, duration:1}}
        className=''>A FrontEnd Developer
        </m.h1>
        <m.h3
        initial={{y: '100%'}}
        animate={{y: '0%'}}
        transition={{delay:1, duration:1}}
        >I Am A {text}
        </m.h3>
        <m.button
        initial={{y: '100%'}}
        animate={{y: '0%'}}
        transition={{delay:1, duration:1}} className='hover' onClick={handleClick}>Contact me
        </m.button>
      </div>
      <img src={Image} alt="nerd" />
      <div className="icons">

        {/*<div className="icons blue">*/}
        <Link to='https://github.com/JohnnyIndexman'>
          <FaGithub size='22px' className='hover' />
        </Link>
        <Link to='https://www.linkedin.com/in/nnamdi-nnuforole-6135b5250/'>
          <FaLinkedin size='22px' className='hover' />
        </Link>

        {/*</div>*/}
      </div>
    </m.div>
  )
}

export default Home