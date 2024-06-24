import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import farhanImg from '../navBar/logo.png'
import "./style.scss";

// const data = [
//   {
//     label: "HOME",
//     to: "home",
//   },
//   {
//     label: "ABOUT ME",
//     to: "about",
//   },
//   {
//     label: "SKILLS",
//     to: "skills",
//   },
//   {
//     label: "RESUME",
//     to: "resume",
//   },
//   {
//     label: "PORTFOLIO",
//     to: "portfolio",
//   },
//   {
//     label: "CONTACT",
//     to: "contact",
//   },
// ];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <a href="/" className="navbar__container__logo">
            <img src={farhanImg} alt="Logo" style={{width:"100%"}} />
          </a>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : "" } `}>
            <li className="navbar__container__menu__item">
              <a className="navbar__container__menu__item__links" href='#home'>HOME</a>
            </li>
            <li className="navbar__container__menu__item">
              <a className="navbar__container__menu__item__links" href='#about'>ABOUT ME</a>
            </li>
            <li className="navbar__container__menu__item">
              <a className="navbar__container__menu__item__links" href='#resume'>RESUMES</a>
            </li>
            <li className="navbar__container__menu__item">
              <a className="navbar__container__menu__item__links" href='#skills'>SKILLS</a>
            </li>
            <li className="navbar__container__menu__item">
              <a className="navbar__container__menu__item__links" href='#portfolio'>PORTFOLIO</a>
            </li>
            <li className="navbar__container__menu__item">
              <a className="navbar__container__menu__item__links" href='#contact'>CONTACT</a>
            </li>
        </ul>
        <div className="nav_icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
