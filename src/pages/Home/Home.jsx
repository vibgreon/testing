import Wrapper from "../../components/wrapper/Wrapper";

import { useCursorProps } from "../../components/cursor/CursorContext";

import "./Home.scss";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default function Home() {
  const cursorProps = useCursorProps();
  const width = useWindowWidth();
  return (
    <>
      <Wrapper>
        <div className="home_cont">
          <div className="home_cont_work">
            <div className="home_cont_onboarding" {...cursorProps("Under NDA")}>
              <img
                loading="lazy"
                src="./home/onboarding.png"
                alt="Sahi app login screen"
              />
              <div className="home_cont_content">
                <div>SAHI: KRA 07 Onboarding</div>
                <div>
                  {`Architected a compliance flow that catches where users drop,
                  handles failures by type, and reroutes them seamlessly
                  through. Powered by parallel verification, regulatory failure
                  mapping, and a redesigned journey that cut completion time by
                  43%`}
                </div>
              </div>
            </div>
            <div className="home_cont_work_row">
              <div
                className="home_cont_all width_stability hover_effect"
                {...cursorProps("Read on Notion")}
              >
                <a
                  href="https://cubic-pair-c3b.notion.site/SAHI-Options-Seller-32ab4f0755cf80468c28f0f8a24384b3?source=copy_link"
                  target="_blank"
                >
                  <img
                    loading="lazy"
                    src={
                      width <= 800
                        ? "./home/option-seller-phone.png"
                        : "./home/option-seller.png"
                    }
                    alt="Sahi app, options seller feature discovery"
                  />
                  <div className="home_cont_content">
                    <div>SAHI: Options Seller</div>
                    <div>
                      We built a mobile experience to improve efficiency in
                      Options Trading to acquire High net worth Individual in
                      F&O segment
                    </div>
                  </div>
                </a>
              </div>

              <div
                className="home_cont_all hover_effect"
                {...cursorProps("Read on Medium")}
              >
                <a
                  href="https://medium.com/@vibgreon/design-linting-figma-plugin-ai-workflow-89cfa12c1603"
                  target="_blank"
                >
                  <img
                    loading="lazy"
                    src="./home/design-lint-ai.png"
                    alt="AI for Design and accessibility checks"
                  />
                  <div className="home_cont_content">
                    <div>Design Linting Figma Plugin & AI Workflow</div>
                    <div>
                      An ongoing AI concept for design governance, accessibility
                      testing, and solution quality checklists to reduce review
                      friction and improve output quality, and how you can do it
                      too with the right design and team culture
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="home_cont_work_row">
              <div className="home_cont_all" {...cursorProps("Under NDA")}>
                <img
                  loading="lazy"
                  src="./home/voice-ai.png"
                  alt="greylabs ai voice bot analytical dashboard"
                />
                <div className="home_cont_content">
                  <div>GreyLabs AI: Voice Agent Audit</div>
                  <div>
                    {`Built a system to analyze why performance dipped, where to focus, and who owns the fix. Powered by auto-RCA, trend monitoring, and a full audit trail`}
                  </div>
                </div>
              </div>
              <div
                className="home_cont_all width_stability"
                {...cursorProps("Coming soon")}
              >
                <img
                  loading="lazy"
                  src={
                    width <= 800
                      ? "./home/animation-phone.png"
                      : "./home/animation.png"
                  }
                  alt="rive animations for Sahi app"
                />
                <div className="home_cont_content">
                  <div>SAHI: State-Driven Intuitive Animations</div>
                  <div>
                    Crafted interactive experiences similar to those of Spotify,
                    Duolingo, ESPN, LinkedIn, Google, and Fortune 500 automakers
                    to reduce cognitive load on heavy text screens and unknown
                    situation handlers
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home_cont_workex">
            <div className="home_cont_workex_title">Experience</div>
            <div className="home_cont_workex_content">
              <div className="home_cont_workex_item">
                <div className="home_cont_workex_item_cont">
                  <div>Superlaunch Studio</div>
                  <div>
                    Product Designer : Sahi : High Performance Trading •
                    GreyLabs AI
                  </div>
                </div>
                <div>2025 - Present</div>
              </div>
              <div className="home_cont_workex_item">
                <div className="home_cont_workex_item_cont">
                  <div>Noormer Tech</div>
                  <div>Product Designer</div>
                </div>
                <div>2023 - 2025</div>
              </div>
              <div className="home_cont_workex_item">
                <div className="home_cont_workex_item_cont">
                  <div>Nexuses</div>
                  <div>Product Design Engineer</div>
                </div>
                <div>2022 - 2023</div>
              </div>
            </div>
          </div>
          <NavLink to={"/recap-2024"}>
            <div
              className="home_cont_recap2024"
              {...cursorProps("Explore more")}
            >
              <div className="home_cont_recap2024_content">
                <div>Recap 2024</div>
                <div>
                  How I curated my work from 2023 to 2024, making it public for
                  people to understand the compounding effect of how working
                  over time can clear up your thinking on how to approach and
                  perceive things.
                </div>
              </div>
              <div className="home_cont_recap2024_btn">Browse past works</div>
            </div>
          </NavLink>
        </div>
      </Wrapper>
    </>
  );
}
