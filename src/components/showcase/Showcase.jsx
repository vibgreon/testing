import "./Showcase.scss";

import { useState } from "react";

import Carousel from "./carousel/Carousel";
import Gridmap from "./gridmap/Gridmap";

export default function Showcase({ data }) {
  const [change, setChange] = useState(false); // false = Case Study, true = Visuals

  return (
    <div className="showcase-main">
      <div className="showcase-switch__cont">
        <div className="showcase-switch__subcont">
          <div
            onClick={() => setChange(false)}
            className={!change ? "showcase-switch__on" : ""}
          >
            Case Study
          </div>
          <div
            onClick={() => setChange(true)}
            className={change ? "showcase-switch__on" : ""}
          >
            Visuals
          </div>
        </div>
      </div>

      <div className="showcase-content__cont">
        {!change && <Carousel data={data} />}
        {change && <Gridmap data={data} />}
      </div>
    </div>
  );
}
