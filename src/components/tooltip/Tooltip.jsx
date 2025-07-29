import "./Tooltip.scss";
import { useState, useEffect } from "react";

export default function Tooltip({ children, message }) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };
    checkTouchDevice();
  }, []);

  const handleToggle = () => {
    if (isTouchDevice) setShow(prev => !prev);
  };

  return (
    <div
      className={`tt-cont ${isTouchDevice ? "touch" : "hover"}`}
      onClick={handleToggle}
    >
      <div className={`tt_message-cont ${show ? "visible" : ""}`}>{message}</div>
      <div className="tt_item-cont">{children}</div>
    </div>
  );
}
