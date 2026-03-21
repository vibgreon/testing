import MyCharacter from "../../components/rive/MyCharacter";

import "./Navbar.scss";

import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  return (
    <>
      <div className="nav_cont">
        {isHome ? (
          <div className="nav_cont__content">
            <div>Recap 2025 - Present</div>
            <div>
              {`With past experience in Mutual Funds Advisory (B2C) and Global Health Insurance Aggregation (B2B2C SaaS), since summer 2025 I have been building Voice AI solutions in the B2B SaaS space while simultaneously working with an Indian brokerage firm that grew into a top 30 company during my tenure.`}
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
            <NavLink to={"/about"}>
              <div>About</div>
            </NavLink>
            <NavLink to={"/contact"}>
              <div className="nav_btn">Contact</div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
