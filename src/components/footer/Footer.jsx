import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs' 
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/janhavi-singh-89863622a/"><BsLinkedin/></a>
        <a href="https://api.whatsapp.com/send?phone=919651658266"><BsWhatsapp/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; janhavi singh. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer