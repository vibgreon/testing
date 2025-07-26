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
              {`Curious about me? I'd love to chat. You can reach out using the contact details available on the site.`}
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
                src="./vivek.png"
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
                  <div>+2 yrs in Tech</div>
                </div>
              </div>
            </div>
          </div>
          <div className="info_cont">
            <div className="info_subcont">
              <div>platforms</div>
              <div>Smart Phone, Tablet, Desktop, AR/VR (XR)</div>
            </div>
            <div className="info_subcont">
              <div>projects delivered & maintained</div>
              <div>+15 in multiple domains</div>
            </div>
            <div className="info_subcont">
              <div>engagement across apps.</div>
              <div>+5M / month</div>
            </div>
            <div className="info_subcont">
              <div>tools with benefits</div>
              <div className="logo_cont">
                <div className="logo_item" title="Figma">
                  <img src="./logo/logo-figma.svg" />
                  <div className="logo_txt">Figma/FigJam</div>
                </div>
                <div className="logo_item" title="Sass">
                  <img src="./logo/logo-sass.svg" />
                  <div className="logo_txt">Sass/Scss</div>
                </div>
                <div className="logo_item" title="React">
                  <img src="./logo/logo-react.svg" />
                  <div className="logo_txt">React/Next</div>
                </div>
                <div className="logo_item" title="Framer">
                  <img src="./logo/logo-framer.svg" />
                  <div className="logo_txt">Framer</div>
                </div>
                <div className="logo_item" title="Rive">
                  <img src="./logo/logo-rive.svg" />
                  <div className="logo_txt">Rive</div>
                </div>
                <div className="logo_item" title="Blender">
                  <img src="./logo/logo-blender.svg" />
                  <div className="logo_txt">Blender</div>
                </div>
                <div className="logo_item" title="Bezi">
                  <img src="./logo/logo-bezi.svg" />
                  <div className="logo_txt">Bezi</div>
                </div>
                <div className="logo_item" title="Notion">
                  <img src="./logo/logo-notion.svg" />
                  <div className="logo_txt">Notion</div>
                </div>
                <div className="logo_item" title="Miro">
                  <img src="./logo/logo-miro.svg" />
                  <div className="logo_txt">Miro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
