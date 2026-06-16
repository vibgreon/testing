import { useEffect, useRef } from "react";
import "./StepCard.scss";

export default function StepCard({
  data,
  stackIndex,
  activeIndex,
  isActive,
  minHeight,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  const diff = stackIndex - activeIndex;
  const depth = diff < 0 ? -diff : 0;

  const heightStyle = minHeight ? { minHeight } : {};

  // Hide cards too far away
  if (diff > 1 || depth > 1) {
    return (
      <div
        className="card-cont"
        style={{
          position: "absolute",
          width: "100%",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 0,
          ...heightStyle,
        }}
      >
        <div className="card-subcont">
          <div className="card-index">
            <div>{data.index}</div>
          </div>

          <div className="card-content">
            <div>{data.title}</div>
            <div>{data.desc}</div>
          </div>
        </div>

        <div className="card-video">
          <video
            ref={videoRef}
            src={data.src}
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    );
  }

  let transform = "translateY(0) scale(1)";
  let opacity = 1;
  let zIndex = 10;

  // Next card completely outside viewport
  if (diff === 1) {
    transform = "translateY(120vh) scale(1)";
    opacity = 1;
    zIndex = 5;
  }

  // Active card
  else if (diff === 0) {
    transform = "translateY(0) scale(1)";
    opacity = 1;
    zIndex = 20;
  }

  // First card behind
  else if (depth === 1) {
    transform = "translateY(-8px) scale(0.97)";
    opacity = 0.75;
    zIndex = 15;
  }

  return (
    <div
      className="card-cont"
      style={{
        position: "absolute",
        width: "100%",
        transform,
        opacity,
        zIndex,
        transformOrigin: "top center",
        willChange: "transform, opacity",
        transition:
          "transform 850ms cubic-bezier(0.16,1,0.3,1), opacity 650ms ease",
        ...heightStyle,
      }}
    >
      <div className="card-subcont">
        <div className="card-index">
          <div>{data.index}</div>
        </div>

        <div className="card-content">
          <div>{data.title}</div>
          <div>{data.desc}</div>
        </div>
      </div>

      <div className="card-video">
        <video
          ref={videoRef}
          src={data.src}
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </div>
  );
}