import { useState, useEffect, useRef } from "react";

const YELLOW = "#E3FF73";

export default function CustomCursor({ x, y, label }) {
  const [expanded, setExpanded] = useState(false);
  const [displayLabel, setDisplayLabel] = useState("");
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (label) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setExpanded(true);
        setDisplayLabel(label);
      }, 80);
    } else {
      clearTimeout(timeoutRef.current);
      setExpanded(false);
      setDisplayLabel("");
    }
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
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        style={{
          background: YELLOW,
          borderRadius: expanded ? "20px" : "50%",
          height: "24px",
          minWidth: expanded ? "64px" : "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: expanded ? "0 14px" : "0",
          transition:
            "border-radius 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), min-width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), padding 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          overflow: "hidden",
          whiteSpace: "nowrap"
        }}
      >
        <span
          style={{
            color: "#0a0a0a",
            fontSize: "12px",
            fontWeight: 500,
            opacity: expanded ? 1 : 0,
            transition: "opacity 0.2s ease 0.1s",
          }}
        >
          {displayLabel}
        </span>
      </div>
    </div>
  );
}
