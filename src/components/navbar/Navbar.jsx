import "./Navbar.scss";

import { useState } from "react";

export default function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="nav__cont">
        <div className="nav_menu_cont">
          <div
            className={click ? "pointer mail_highlight" : "pointer"}
            title="mail address"
          >
            vivekvenkatesh1234@gmail.com
          </div>
          <div
            className="nav__menu"
            onClick={() => {
              setClick(!click);
            }}
          >
            {click == false ? (
              <img src="/icon/menu.svg" />
            ) : (
              <img src="/icon/exit.svg" />
            )}
          </div>
        </div>
        <div className="nav__subcont">
          {/* <div className="nav__item">work</div> */}
          <div className="nav__item">about</div>
          <div
            className={`${"nav__item"} ${"pointer"}`}
            title="google drive link"
          >
            <img src="/logo/google_drive.svg" />
            resume
          </div>
          <div className="nav__item">contact</div>
        </div>
        <div className={click ? "nav__fs" : "nav__fs_close nav__fs"}>
          <div>
            <div>About</div>
            <div>Resume</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
    </>
  );
}
