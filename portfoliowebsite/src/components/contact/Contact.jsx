import React from 'react'
import './contact.css';
import { HiOutlineMail } from "react-icons/hi"
import { IoLogoWhatsapp } from "react-icons/io"
function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <HiOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>harjeetkaur.dhanjal@gmail.com</h5>
            <a href="tomail:harjeetkaur.dhanjal@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <IoLogoWhatsapp lassName='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+1(613)-914-8271</h5>
            <a href="https://api.whatsapp.com/send?phone=+16139148271">Send a message</a>
          </article>
          <form action=''>
            <input type='text' name='name' placeholder='Your Full Name' required></input>
            <input type='text' name='email' placeholder='Your Email' required></input>
            <textarea name='message' rows='7' placeholder='Your message' ></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;