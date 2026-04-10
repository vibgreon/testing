import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { motion, useAnimationControls } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import "./GooeyPixelTrail.scss";
import {
  useCursorProps,
  useCursorSetLabel,
} from "../../components/cursor/CursorContext";

// ---------------------------------------------------------------------------
// useDimensions
// ---------------------------------------------------------------------------
function useDimensions(ref) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let timeoutId;

    const updateDimensions = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    const debouncedUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDimensions, 250);
    };

    updateDimensions();
    window.addEventListener("resize", debouncedUpdate);

    return () => {
      window.removeEventListener("resize", debouncedUpdate);
      clearTimeout(timeoutId);
    };
  }, [ref]);

  return dimensions;
}

// ---------------------------------------------------------------------------
// useScreenSize
// ---------------------------------------------------------------------------
const BREAKPOINTS = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 };

function useScreenSize() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    width,
    lessThan: (bp) => width < (BREAKPOINTS[bp] ?? 0),
    greaterThan: (bp) => width > (BREAKPOINTS[bp] ?? 0),
  };
}

// ---------------------------------------------------------------------------
// GooeyFilter
// ---------------------------------------------------------------------------
function GooeyFilter({ id = "goo-filter", strength = 10 }) {
  return (
    <svg className="gooey-filter__svg">
      <defs>
        <filter id={id}>
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={strength}
            result="blur"
          />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// PixelDot
// ---------------------------------------------------------------------------
const PixelDot = React.memo(function PixelDot({
  id,
  size,
  fadeDuration,
  delay,
  className,
}) {
  const controls = useAnimationControls();

  const animatePixel = useCallback(() => {
    controls.start({
      opacity: [1, 0],
      transition: { duration: fadeDuration / 1000, delay: delay / 1000 },
    });
  }, [controls, fadeDuration, delay]);

  const ref = useCallback(
    (node) => {
      if (node) node.__animatePixel = animatePixel;
    },
    [animatePixel],
  );

  return (
    <motion.div
      id={id}
      ref={ref}
      className={`pixel-dot ${className ?? ""}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }}
    />
  );
});

// ---------------------------------------------------------------------------
// PixelTrail
// ---------------------------------------------------------------------------
function PixelTrail({
  pixelSize = 20,
  fadeDuration = 500,
  delay = 0,
  className,
  pixelClassName,
}) {
  const containerRef = useRef(null);
  const dimensions = useDimensions(containerRef);
  const trailId = useRef(uuidv4());

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.floor((e.clientX - rect.left) / pixelSize);
      const y = Math.floor((e.clientY - rect.top) / pixelSize);
      const el = document.getElementById(`${trailId.current}-pixel-${x}-${y}`);
      if (el?.__animatePixel) el.__animatePixel();
    },
    [pixelSize],
  );

  const columns = useMemo(
    () => Math.ceil(dimensions.width / pixelSize),
    [dimensions.width, pixelSize],
  );
  const rows = useMemo(
    () => Math.ceil(dimensions.height / pixelSize),
    [dimensions.height, pixelSize],
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`pixel-trail ${className ?? ""}`}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="pixel-trail__row">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <PixelDot
              key={`${colIndex}-${rowIndex}`}
              id={`${trailId.current}-pixel-${colIndex}-${rowIndex}`}
              size={pixelSize}
              fadeDuration={fadeDuration}
              delay={delay}
              className={pixelClassName}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// GooeyDemo
// ---------------------------------------------------------------------------
function GooeyDemo({ flower }) {
  const screenSize = useScreenSize();
  const cursorProps = useCursorProps();

  return (
    <div className="gooey-demo">
      <img
        src={`${flower}`}
        alt="impressionist painting"
        className="gooey-demo__bg"
      />

      <GooeyFilter id="gooey-filter-pixel-trail" strength={5} />

      <div className="gooey-demo__trail-layer">
        <PixelTrail
          pixelSize={screenSize.lessThan("md") ? 24 : 32}
          fadeDuration={0}
          delay={500}
          pixelClassName="gooey-demo__pixel"
        />
      </div>

      <div className="gooey-demo__headline">
        <div>Vivek Venkatesh</div>
        <div className="title">Designing things into existence</div>
        <div>
          Currently Product @ <a {...cursorProps("B2C Fintech >")} href="https://www.sahi.com/" target="_self">Sahi</a>, <a {...cursorProps("B2B SaaS >")} href="https://greylabs.ai/" target="_self">Greylabs.ai</a> and <a {...cursorProps("B2C Ecommerce >")} href="https://www.elixir.cards/" target="_self">Elixir.Cards</a>
        </div>
      </div>
    </div>
  );
}

export { GooeyDemo, GooeyFilter, PixelTrail, useScreenSize, useDimensions };
export default GooeyDemo;
