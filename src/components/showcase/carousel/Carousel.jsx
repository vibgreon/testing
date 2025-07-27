import "./Carousel.scss";

import { NavLink } from "react-router-dom";

export default function Carousel({ data }) {
  return (
    <>
      <div className="scroll">
        <div className="list">
          {data.filter((item) => item.show === true).map((item) => {
            return (
              <NavLink key={item.id} to={`${item.url}`}>
                <div
                  className="item-list"
                  style={{ backgroundImage: `url(${item.cover})` }}
                >
                  <div className="tag-list">
                    {item.tags?.map((items) => {
                      return <div className={item.theme == "dark" ? "carousel-tag__theme-dark" : "carousel-tag__theme-light"} key={items}>{items}</div>;
                    })}
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
