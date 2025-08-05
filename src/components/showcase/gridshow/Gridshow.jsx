import "./Gridshow.scss";

import { NavLink } from "react-router-dom";

var imageList = [
  "saas-bill-landing-page.png",
  "verify-mail.png",
  "dashboard.png",
  "mercury-card-dark.png",
  "mercury-card-light.png",
  "vivek-blueripple-rive.gif",
  "mark-redesign-curve.png",
];

export default function Gridshow({ data }) {
  return (
    <>
      <div className="gridshow-cont">
        {/* <img src={`/visuals/${imageList[0]}`} /> */}
        <div className="gridshow-subcont">
          {imageList.slice(1).map((item, index) => (
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
