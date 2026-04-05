import { useState, useEffect, useRef } from "react";

const YELLOW = "#E3FF73";

export default function CustomCursor({ x, y, label = "You" }) {
  const [displayLabel, setDisplayLabel] = useState("You");
  const currentLabel = useRef("You");
  const timeoutRef = useRef(null);

  useEffect(() => {
    const from = currentLabel.current;
    const to = label;
    if (from === to) return;

    const steps = [];

    // build delete steps
    for (let i = from.length - 1; i >= 0; i--) {
      steps.push(from.slice(0, i));
    }
    // build type steps
    for (let i = 1; i <= to.length; i++) {
      steps.push(to.slice(0, i));
    }

    let i = 0;
    const tick = () => {
      if (i >= steps.length) {
        currentLabel.current = to;
        return;
      }
      setDisplayLabel(steps[i]);
      i++;
      timeoutRef.current = setTimeout(tick, 40);
    };

    clearTimeout(timeoutRef.current);
    tick();

    return () => clearTimeout(timeoutRef.current);
  }, [label]);

  return (
    <div
      style={{
        position: "fixed",
        left: x,
        top: y,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(6px, 14px)",
      }}
    >
      <div
        style={{
          background: YELLOW,
          borderRadius: "20px",
          height: "24px",
          minWidth: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 14px",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            fontFamily: "Manrope",
            color: "#0a0a0a",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          {displayLabel}
        </span>
      </div>
    </div>
  );
}