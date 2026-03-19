import { useState, useEffect } from "react";

export default function useCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState(null);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const cursorProps = (cursorLabel) => ({
  onMouseEnter: () => {
    // console.log("entered:", cursorLabel);
    setLabel(cursorLabel);
  },
  onMouseLeave: () => setLabel(null),
  style: { cursor: "none" },
});

  return { pos, label, cursorProps };
}