import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='contact mb'>
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
            <label>Email</label>
            <input type="email"
              name="user_email"
            />
            <label>Message</label>
            <textarea name="message"
              placeholder='Enter Your Message Here...'
              className='textarea'
            />
           {/* <input type="submit"
              value="Send"
              className='button'
  />*/}
            <button className='button'
            onSubmit={sendEmail}
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

    </div>
  )
}

export default Contact