import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import StepCard from "./component/stepCard/StepCard";
import Wrapper from "./component/wrapper/Wrapper";

const data = [
  {
    index: "1",
    title: "Single Screen : Index + Call/Put & Option Chain",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
    src: "/steps/step1.mp4",
  },
  {
    index: "2",
    title: "Order Defaults, Pre Decided Trade Quantities",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    src: "/steps/step2.mp4",
  },
  {
    index: "3",
    title: "Chart Settings : Indicators, Drawings & Configurations",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    src: "/steps/step3.mp4",
  },
  {
    index: "4",
    title: "Quick Auto SL-TP on Chart",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    src: "/steps/step4.mp4",
  },
  {
    index: "5",
    title: "Instant Access to Necessities",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    src: "/steps/step5.mp4",
  },
];

const TOTAL = data.length;
const MOBILE_BREAKPOINT = 730;

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [minHeight, setMinHeight] = useState(null);

  const sentinelRefs = useRef([]);
  const measureRefs = useRef([]);
  const trackRef = useRef(null);

  const snappedIndex = useRef(0);
  const isSnapping = useRef(false);
  const touchStartY = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  const snapTo = (index) => {
    const clamped = Math.max(0, Math.min(TOTAL - 1, index));

    if (clamped === snappedIndex.current) {
      isSnapping.current = false;
      return;
    }

    snappedIndex.current = clamped;
    isSnapping.current = true;

    const sentinel = sentinelRefs.current[clamped];
    if (!sentinel) return;

    const top = sentinel.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    clearTimeout(snapTo._timer);

    snapTo._timer = setTimeout(() => {
      isSnapping.current = false;
    }, 800);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onWheel = (e) => {
      const rect = track.getBoundingClientRect();

      const insideTrack =
        rect.top < window.innerHeight &&
        rect.bottom > 0;

      if (!insideTrack) return;

      const stackVisible =
        rect.top <= window.innerHeight * 0.5 &&
        rect.bottom >= window.innerHeight * 0.5;

      if (!stackVisible) return;

      const direction = e.deltaY > 0 ? 1 : -1;

      if (
        snappedIndex.current === 0 &&
        direction < 0
      ) {
        return;
      }

      if (
        snappedIndex.current === TOTAL - 1 &&
        direction > 0
      ) {
        return;
      }

      e.preventDefault();

      if (isSnapping.current) return;

      snapTo(snappedIndex.current + direction);
    };

    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      const rect = track.getBoundingClientRect();

      const stackVisible =
        rect.top <= window.innerHeight * 0.5 &&
        rect.bottom >= window.innerHeight * 0.5;

      if (!stackVisible) return;

      if (isSnapping.current) return;
      if (touchStartY.current === null) return;

      const deltaY =
        touchStartY.current - e.touches[0].clientY;

      if (Math.abs(deltaY) < 10) return;

      const direction = deltaY > 0 ? 1 : -1;

      if (
        snappedIndex.current === 0 &&
        direction < 0
      ) {
        touchStartY.current = null;
        return;
      }

      if (
        snappedIndex.current === TOTAL - 1 &&
        direction > 0
      ) {
        touchStartY.current = null;
        return;
      }

      e.preventDefault();

      touchStartY.current = null;

      snapTo(snappedIndex.current + direction);
    };

    track.addEventListener("wheel", onWheel, {
      passive: false,
    });

    track.addEventListener("touchstart", onTouchStart, {
      passive: true,
    });

    track.addEventListener("touchmove", onTouchMove, {
      passive: false,
    });

    return () => {
      track.removeEventListener("wheel", onWheel);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  useLayoutEffect(() => {
    const measure = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setMinHeight(null);
        return;
      }

      const heights = measureRefs.current
        .filter(Boolean)
        .map((el) => el.getBoundingClientRect().height);

      const max = Math.max(...heights);

      if (max > 0) {
        setMinHeight(max);
      }
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(document.documentElement);

    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const idx = Number(entry.target.dataset.index);
          setActiveIndex(idx);
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sentinelRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // keep snap state synced with visible card
  useEffect(() => {
    snappedIndex.current = activeIndex;
  }, [activeIndex]);

  return (
    <Wrapper>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          visibility: "hidden",
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        {data.map((item, i) => (
          <div
            key={item.index}
            className="card-cont"
            ref={(el) => (measureRefs.current[i] = el)}
          >
            <div className="card-subcont">
              <div className="card-index">
                <div>{item.index}</div>
              </div>

              <div className="card-content">
                <div>{item.title}</div>
                <div>{item.desc}</div>
              </div>
            </div>

            <div className="card-video" />
          </div>
        ))}
      </div>

      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>

      <div
        className="cards-track"
        ref={trackRef}
        style={{ "--total": TOTAL }}
      >
        <div className="cards-sentinels">
          {data.map((_, i) => (
            <div
              key={i}
              className="cards-sentinel"
              data-index={i}
              ref={(el) => (sentinelRefs.current[i] = el)}
            />
          ))}
        </div>

        <div className="cards-sticky">
          <div className="cards-stack">
            {data.map((item, i) => (
              <StepCard
                key={item.index}
                data={item}
                stackIndex={i}
                activeIndex={activeIndex}
                isActive={i === activeIndex}
                minHeight={minHeight}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
    </Wrapper>
  );
}

export default App;
