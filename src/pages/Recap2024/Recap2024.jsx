import Showcase from "../../components/showcase/Showcase";

import Wrapper from "../../components/wrapper/Wrapper";

import "./Recap2024.scss";

import WorkSamples from "../WorkSamples.json";
var data = WorkSamples;

export default function Recap2024() {
  return (
    <>
      <div className="cont">
        <Wrapper>
          <div className="hero__cont">
            <div className="hero__subcont">
              <div className="hero__title">Recap 2024</div>
              <div className="hero__desc">
                {`This year I got to work across a ton of domains like AI, travel, fashion, e-commerce, manufacturing and a bunch more, while exploring tech and how it can push products to actually mean something in the market.`}
              </div>
            </div>
          </div>
        </Wrapper>
        <Showcase data={data} />
      </div>
    </>
  );
}
