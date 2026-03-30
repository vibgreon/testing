import { useCursorProps } from "../cursor/CursorContext";
import { NavLink } from "react-router-dom";

import "./Footer.scss";

export default function Footer() {
  const cursorProps = useCursorProps();
  return (
    <div className="footer_wrapper">
      <div className="footer_cont">
        <div>Made with curiosity. For humans, by human.</div>
        <div className="footer_link_cont">
          <NavLink to={"/recap-2024"} {...cursorProps("Past works >")}>
            <div>Archive 2024</div>
          </NavLink>
          <a href="https://www.linkedin.com/in/vibgreon/" target="_self">
            <img
              loading="lazy"
              src="./icon/footer/linkedin.svg"
              {...cursorProps("LinkedIn >")}
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1Y28U7zbBV20NM23q2IkoTPRNqePDfIG5/view?usp=sharing"
            target="_self"
          >
            <img
              loading="lazy"
              src="./icon/footer/gdrive.svg"
              {...cursorProps("Resume >")}
            />
          </a>
          <a href="https://medium.com/@vibgreon" target="_self">
            <img
              loading="lazy"
              src="./icon/footer/medium.svg"
              {...cursorProps("Medium >")}
            />
          </a>
          <a href="https://github.com/vibgreon" target="_self">
            <img
              loading="lazy"
              src="./icon/footer/github.svg"
              {...cursorProps("Github >")}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
