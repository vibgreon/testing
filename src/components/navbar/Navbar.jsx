import MyCharacter from "../../components/rive/MyCharacter";

import "./Navbar.scss";
import { useCursorProps } from "../../components/cursor/CursorContext";

import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const cursorProps = useCursorProps();
  return (
    <>
      <div className="nav_cont">
        {isHome ? (
          <div className="nav_cont__content">
            <div>Recap 2025 - Present</div>
            <div>
              Currently designing <a href="https://www.sahi.com/" target="__blank" {...cursorProps("B2C Fintech")}>Sahi - High Frequency Trading</a> and <a href="https://greylabs.ai/" target="__blank" {...cursorProps("B2B SaaS Voice AI")} >GreyLabs AI</a>
            </div>
          </div>
        ) : (
          <div className="nav_back" onClick={() => navigate(-1)}>
            <img src="/icon/nav/nav-arrow-left.svg" />
          </div>
        )}
        <div className="nav_cont_navigation">
          <div className="nav_rive_canvas">
            <MyCharacter />
          </div>
          <div className="nav_cont_link">
            <NavLink to={"/"}>
              <div>Home</div>
            </NavLink>
            <NavLink to={"/contact"}>
              <div>Contact</div>
            </NavLink>
            <a href="https://drive.google.com/file/d/1hIrXyFJHMOO2-UoYIaBvOY1JK_V1P0Vv/view?usp=sharing" target="__blank">
              <div className="nav_btn">Resume</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
