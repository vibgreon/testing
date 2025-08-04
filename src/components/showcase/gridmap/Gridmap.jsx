import "./Gridmap.scss";

// import { NavLink } from "react-router-dom";

import Gridshow from "../gridshow/Gridshow";
import Wrapper from "../../wrapper/Wrapper";

export default function Gridmap({ data }) {
  return (
    <>
      <Wrapper>
        <Gridshow data={ data } />
        {/* <div className="gridmap__container">
          {data.map((item, itemIndex) =>
            item.content.map((block, blockIndex) => {
              if (!Array.isArray(block.image)) return null; // skip if no image array
              return block.image.map((img, imgIndex) => (
                <NavLink
                  key={`${itemIndex}-${blockIndex}-${imgIndex}`}
                  to={`/${item.url}`}
                >
                  <div className="gridmap__item">
                    <div
                      className="gridmap__image"
                      style={{ backgroundImage: `url(${img})` }}
                    />
                    <div className="gridmap__name">{item.name}</div>
                    <div>{block.subTitle}</div>
                  </div>
                </NavLink>
              ));
            })
          )}
        </div> */}
      </Wrapper>
    </>
  );
}
