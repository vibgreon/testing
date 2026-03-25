import MyCharacter from "../../components/rive/MyCharacter";

import { useCursorProps } from "../../components/cursor/CursorContext";

import "./Main.scss";

export default function Main() {
  const cursorProps = useCursorProps();
  return (
    <>
      <div className="main_wrapper">
        <div className="main_cont">
          <div className="main_content_cont">
            <div className="main_header_cont">
              <div className="main_rive">
                <MyCharacter />
              </div>
              <div className="main_header">
                <div>Recap 2025 - Present</div>
                <div>
                  Product Designing for{" "}
                  <a
                    href="https://www.sahi.com/"
                    target="_self"
                    {...cursorProps("B2C Fintech >")}
                  >
                    Sahi - High Frequency Trading
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://greylabs.ai/"
                    target="_self"
                    {...cursorProps("B2B SaaS Voice AI >")}
                  >
                    GreyLabs AI
                  </a>
                </div>
              </div>
            </div>
            <div className="main_content">
              <a
                href="https://cubic-pair-c3b.notion.site/SAHI-Options-Seller-32ab4f0755cf80468c28f0f8a24384b3?source=copy_link"
                {...cursorProps("Read on Notion >")}
              >
                <div className="content_card">
                  <video
                    src="./landing/option-seller.webm"
                    loop
                    autoPlay
                    muted
                    playsInline
                  ></video>
                  <div>
                    <div>{`Sahi: Options Seller`}</div>
                    <div>{`We built a multi-platform experience to improve efficiency in options trading and drive acquisition of high-net-worth individuals in the F&O segment.`}</div>
                  </div>
                </div>
              </a>
              <div className="content_card" {...cursorProps("Under NDA")}>
                <img
                  src="./landing/voice-ai.png"
                  alt="grey labs voice audit dashboard snapshot"
                />
                <div>
                  <div>{`GreyLabs AI: Voice Agent Audit`}</div>
                  <div>{`Designed a system to identify performance drops, pinpoint root causes, and assign ownership for fixes. Supported by automated RCA, trend tracking, and a complete audit trail.`}</div>
                </div>
              </div>
              <div className="content_card" {...cursorProps("Under NDA")}>
                <img src="./landing/onboarding.png" alt="sahi login screen" />
                <div>
                  <div>{`Sahi: KRA 07 Onboarding`}</div>
                  <div>{`Designed a compliance flow that identifies drop-offs, categorizes failure types, and guides users through recovery paths. Incrementally refactored and rolled out in phases, reducing completion time by 43%.`}</div>
                </div>
              </div>
              <a
                href="https://medium.com/@vibgreon/design-linting-figma-plugin-ai-workflow-89cfa12c1603"
                {...cursorProps("Read on Medium >")}
              >
                <div className="content_card">
                  <img
                    src="./landing/claude.webp"
                    alt="ai workflow for product design"
                  />
                  <div>
                    <div>{`Design Linting Figma Plugin & AI Workflow`}</div>
                    <div>{`An ongoing AI concept for design governance, accessibility testing, and solution quality checklists to reduce review friction and improve output quality, and how you can do it too with the right design and team culture`}</div>
                  </div>
                </div>
              </a>
              <div className="content_card" {...cursorProps("Coming soon")}>
                <img
                  src="./landing/animation-phone.png"
                  alt="sahi loading or context screens"
                />
                <div>
                  <div>{`Sahi: State-Driven Intuitive Animations`}</div>
                  <div>{`Designed interactive patterns to reduce cognitive load on text-heavy screens and guide users through uncertain or edge-case scenarios.`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="main_cont_workex">
            <div className="main_cont_workex_title">{`Products grown at`}</div>
            <div className="main_cont_workex_content">
              <div
                className="main_cont_workex_item"
                {...cursorProps("with Dale & Manish")}
              >
                <div className="main_cont_workex_item_cont">
                  <div>Superlaunch Studio</div>
                  <div>
                    Product Designer :<br />
                    Sahi - High Performance Trading • GreyLabs AI
                  </div>
                </div>
                <div>2025 - Present</div>
              </div>
              <div
                className="main_cont_workex_item"
                {...cursorProps("with Sumeth Madan")}
              >
                <div className="main_cont_workex_item_cont">
                  <div>Noormer Tech</div>
                  <div>Product Designer</div>
                </div>
                <div>2023 - 2025</div>
              </div>
              <div
                className="main_cont_workex_item"
                {...cursorProps("with Neeraj Naval")}
              >
                <div className="main_cont_workex_item_cont">
                  <div>Nexuses</div>
                  <div>Product Design Engineer</div>
                </div>
                <div>2022 - 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
