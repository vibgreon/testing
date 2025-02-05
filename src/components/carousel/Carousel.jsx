import "./Carousel.scss";

import { NavLink } from "react-router-dom";

export default function Carousel() {
  return (
    <>
      <div className="scroll">
        <div className="list">
          <NavLink to={"/competitionsuitshop-product-awareness"}>
            <div className="item">
              <img src="/card.webp" alt="" />
            </div>
          </NavLink>
          <div className="item">
            <img src="/card.webp" alt="" />
          </div>
          <div className="item">
            <img src="/card.webp" alt="" />
          </div>
          <div className="item">
            <img src="/card.webp" alt="" />
          </div>
          <div className="item">
            <img src="/card.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
