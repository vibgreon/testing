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

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  // Measure natural card heights from the hidden measurement layer
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
      if (max > 0) setMinHeight(max);
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
      },
    );

    sentinelRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper>
      {/* Hidden measurement layer — renders all cards at natural height off-screen */}
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

      <div className="cards-track" style={{ "--total": TOTAL }}>
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