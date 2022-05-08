import React from 'react'
import './about.css';
import ME from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'
import { MdLibraryAddCheck } from 'react-icons/md'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='aboutImage' />
          </div>

        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1 year working</small>
            </article>
            <article className='about_card'>
              <MdLibraryAddCheck className='about_icon' />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
            {/* <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1 year working</small>
            </article> */}
          </div>
          <p></p>
          <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section >
  )
}

export default About;