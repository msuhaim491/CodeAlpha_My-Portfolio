import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav} ><Link  to="//wa.me/923396100700" target='_blank' className='nav-link'><FaWhatsapp /></Link></li>
        <li onClick={handleNav} ><Link  to="//www.linkedin.com/in/muhammad-suhaim-b0749b371/" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
        <li onClick={handleNav} ><Link  to="//github.com/msuhaim491" target='_blank' className='nav-link'><BsGithub /></Link></li>
        <li onClick={handleNav} ><a  href="mailto:muhammedsuhaim32@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Muhammad%2C%0A" target='_blank' className='nav-link' rel="noreferrer"><BiEnvelope /></a></li>
  </ul>
  )
};

export default NavLinks;
