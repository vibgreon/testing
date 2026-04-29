"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARD_COUNT = 3;
const SCROLL_PER_CARD = 600;
const CARD_WIDTH_RATIO = 0.9;
const CARD_HEIGHT_RATIO = 0.9;

const Plus = ({
  h,
  v = "bottom",
}: {
  h: "left" | "right";
  v?: "top" | "bottom";
}) => (
  <span
    className="absolute select-none pointer-events-none"
    style={{
      [h]: 0,
      [v]: 0,
      transform: `translate(${h === "left" ? "-50%" : "50%"}, ${
        v === "top" ? "-50%" : "50%"
      })`,
      fontFamily: "monospace",
      fontSize: "13px",
      lineHeight: 1,
      color: "#9ca3af",
      zIndex: 10,
    }}
  >
    +
  </span>
);

const CARDS = [
  { id: 0, src: "/images/aboutMe/1.png", alt: "1" },
  { id: 1, src: "/images/aboutMe/2.png", alt: "2" },
  { id: 2, src: "/images/aboutMe/3.png", alt: "3" },
];

const SIDE_TEXTS = [
  {
    id: "text-left",
    side: "left",
    triggerCard: 1,
    eyebrow: "Outside of product design, ",
    heading: "I love to cook, go on bike rides, and read random books",
    body: ".",
  },
  {
    id: "text-right",
    side: "right",
    triggerCard: 2,
    eyebrow: "These things ",
    heading: "help me rewire how I see the world ",
    body: "and influence the way I design.",
  },
];

function offsetRelativeTo(el: HTMLElement, ancestor: HTMLElement) {
  let top = 0;
  let left = 0;
  let cur: HTMLElement | null = el;

  while (cur && cur !== ancestor) {
    top += cur.offsetTop;
    left += cur.offsetLeft;
    cur = cur.offsetParent as HTMLElement | null;
  }

  return { top, left };
}

export default function AboutVivek() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const box = boxRef.current;
    const cards = cardRefs.current;

    if (!section || !box || cards.some((c) => !c)) return;

    const { top: boxTop, left: boxLeft } = offsetRelativeTo(box, section);

    const boxW = box.offsetWidth;
    const boxH = box.offsetHeight;

    Object.keys(textRefs.current).forEach((key) => {
      const el = textRefs.current[key];

      if (el) {
        gsap.set(el, {
          autoAlpha: 0,
          y: 30,
        });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${CARD_COUNT * SCROLL_PER_CARD}`,
        scrub: 1.2,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 1,
      },
    });

    const SLOT = 1 / CARD_COUNT;
    const TRAVEL_SHARE = 0.65;

    cards.forEach((card, i) => {
      if (!card) return;

      const cardW = boxW * CARD_WIDTH_RATIO;
      const cardH = boxH * CARD_HEIGHT_RATIO;

      const landX = boxLeft + (boxW - cardW) / 2;
      const landY = boxTop + (boxH - cardH) / 2;

      gsap.set(card, {
        position: "absolute",
        left: landX,
        top: window.innerHeight + 300 + i * 30,
        width: cardW,
        height: cardH,
        zIndex: i + 2,
        rotation: 0,
      });

      const slotStart = i * SLOT;
      const landAt = slotStart + SLOT * TRAVEL_SHARE;
      const travelDur = landAt - slotStart;
      const pauseDur = SLOT * (1 - TRAVEL_SHARE);

      tl.to(
        card,
        {
          top: landY,
          duration: travelDur,
          ease: "power3.out",
        },
        slotStart
      );

      tl.to(
        card,
        {
          duration: pauseDur,
        },
        landAt
      );

      if (i > 0) {
        tl.to(
          cards[i - 1],
          {
            scale: 0.96,
            duration: travelDur * 0.25,
            ease: "power1.out",
          },
          landAt - travelDur * 0.05
        );
      }

      const sideText = SIDE_TEXTS.find((t) => t.triggerCard === i);

      if (sideText) {
        const desktopEl = textRefs.current[`${sideText.id}-desktop`];
        const mobileEl = textRefs.current[`${sideText.id}-mobile`];

        if (desktopEl) {
          tl.to(
            desktopEl,
            {
              autoAlpha: 1,
              y: 0,
              duration: travelDur * 0.5,
              ease: "power2.out",
            },
            landAt
          );
        }

        if (mobileEl) {
          tl.to(
            mobileEl,
            {
              autoAlpha: 1,
              y: 0,
              duration: travelDur * 0.5,
              ease: "power2.out",
            },
            landAt
          );
        }
      }
    });

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex flex-col gap-12 items-center justify-center bg-white overflow-hidden z-[2]"
    >
      {/* Heading */}
      <div className="text-center px-6 mb-4 md:mb-8">
        <h2 className="relative text-2xl md:text-3xl font-light text-black text-center">
          <span
          className="mr-1"
            style={{
              fontFamily: "ImperialCapsSans, sans-serif",
              fontSize: "1.5em",
            }}
          >
            P
          </span>

          <span style={{ fontFamily: "ImperialSans, sans-serif" }}>
            rofessionally, a <span className="text-[#006AF5]">UX Researcher</span>. <br className="hidden md:block" />
            Naturally, a person with taste {`(literally)`}.
          </span>
        </h2>
      </div>

      {/* Center Box */}
      <div
        ref={boxRef}
        className="relative z-[1] border border-gray-200 mb-16"
        style={{
          width: "min(400px, 70vw)",
          aspectRatio: "1",
        }}
      >
        <Plus h="left" v="top" />
        <Plus h="right" v="top" />
        <Plus h="left" v="bottom" />
        <Plus h="right" v="bottom" />
      </div>

      {/* Desktop Text */}
      {SIDE_TEXTS.map((t) => (
        <div
          key={`${t.id}-desktop`}
          ref={(el) => {
            textRefs.current[`${t.id}-desktop`] = el;
          }}
          className={`hidden md:block absolute z-10 opacity-0 invisible text-gray-400 leading-relaxed text-base md:text-lg w-[320px]
            ${
              t.side === "left"
                ? "right-[calc(50%+260px)] text-right top-1/2 -translate-y-1/2"
                : "left-[calc(50%+260px)] text-left top-1/2 -translate-y-1/2"
            }`}
          style={{
            fontFamily: "FunnelDisplay, sans-serif",
          }}
        >
          {t.eyebrow}
          <span className="text-black">{t.heading}</span>
          {t.body}
        </div>
      ))}

      {/* Mobile Text */}
      {SIDE_TEXTS.map((t, index) => (
        <div
          key={`${t.id}-mobile`}
          ref={(el) => {
            textRefs.current[`${t.id}-mobile`] = el;
          }}
          className={`block md:hidden absolute z-10 opacity-0 invisible text-center text-gray-400 leading-relaxed text-sm w-[280px] left-1/2 -translate-x-1/2 ${
            index === 0 ? "top-[78%]" : "top-[88%]"
          }`}
          style={{
            fontFamily: "FunnelDisplay, sans-serif",
          }}
        >
          {t.eyebrow}
          <span className="text-black">{t.heading}</span>
          {t.body}
        </div>
      ))}

      {/* Cards */}
      {CARDS.map((card, i) => (
        <div
          key={card.id}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className="absolute"
        >
          <img
            src={card.src}
            alt={card.alt}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
    </section>
  );
}
