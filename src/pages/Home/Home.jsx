import Wrapper from "../../components/wrapper/Wrapper";

import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

import "./Home.scss";

export default function Home() {
  const width = useWindowWidth();
  return (
    <>
    <Wrapper>
      <div className="home_cont">
      <div className="home_cont_work">
        <div className="home_cont_onboarding">
          <img src="./home/onboarding.png" />
          <div className="home_cont_content">
            <div>SAHI: Onboarding</div>
            <div>Reimagined onboarding to reduce touchpoints and edge case drop-offs</div>
          </div>
        </div>
        <div className="home_cont_work_row">
          <div className="home_cont_all width_stability">
            <img src={width <= 800 ? "./home/option-seller-phone.png" : "./home/option-seller.png"} />
            <div className="home_cont_content">
              <div>SAHI: Options Seller</div>
              <div>We built a mobile experience to improve efficiency in Options Trading to acquire High net worth Individual in F&O segment</div>
            </div>
          </div>
          <div className="home_cont_all">
            <img src="./home/design-lint-ai.png" />
            <div className="home_cont_content">
              <div>Design Linting Figma Plugin & AI Workflow</div>
              <div>An ongoing AI concept for design governance, accessibility testing, and solution quality checklists to reduce review friction and improve output quality, and how you can do it too with the right design and team culture</div>
            </div>
          </div>
        </div>
        <div className="home_cont_work_row">
          <div className="home_cont_all">
            <img src="./home/funds.png" />
            <div className="home_cont_content">
              <div>SAHI: Funds</div>
              <div>What we learned from failing to unify cash balance across settlement & brokerage to make the available balance easily understandable for customers</div>
            </div>
          </div>
          <div className="home_cont_all width_stability">
            <img src={width <= 800 ? "./home/animation-phone.png" : "./home/animation.png"} />
            <div className="home_cont_content">
              <div>SAHI: State-Driven Intuitive Animations</div>
              <div>Crafted interactive experiences similar to those of Spotify, Duolingo, ESPN, LinkedIn, Google, and Fortune 500 automakers to reduce cognitive load on heavy text screens and unknown situation handlers</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Wrapper>
    </>
    )
}