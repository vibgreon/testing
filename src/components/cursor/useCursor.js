import { useState, useEffect } from "react";

export default function useCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState("You");
  const resetLabel = () => setLabel("You");

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const cursorProps = (cursorLabel) => ({
    onMouseEnter: () => setLabel(cursorLabel),
    onMouseLeave: () => setLabel("You"),
  });

  return { pos, label, cursorProps, resetLabel };
}