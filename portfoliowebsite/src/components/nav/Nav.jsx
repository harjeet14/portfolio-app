import React from 'react'
import './nav.css'
import { FiHome } from 'react-icons/fi'
import { BiUserCircle } from 'react-icons/bi'
import { BiBookReader } from 'react-icons/bi'
// import { MdMedicalServices } from 'react-icons/md'
import { AiOutlineContacts } from 'react-icons/ai'
import { useState } from 'react'
function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookReader /></a>
      {/* <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdMedicalServices /></a> */}

      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineContacts /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts /></a>
    </nav >
  )
}

export default Nav