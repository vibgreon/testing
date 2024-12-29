import "./Navbar.scss";
import { NavLink } from "react-router-dom";

import { useState } from "react";

export default function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="nav__cont">
        <div className="nav_menu_cont">
          <a href="vivekvenkatesh1234@gmail.com">
            <div className={click ? "mail_highlight" : ""} title="mail address">
              vivekvenkatesh1234@gmail.com
            </div>
          </a>
          <div
            className="nav__menu"
            onClick={() => {
              setClick(!click);
            }}
          >
            {click == false ? (
              <img src="./icon/menu.svg" />
            ) : (
              <img src="./icon/exit.svg" />
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
          <a href="https://drive.google.com/file/d/1vmfhK_7Zb-RnlbX46QHOWcVjKdTP3d7y/view?usp=sharing" target="_blank">
            <div className={"nav__item resume"} title="google drive link">
              <img src="./logo/google_drive.svg" />
              resume
            </div>
          </a>
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
            <a href="https://drive.google.com/file/d/1vmfhK_7Zb-RnlbX46QHOWcVjKdTP3d7y/view?usp=sharing" target="_blank">
              <div>Resume</div>
            </a>
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
