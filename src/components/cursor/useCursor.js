import { useState, useEffect, useRef } from "react";

export default function useCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState("You");
  const idleTimer = useRef(null);

  const resetLabel = () => setLabel("You");

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      clearTimeout(idleTimer.current);
    };
  }, []);

  const cursorProps = (cursorLabel) => ({
    onMouseEnter: () => {
      setLabel(cursorLabel);
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setLabel("You"), 5000);
    },
    onMouseLeave: () => {
      setLabel("You");
      clearTimeout(idleTimer.current);
    },
  });

  return { pos, label, cursorProps, resetLabel, setLabel };
}