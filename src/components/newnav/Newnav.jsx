import { useCursorProps } from "../cursor/CursorContext";

import "./Newnav.scss";

export default function Newnav() {
  const cursorProps = useCursorProps();
  return (
    <>
      <div className="newnav_wrapper">
        <div className="newnav_cont" {...cursorProps("Select and copy")}>
          <div className="newnav_left">
            <img loading="lazy" src="./icon/nav/mail.svg" />
            <span className="mail">vivekvenkatesh1234@gmail.com</span>
          </div>
          <div className="newnav_right">
            <a
              href="https://drive.google.com/file/d/1hIrXyFJHMOO2-UoYIaBvOY1JK_V1P0Vv/view"
              target="_self"
              {...cursorProps("Google Drive >")}
            >
              <span className="resume">Resume</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vibgreon/"
              target="_self"
              {...cursorProps("LinkedIn >")}
            >
              <img loading="lazy" src="./icon/nav/linkedin.svg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
