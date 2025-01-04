import "./About.scss";

import Wrapper from "../../components/wrapper/Wrapper";

export default function About() {
  return (
    <>
      <Wrapper>
        <div className="about_cont">
          <div className="intro_cont">
            <div className="header">welcome</div>
            <div className="desc">
              Hi, I’m Vivek Venkatesh, a Product Designer with vast experience
              in multiple business domains with background in Computer Science.
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
              <div>mentor on record</div>
              <div>2 yrs as UI/UX Designer & Researcher</div>
            </div>
            <div className="info_subcont">
              <div>mentee on record</div>
              <div>4 months as an UI/UX & Web dev. Intern</div>
            </div>
            <div className="info_subcont">
              <div>freelancing</div>
              <div>4 yrs during College</div>
            </div>
            <div className="info_subcont">
              <div>education</div>
              <div>Btech in CSE</div>
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
