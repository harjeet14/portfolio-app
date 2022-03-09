import React from 'react'
import './header.css'
import CTA from './CTA'
function Header() {
  return (
    <header>
      <div className='container header-container'>
        <h5>Hello I'm</h5>
        <h1>Harjeet Kaur</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA></CTA>
      </div>
    </header>
  )
}

export default Header