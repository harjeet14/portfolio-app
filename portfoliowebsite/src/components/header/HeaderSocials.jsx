import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
function HeaderSocials() {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/in/harjeet-kaur-373675146/' target="_blank"><FiLinkedin /></a>
      <a href='https://github.com/harjeet14' target="_blank"><BsGithub /></a>
      <a href='https.gmail.com' target="_blank"><CgMail /></a>
    </div>
  )
}

export default HeaderSocials