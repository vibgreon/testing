import { NavLink } from "react-router-dom";

import { useCursorProps } from "../cursor/CursorContext";

import "./Footer.scss";

export default function Footer() {
  const cursorProps = useCursorProps();
  return (
    <div className="footer_wrapper">
      <div className="footer_cont">
        <div className="footer_cont_top">
          <div className="footer_cont_top_content">
            <div>
              <img src="/icon/footer/sun-light.svg" />
              Currently in Bengaluru, India
            </div>
            <div>
              Design systems and experiences that help people learn, decide, and
              move forward.
            </div>
          </div>
          <div className="footer_cont_top_link">
            <div className="footer_cont_top_link_cont">
              <div className="footer_cont_top_link_cont_title">menu</div>
              <div className="footer_cont_top_link_cont_item">
                <NavLink to={"/"}>
                  <div>Home</div>
                </NavLink>
                <NavLink to={"/about"}>
                  <div>About</div>
                </NavLink>
                <NavLink to={"/contact"}>
                  <div>Contact</div>
                </NavLink>
              </div>
            </div>
            <div className="footer_cont_top_link_cont">
              <div className="footer_cont_top_link_cont_title">info</div>
              <div className="footer_cont_top_link_cont_item">
                <div {...cursorProps("Hold and copy")}>vivekvenkatesh1234@gmail.com</div>
                <div {...cursorProps("Hold and copy")}>+91 87091 85560</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_cont_bottom">
          <div>Made with curiosity. For humans, by human.</div>
          <div>
            <a href="https://www.linkedin.com/in/vibgreon/" target="_blank">
              <img src="/icon/footer/linkedin.svg" />
            </a>
            <a href="https://linktr.ee/vibgreon" target="_blank">
              <img src="/icon/footer/linktree.svg" />
            </a>
            <a href="https://github.com/vibgreon" target="_blank">
              <img src="/icon/footer/github.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
