import React from 'react'
import "./style.scss";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div className="footer" id='footer'>
        <div className="footer__content">
            <p>Copyright &copy; 2024 All Rights Reserved</p>
        </div>
        <div className="footer__social-icons">
          <p>Follow on:</p>
            <a href="https://www.linkedin.com/in/muhammad-farhan6918/"><FaLinkedin size={25}/></a>
            <a href="https://www.github.com/Mfarhan6918"><FaGithub size={25}/></a>
            <a href="https://www.instagram.com/farhan.scorpian"><FaInstagram size={25}/></a>
            <a href="https://www.facebook.com/farhan.scorpian"><FaFacebook size={25}/></a>
        </div>
    </div>
    </>
  )
}

export default Footer