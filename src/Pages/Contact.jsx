import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion as m } from 'framer-motion'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
            <label>Name</label>
            <input type="text"
              name="user_name"
            />
            <span></span>
            <label>Email</label>
            <input type="email"
              name="user_email"
            />
             <span></span>
            <label>Message</label>
            <textarea name="message"
              placeholder='Enter Your Message Here...'
              className='textarea'
            />
             <span></span>
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