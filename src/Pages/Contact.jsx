import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion as m } from 'framer-motion'

export const Contact = () => {
  const form = useRef();

  const [nameError, setNameError] = useState('')
  const [mailError, setMailError] = useState('')
const [messageError, setMessageError] = useState('')
  let isValid = false

  const validate = () => {
    if (!form.current || !form.current.name || form.current.name.value === '') {
      setNameError('Name is required!');
      isValid = false;
    }
  
   else if (!form.current || !form.current.email || form.current.email.value === '') {
      setMailError('Email is required!');
      isValid = false;
    }
  
    else if (!form.current || !form.current.message || form.current.message.value === '') {
      setMessageError('Message is required!');
      isValid = false;
    }
    else{
      isValid = true
      setMailError('')
      setMessageError('')
      setNameError('')
    }
  
   /* setError('');
    return true;*/
  };



  const sendEmail = (e) => {
    e.preventDefault();
    validate()
    if(!isValid){
      return
    }
      emailjs.sendForm('service_n6wbrrt', 'template_0cyh3rm', form.current, 'QblXBudopYQofeY6R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  
  return (
    <m.div
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className='contact mb'>
      <div className="contact-contain">
        <div className="form mb">
          <h1>Contact Me</h1>
          <p>Thank you for stopping by! I appreciate your interest in connecting. <br />
            I'm thrilled to hear from you.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input type="text"
              name="user_name"
              id="name"
            />
            <span>
              {nameError}
            </span>
            <label htmlFor="email">Email</label>
            <input type="email"
              name="user_email"
              id="email"
            />
             <span>{mailError}</span>
            <label>Message</label>
            <textarea name="message"
              placeholder='Enter Your Message Here...'
              className='textarea'
            />
             <span>{messageError}</span>
            <button className='button'
              type='submit'
            >Send
            </button>
          </form>

        </div>
        <div className="info">
          <h1>Info</h1>
          <div className="mail">
            <MdOutlineMailOutline size='23px' />
            <p>nnamdi.nnuforole@gmail.com</p>
          </div>
          <div className="call mail">
            <FaPhone size='23px' />
            <p>+234 808-380-5705</p>
          </div>

        </div>
      </div>

    </m.div>
  )
}

export default Contact