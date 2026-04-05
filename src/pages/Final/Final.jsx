import "./Final.scss";

import Hero from "../../components/hero/hero";
import { useCursorProps } from "../../components/cursor/CursorContext";
import { NavLink } from "react-router-dom";

export default function Final() {
  const cursorProps = useCursorProps();
  return (
    <>
      <div className="final_wrapper">
        <div className="hero_cont">
          <div className="hero_subcont">
            <div className="hero_title">
              <div>Vivek Venkatesh</div>
              <div>Product Designer</div>
            </div>
            <div className="hero_desc">
              I currently work at{" "}
              <span {...cursorProps("Product Design Studio")}>
                Superlaunch Studio
              </span>
              , leading design for{" "}
              <a
                href="https://www.sahi.com/"
                target="_self"
                {...cursorProps("B2C Fintech >")}
              >
                Sahi
              </a>{" "}
              and{" "}
              <a
                href="https://greylabs.ai/"
                target="_self"
                {...cursorProps("B2B SaaS Voice AI >")}
              >
                GreyLabs AI
              </a> 
              .<br />Making high complexity system into playful and purposeful
              products.
            </div>
          </div>
          <div className="rive_cont">
            <Hero />
          </div>
        </div>
        <div className="content_cont">
          <div className="content_subcont">
            <div>Recap 2025</div>
            <div>
              Major work on usability, AI scalability for fast prototyping with
              design systems, and a hint of art.
            </div>
          </div>
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
              <div>{`GreyLabs AI: Evaluate and improve Voice Agents at L3 Audit Depth`}</div>
              <div>{`Designed a system to identify performance drops, pinpoint root causes, and assign ownership for fixes. Supported by automated RCA, trend tracking, and a complete audit trail.`}</div>
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
                <div>{`Bridge the gap between Design and Business requirements with personalised AI workflows`}</div>
                <div>{`Iterating on an ongoing AI concept for design governance, accessibility testing, and solution quality checklists to reduce review friction and improve output quality, and how you can do it too with the right design and team culture`}</div>
              </div>
            </div>
          </a>
          <div className="content_card" {...cursorProps("Coming soon")}>
            <img src="./landing/onboarding.png" alt="sahi login screen" />
            <div>
              <div>{`Sahi: Contactless Onboarding - Introducing KRA 07 Handling`}</div>
              <div>{`Optimised a compliance flow that identifies drop-offs, categorizes failure types, and guides users through recovery paths. Incrementally refactored and rolled out in phases, reducing completion time by 43%.`}</div>
            </div>
          </div>

          <div className="content_card" {...cursorProps("Coming soon")}>
            <img
              src="./landing/animation-phone.png"
              alt="sahi loading or context screens"
            />
            <div>
              <div>{`Sahi: State-Driven Interactions and Animations to cut through tech and content slop`}</div>
              <div>{`Designed state-driven interactions and animations for loading, failure, and content-heavy screens to reduce cognitive load and keep users oriented through uncertain states and edge cases.`}</div>
            </div>
          </div>
        </div>
        <div className="workex_cont">
          <div className="workex_title">{`Products grown at`}</div>
          <div className="workex_content">
            <div className="workex_item" {...cursorProps("with Dale & Manish")}>
              <div className="workex_item_cont">
                <div>Superlaunch Studio</div>
                <div>
                  Product Designer :<br />
                  Sahi - High Performance Trading • GreyLabs AI
                </div>
              </div>
              <div>2025 - Present</div>
            </div>
            <div className="workex_item" {...cursorProps("with Sumeth Madan")}>
              <div className="workex_item_cont">
                <div>Noormer Tech</div>
                <div>Product Designer</div>
              </div>
              <div>2023 - 2025</div>
            </div>
            <div className="workex_item" {...cursorProps("with Neeraj Naval")}>
              <div className="workex_item_cont">
                <div>Nexuses</div>
                <div>Product Design Engineer</div>
              </div>
              <div>2022 - 2023</div>
            </div>
          </div>
        </div>
        <div className="archive_cont" {...cursorProps("Past works")}>
          <div className="archive_title">
            <div>Archive 2024</div>
            <div>
              Past work across domains like AI, travel, fashion, e-commerce,
              manufacturing, and a bunch more, while exploring tech and how it
              can push products to actually mean something in the market.
            </div>
          </div>
          <NavLink to={"/recap-2024"}>
            <div className="button">Take a look</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
