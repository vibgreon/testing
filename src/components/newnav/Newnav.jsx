import { useState, useEffect } from "react";
import { useCursorProps } from "../cursor/CursorContext";
import "./Newnav.scss";

export default function Newnav() {
  const cursorProps = useCursorProps();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="newnav_wrapper">
        <div className="newnav_cont" {...cursorProps("Select and copy")}>
          <div className="newnav_left">
            <img loading="lazy" src="./icon/nav/mail.svg" />
            {isMobile ? (
              <a
                className="mail mail--link"
                href="mailto:vivekvenkatesh1234@gmail.com"
                {...cursorProps("Send mail >")}
              >
                Send mail
              </a>
            ) : (
              <span className="mail">vivekvenkatesh1234@gmail.com</span>
            )}
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