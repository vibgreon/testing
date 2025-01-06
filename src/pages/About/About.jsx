import "./About.scss";

import Wrapper from "../../components/wrapper/Wrapper";

export default function About() {
  return (
    <>
      <Wrapper>
        <div className="about_cont">
          <div className="intro_cont">
            <div className="header">sup 👋</div>
            <div className="desc">
              {`Looking for optimized, scalable, and human-centric digital design solutions? You've come to the right place.`}
            </div>
          </div>
          <div
            className="idcard_cont"
            style={{
              backgroundImage: "url(./cardAbout.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="pin_hole"></div>
            <div className="id_cont">
              <img
                src="./vivek.webp"
                alt="Vivek Venkatesh's LinkedIn profile picture"
              />
              <div className="id_subcont">
                <div className="id_item">
                  <div>{`hi, i'm`}</div>
                  <div>vivek venkatesh</div>
                </div>
                <div className="id_item">
                  <div>responsibility</div>
                  <div>Product Designing and Consultancy</div>
                </div>
                <div className="id_item">
                  <div>work experience</div>
                  <div>6 yrs in Tech</div>
                </div>
              </div>
            </div>
          </div>
          <div className="info_cont">
            <div className="info_subcont">
              <div>platforms</div>
              <div>Smart Phone, Tablet, Desktop, AR(XR)</div>
            </div>
            <div className="info_subcont">
              <div>projects delivered</div>
              <div>+15 in multiple domains</div>
            </div>
            <div className="info_subcont">
              <div>engagement across apps.</div>
              <div>+5 mil. per month</div>
            </div>
            <div className="info_subcont">
              <div>tools with benefits</div>
              <div className="logo_cont">
                <div className="logo_item" title="Figma">
                  <img src="./logo/logo-figma.svg" />
                </div>
                <div className="logo_item" title="Sass">
                  <img src="./logo/logo-sass.svg" />
                </div>
                <div className="logo_item" title="Framer">
                  <img src="./logo/logo-framer.svg" />
                </div>
                <div className="logo_item" title="Protopie">
                  <img src="./logo/logo-protopie.svg" />
                </div>
                <div className="logo_item" title="Rive">
                  <img src="./logo/logo-rive.svg" />
                </div>
                <div className="logo_item" title="Spline">
                  <img src="./logo/logo-spline.svg" />
                </div>
                <div className="logo_item" title="Notion">
                  <img src="./logo/logo-notion.svg" />
                </div>
                <div className="logo_item" title="Miro">
                  <img src="./logo/logo-miro.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
