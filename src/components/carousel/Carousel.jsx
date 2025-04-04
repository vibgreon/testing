import "./Carousel.scss";

import { NavLink } from "react-router-dom";

import WorkSamples from "../../pages/WorkSamples.json";
var data = WorkSamples;

export default function Carousel() {
  return (
    <>
      <div className="scroll">
        <div className="list">
          {data.map((item) => {
            return (
              <NavLink key={item.id} to={`${item.url}`}>
                <div
                  className="item-list"
                  style={{ backgroundImage: `url(${item.cover})`}}
                >
                </div>
              </NavLink>
            )
          })}
        </div>
      </div>
    </>
  );
}
