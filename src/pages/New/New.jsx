import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Wrapper from "../../components/wrapper/Wrapper";
import {
  useCursorProps,
  useCursorSetLabel,
} from "../../components/cursor/CursorContext";
import GooeyDemo from "../../components/gooey/GooeyPixelTrail.jsx";
import "./New.scss";
// import { link } from "framer-motion/client";

import Flower from "/landing/garden.webp"

const data = [
  {
    id: "1",
    title: "Activation Loss in Onboarding for Pre-Verified Investors",
    desc: "Increased onboarding completion by ~20% by eliminating redundant KYC steps and reducing dependency-driven failures",
    asset: "/landing/onboarding.webp",
    assetType: "image",
    logo: "/landing/logo/sahi.svg",
    theme: "dark",
    hoverText: "Read on Notion >",
    link: "https://cubic-pair-c3b.notion.site/Activation-Loss-in-Onboarding-for-Pre-Verified-Investors-33eb4f0755cf80daa108f62f48562d8a?source=copy_link",
  },
  {
    id: "2",
    title: "Options Seller (F&O Terminal)",
    desc: "Redesigning Options trading experience to drive acquisition of Options Seller in the F&O segment",
    asset: "/landing/option-seller.webm",
    assetType: "video",
    logo: "/landing/logo/sahi.svg",
    theme: "dark",
    hoverText: "Read on Notion >",
    link: "https://cubic-pair-c3b.notion.site/SAHI-Options-Seller-32ab4f0755cf80468c28f0f8a24384b3?source=copy_link",
  },
  {
    id: "3",
    title: "Voice Agents Auditing",
    desc: "Designing system to identify performance drop, pinpoint root causes, and assign ownership for fixes",
    asset: "/landing/voice-ai-light.webp",
    assetType: "image",
    logo: "/landing/logo/greylabs.svg",
    theme: "",
    hoverText: "Under NDA",
  },
  {
    id: "4",
    title: "Redesigning Elixir App Experience for Gen Alpha",
    desc: "Restructuring end-to-end flows: healthy habit tracking, credit earning, and the shopping experience",
    asset: "/landing/elixir.webp",
    assetType: "image",
    logo: "/landing/logo/elixir.svg",
    theme: "dark",
    hoverText: "Coming soon",
  },
  {
    id: "5",
    title: "A Guide to Stress-Testing Accessibility and Rapid Prototyping using AI",
    desc: "Scale Design, reduce review friction and improve output quality with guardrails",
    asset: "/landing/claude.webm",
    assetType: "video",
    logo: "/landing/logo/claude.svg",
    theme: "",
    hoverText: "Coming soon",
  },
];

// The GooeyPixelTrail card is a virtual card at the front of the deck.
// It navigates like any other card but is not counted in the indicator.
const GOOEY_ID = "__gooey__";
const STACK_SIZE = 3;

// allCards = [gooeySlot, ...data]
// Index 0 is the gooey card, indices 1–N are data cards.
function buildAllCards() {
  return [{ id: GOOEY_ID }, ...data];
}
const allCards = buildAllCards();
const total = allCards.length; // includes gooey slot

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

  // Gooey card
  if (item.id === GOOEY_ID) {
    return (
      <motion.div
        {...cursorProps("Scroll or use arrow keys")}
        className="new_card new_card--gooey"
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

  // Regular data card
  const isImage = item.assetType === "image" && item.asset;
  const isVideo = item.assetType === "video" && item.asset;

  return (
    <motion.div
      {...cursorProps(`${item.hoverText}`)}
      onClick={() => {
        if (item.link) window.location.href = item.link;
      }}
      className={`new_card ${item.theme === "dark" ? "new_card--dark" : ""} ${isVideo ? "new_card--video" : ""}`}
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
      <div className="new_content">
        <div>{item.title}</div>
        <div>{item.desc}</div>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// New
// ---------------------------------------------------------------------------
export default function New() {
  const cursorProps = useCursorProps();
  const setLabel = useCursorSetLabel();

  // activeIndex is over allCards (0 = gooey, 1–N = data)
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

  // Jump to a data card by its index in `data` (0-based).
  // We offset by 1 because allCards[0] is the gooey slot.
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

  // Update cursor label. Gooey card has no hoverText so we leave it blank.
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
    <Wrapper>
      <div className="new_cont">
        <div className="new_nav">
          <a
            {...cursorProps("Social link >")}
            href="https://www.linkedin.com/in/vibgreon/"
            target="_self"
          >
            LinkedIn
          </a>
          <div
            {...cursorProps("Coming April 2026")}
            style={{ cursor: "pointer" }}
          >
            Playground
          </div>
          <a
            {...cursorProps("Google drive >")}
            href="https://drive.google.com/file/d/1WupRtiFMxzYf6encDNrdthyQUjJ5TM2I/view?usp=sharing"
            target="_self"
          >
            Resume
          </a>
        </div>

        <div className="new_stack">
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

        <div className="new_count_cont">
          <div className="new_count_content">
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
      </div>
    </Wrapper>
  );
}
