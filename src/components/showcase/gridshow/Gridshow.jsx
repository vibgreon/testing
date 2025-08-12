import "./Gridshow.scss";

import { NavLink } from "react-router-dom";

var imageList = [

];

export default function Gridshow({ data }) {
  return (
    <>
      <div className="gridshow-cont">
        <div className="gridshow-subcont">
          {imageList.map((item, index) => (
            <div className="gridshow-item" key={`${index}`}>
              <img src={`/visuals/${item}`} />
            </div>
          ))}
          {data.map((item, itemIndex) =>
            item.content.map((block, blockIndex) => {
              if (!Array.isArray(block.image)) return null; // skip if no image array
              return block.image.map((img, imgIndex) => (
                <NavLink
                  key={`${itemIndex}-${blockIndex}-${imgIndex}`}
                  to={`/${item.url}`}
                >
                  <div className="gridshow-item">
                    <img src={`${img}`} />
                  </div>
                </NavLink>
              ));
            })
          )}
        </div>
      </div>
    </>
  );
}
