import "./Navbar.scss";
import { NavLink } from "react-router-dom";

import { useState } from "react";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const drive =
    "";
  return (
    <>
      <div className="nav__cont">
        <div className="nav_menu_cont">
          <div
            className={click ? "mail mail_highlight" : "mail"}
            title="mail address"
          >
            {click == false ? (
              <img src="./icon/mail_black.svg" />
            ) : (
              <img src="./icon/mail_white.svg" />
            )}
            vibgreon@gmail.com
          </div>
          <div
            className="nav__menu"
            onClick={() => {
              setClick(!click);
            }}
          >
            {click == false ? (
              <img src="./icon/menu_black.svg" />
            ) : (
              <img src="./icon/exit_white.svg" />
            )}
          </div>
        </div>
        <div className="nav__subcont">
          <NavLink to={"/"}>
            <div className="nav__item">Home</div>
          </NavLink>
          <NavLink to={"/about"}>
            <div className="nav__item">about</div>
          </NavLink>
          {/* <a href={drive} target="_blank">
            <div className={"nav__item resume"} title="google drive link">
              <img src="./logo/logo-gdrive.svg" />
              resume
            </div>
          </a> */}
          <NavLink to={"/contact"}>
            <div className={"nav__item btn"}>contact</div>
          </NavLink>
        </div>
        <div className={click ? "nav__fs" : "nav__fs_close nav__fs"}>
          <div>
            <NavLink
              to={"/"}
              onClick={() => {
                setClick(!click);
              }}
            >
              <div>Home</div>
            </NavLink>
            <NavLink
              to={"/about"}
              onClick={() => {
                setClick(!click);
              }}
            >
              <div>About</div>
            </NavLink>
            {/* <NavLink
              to={"/contact"}
              onClick={() => {
                setClick(!click);
              }}
            >
              <div>Contact</div>
            </NavLink> */}
            {/* <a href={drive} target="_blank">
              <div className="drive_link">
                <div>Resume</div>
                <img src="./logo/logo-gdrive.svg" />
              </div>
            </a> */}
          </div>
          <div className="navbar-hidden-button">
            {/* <a href={drive} target="_blank">
                <img src="./logo/logo-gdrive.svg" />
                Resume
            </a> */}
            <NavLink
              to={"/contact"}
              onClick={() => {
                setClick(!click);
              }}
            >
              <div>Contact</div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
