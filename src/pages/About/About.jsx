import "./About.scss";

import Wrapper from "../../components/wrapper/Wrapper";

export default function About() {
  return (
    <>
      <Wrapper>
        <div className="about_cont">
          <div className="intro_cont">
            <div className="header">Hii, I'm Vivek</div>
            <div className="desc">
              {`Product Designer with a background in Usability, AI, and engineering — shipping real products since 2022.`}
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
                  <div>Product Designer</div>
                </div>
                <div className="id_item">
                  <div>Currently scaling</div>
                  <div>SAHI : High Performance Trading</div>
                </div>
              </div>
            </div>
          </div>
          <div className="info_cont">
            <div className="info_subcont">
              <div>years of experience</div>
              <div>+4 yrs</div>
            </div>
            <div className="info_subcont">
              <div>monthly engagements across products</div>
              <div>240M+</div>
            </div>
            <div className="info_subcont">
              <div>member teams led & collaborated with</div>
              <div>5–10</div>
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
