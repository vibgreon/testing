import { useEffect, useRef, useState } from "react";
import "./App.css";
import StepCard from "./component/stepCard/StepCard";
import Wrapper from "./component/wrapper/Wrapper";

const data = [
  {
    index: "1",
    title: "Single Screen : Index + Call/Put & Option Chain",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    src: "/steps/step1.mp4",
  },
  {
    index: "2",
    title: "Order Defaults, Pre Decided Trade Quantities",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    src: "/steps/step2.mp4",
  },
  {
    index: "3",
    title: "Chart Settings : Indicators, Drawings & Configurations",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    src: "/steps/step3.mp4",
  },
  {
    index: "4",
    title: "Auto SL-TP on Chart",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    src: "/steps/step4.mp4",
  },
  {
    index: "5",
    title: "Instant Access to Necessities",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    src: "/steps/step5.mp4",
  },
];

const TOTAL = data.length;

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelRefs = useRef([]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
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
