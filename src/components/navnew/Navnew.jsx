import { useState, useEffect, useRef } from "react";
import { useCursorProps } from "../cursor/CursorContext";
import { NavLink, useLocation } from "react-router-dom";

import "./Navnew.scss";

function formatTime(seconds) {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  }
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h}h ${m}m ${s}s`;
}

export default function Navnew() {
  const cursorProps = useCursorProps();
  const [toast, setToast] = useState(false);
  const location = useLocation();
  const [elapsed, setElapsed] = useState(() => {
    return parseInt(localStorage.getItem("site_time") || "0", 10);
  });
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 1;
        localStorage.setItem("site_time", next);
        return next;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleCopyMail = () => {
    navigator.clipboard.writeText("vivekvenkatesh1234@gmail.com").then(() => {
      setToast(true);
      setTimeout(() => setToast(false), 2000);
    });
  };

  return (
    <>
      <div className="navnew_wrapper">
        {location.pathname !== "/" && (
          <NavLink to={"/"} className="home">
            <img
              loading="lazy"
              src="./icon/nav/home.svg"
              alt="go to homepage"
            />
            <div>Go home</div>
          </NavLink>
        )}
        <div className={`global_info${location.pathname !== "/" ? " non-home" : ""}`}>
          <div>Bengaluru<span>, India</span></div>
          <div>{formatTime(elapsed)} in</div>
        </div>
        <div
          className="button"
          {...cursorProps("vivekvenkatesh1234@gmail.com")}
          onClick={handleCopyMail}
        >
          copy Mail
        </div>
        <a
          className="button"
          {...cursorProps("Google Drive >")}
          href="https://drive.google.com/file/d/1JQEop8xc1GmbiU92fzivFbzLWU-OfYQX/view?usp=sharing"
          target="_self"
        >
          <div>Resume</div>
        </a>
      </div>
      <div className="forecast">
        <img loading="lazy" src="./icon/nav/calendar.svg" />
        Forecast. <NavLink to={"/forecast"}>Know more</NavLink>
      </div>
      {toast && <div className="toast">Email copied! Paste to use.</div>}
    </>
  );
}
