import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  useCursorProps,
  useCursorSetLabel,
} from "../cursor/CursorContext";
import GooeyDemo from "../gooey/GooeyPixelTrail.jsx";
import Flower from "/landing/garden.webp";
import "./CardStack.scss";

const GOOEY_ID = "__gooey__";
const STACK_SIZE = 3;

function buildAllCards(data) {
  return [{ id: GOOEY_ID }, ...data];
}

function getCardStyle(i) {
  return {
    y: i * 32,
    scale: 1 - i * 0.06,
    brightness: 1 - i * 0.1,
    zIndex: 100 - i,
  };
}

// ---------------------------------------------------------------------------
// StackCard
// ---------------------------------------------------------------------------
function StackCard({
  item,
  stackIndex,
  isLeaving,
  isEntering,
  onLeaveComplete,
  onEnterComplete,
}) {
  const controls = useAnimation();
  const style = getCardStyle(stackIndex);
  const cursorProps = useCursorProps();

  useEffect(() => {
    if (isLeaving) {
      controls
        .start({
          y: -220,
          opacity: 0,
          scale: style.scale,
          rotate: 8,
          transition: { duration: 0.45, ease: [0.32, 0, 0.67, 0] },
        })
        .then(onLeaveComplete);
    } else if (isEntering) {
      controls.set({
        y: -220,
        opacity: 0,
        scale: getCardStyle(0).scale,
        rotate: 8,
      });
      controls
        .start({
          y: getCardStyle(0).y,
          opacity: 1,
          scale: getCardStyle(0).scale,
          rotate: 0,
          transition: { duration: 0.45, ease: [0.33, 1, 0.68, 1] },
        })
        .then(onEnterComplete);
    } else {
      controls.start({
        y: style.y,
        scale: style.scale,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.45, ease: [0.33, 1, 0.68, 1] },
      });
    }
  }, [isLeaving, isEntering, stackIndex]);

  if (item.id === GOOEY_ID) {
    return (
      <motion.div
        {...cursorProps("Scroll or use arrow keys")}
        className="card card--gooey"
        style={{
          zIndex: style.zIndex,
          filter: `brightness(${style.brightness})`,
        }}
        initial={{ y: style.y, scale: style.scale, opacity: 1, rotate: 0 }}
        animate={controls}
      >
        <GooeyDemo flower={Flower} />
      </motion.div>
    );
  }

  const isImage = item.assetType === "image" && item.asset;
  const isVideo = item.assetType === "video" && item.asset;

  return (
    <motion.div
      {...cursorProps(`${item.hoverText}`)}
      onClick={() => {
        if (item.link) window.location.href = item.link;
      }}
      className={`card ${item.theme === "dark" ? "card--dark" : ""} ${isVideo ? "card--video" : ""}`}
      style={{
        zIndex: style.zIndex,
        filter: `brightness(${style.brightness})`,
        cursor: item.link ? "pointer" : "default",
        ...(isImage && { backgroundImage: `url(${item.asset})` }),
      }}
      initial={{ y: style.y, scale: style.scale, opacity: 1, rotate: 0 }}
      animate={controls}
    >
      {isVideo && (
        <video
          className="card_video"
          src={item.asset}
          autoPlay
          loop
          muted
          playsInline
        />
      )}
      <div className="card_content">
        <div>{item.title}</div>
        <div>{item.desc}</div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// CardStack
// ---------------------------------------------------------------------------
export default function CardStack({ data }) {
  const setLabel = useCursorSetLabel();
  const cursorProps = useCursorProps();

  const allCards = buildAllCards(data);
  const total = allCards.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState(null);
  const [enteringIndex, setEnteringIndex] = useState(null);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const jumpTargetRef = useRef(null);
  const lastWheelTime = useRef(0);

  function getVisibleIndices(active, entering) {
    const indices = new Set();
    for (let i = 0; i < STACK_SIZE; i++) {
      indices.add((active + i) % total);
    }
    if (entering !== null) indices.add(entering);
    return [...indices].sort((a, b) => {
      const posA = (a - active + total) % total;
      const posB = (b - active + total) % total;
      return posB - posA;
    });
  }

  const visibleIndices = getVisibleIndices(activeIndex, enteringIndex);

  function goToDataIndex(dataIdx) {
    const targetAllIdx = dataIdx + 1;
    if (isAnimating.current || targetAllIdx === activeIndex) return;
    isAnimating.current = true;
    jumpTargetRef.current = targetAllIdx;
    setLeavingIndex(activeIndex);
  }

  useEffect(() => {
    const handleWheel = (e) => {
      const now = Date.now();
      if (isAnimating.current) return;
      if (Math.abs(e.deltaY) < 30) return;
      if (now - lastWheelTime.current < 800) return;
      lastWheelTime.current = now;
      if (e.deltaY > 0) {
        isAnimating.current = true;
        setLeavingIndex(activeIndex);
      } else if (e.deltaY < 0) {
        isAnimating.current = true;
        const returning = (activeIndex - 1 + total) % total;
        setActiveIndex(returning);
        setEnteringIndex(returning);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isAnimating.current) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (delta > 40) {
        isAnimating.current = true;
        setLeavingIndex(activeIndex);
      } else if (delta < -40) {
        isAnimating.current = true;
        const returning = (activeIndex - 1 + total) % total;
        setActiveIndex(returning);
        setEnteringIndex(returning);
      }
    };

    const handleKeyDown = (e) => {
      if (isAnimating.current) return;
      if (e.key === "ArrowDown") {
        isAnimating.current = true;
        setLeavingIndex(activeIndex);
      } else if (e.key === "ArrowUp") {
        isAnimating.current = true;
        const returning = (activeIndex - 1 + total) % total;
        setActiveIndex(returning);
        setEnteringIndex(returning);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  useEffect(() => {
    const card = allCards[activeIndex];
    if (card.id !== GOOEY_ID) {
      setLabel(card.hoverText);
    } else {
      setLabel("");
    }
  }, [activeIndex]);

  function handleLeaveComplete() {
    setLeavingIndex(null);
    const next = (activeIndex + 1) % total;
    if (jumpTargetRef.current !== null) {
      setActiveIndex(next);
      if (next !== jumpTargetRef.current) {
        setLeavingIndex(next);
      } else {
        jumpTargetRef.current = null;
        isAnimating.current = false;
      }
    } else {
      setActiveIndex(next);
      isAnimating.current = false;
    }
  }

  function handleEnterComplete() {
    setEnteringIndex(null);
    isAnimating.current = false;
  }

  const displayCount = activeIndex === 0 ? 0 : activeIndex;

  return (
    <>
      <div className="card_stack">
        {visibleIndices.map((allIdx) => {
          const stackPos = (allIdx - activeIndex + total) % total;
          const isLeaving = allIdx === leavingIndex;
          const isEntering = allIdx === enteringIndex;

          return (
            <StackCard
              key={allCards[allIdx].id}
              item={allCards[allIdx]}
              stackIndex={stackPos}
              isLeaving={isLeaving}
              isEntering={isEntering}
              onLeaveComplete={handleLeaveComplete}
              onEnterComplete={handleEnterComplete}
            />
          );
        })}
      </div>

      <div className="card_count_cont">
        <div className="card_count_content">
          <div>{`${displayCount} of ${data.length}`}</div>
          <div>
            {data.map((item, i) => (
              <img
                key={item.id}
                src={item.logo}
                style={{ zIndex: data.length - i, cursor: "pointer" }}
                onClick={() => goToDataIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
