import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
function Header() {
  return (
    <header>
      <div className='container header-container'>
        <h5>Hello I'm</h5>
        <h1>Harjeet Kaur</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='me' />
          {/* Hi there, Thanks for connecting. */}
        </div>
        <a href='#contact' className='scroll_down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header