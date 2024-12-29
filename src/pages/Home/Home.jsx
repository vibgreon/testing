import MyCharacter from "../../components/rive/MyCharacter";
import Carousel from "../../components/carousel/Carousel";

import Wrapper from "../../components/wrapper/Wrapper";

import "./Home.scss";

export default function Home() {
  return (
    <>
      <div className="cont">
        <Wrapper>
          <div className="hero__cont">
            <div className="rive__canvas">
              <MyCharacter />
            </div>
            <div className="hero__subcont">
              <div className="hero__title">Work Highlight 2024</div>
              <div className="hero__desc">
                {`I had the chance to dive into a mix of business
                        domains, which inspired me to embrace new design trends. The
                        focus was all about keeping things human-centric and scalable
                        for development. Let’s take a look at some of the work!`}
              </div>
            </div>
          </div>
        </Wrapper>
        <Carousel />
      </div>
    </>
  );
}
