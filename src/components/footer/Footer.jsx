import { useCursorProps } from "../cursor/CursorContext";

import "./Footer.scss";

export default function Footer() {
  const cursorProps = useCursorProps();
  return (
    <div className="footer_wrapper">
      <div className="footer_cont">
        <div>Made with curiosity. For humans, by human.</div>
        <div className="footer_link_cont">
          <div {...cursorProps("Under maintenance")}>Archive</div>
          <a href="https://www.linkedin.com/in/vibgreon/" target="_self">
            <img
              loading="lazy"
              src="./icon/footer/linkedin.svg"
              {...cursorProps("LinkedIn >")}
            />
          </a>
          <a href="https://drive.google.com/file/d/1hIrXyFJHMOO2-UoYIaBvOY1JK_V1P0Vv/view" target="_self">
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
