import MyCharacter from "./components/rive/myCharacter";
import Carousel from "./components/carousel/Carousel";

import Navbar from "./components/navbar/Navbar";
import Wrapper from "./components/wrapper/Wrapper";

import "./App.scss";

function App() {
  return (
    <>
      <div className="cont">
        <Wrapper>
          <Navbar />
          <div className="hero__cont">
            <div className="rive__canvas">
              <MyCharacter />
            </div>
            <div className="hero__subcont">
              <div className="hero__title">Work Highlight 2024</div>
              <div className="hero__desc">
                It was my pleasure experiencing variety of Business domain this
                year, inspired me to adapt New Design Trends, making it Human
                Centric and feasible for development at scale. Lets Explore some
                of them below.
              </div>
            </div>
          </div>
        </Wrapper>
        <Carousel />
      </div>
    </>
  );
}

export default App;
