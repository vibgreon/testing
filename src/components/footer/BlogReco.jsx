import "./BlogReco.scss";
import { NavLink, useLocation } from "react-router-dom";

export default function BlogReco({ data }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="blogReco-wrapper">
      <div className="blogReco-container">
        <div className="blogReco-main__title">Read next</div>
        <div className="blogReco-subcontainer">
          {data
            .filter((item) => item.show === true)
            .filter((item) => `/${item.url}` !== currentPath) // Exclude current blog
            .map((item) => {
              return (
                <NavLink key={item.id} to={`/${item.url}`}>
                  <div className="blogReco__item">
                    <div
                      className="blogReco__icon"
                      style={{ backgroundImage: `url(${item.icon})` }}
                    />
                    <div className="blogReco__item-container">
                      <div className="blogReco__item-title">{item.name}</div>
                      <div className="blogReco__item-desc">{item.title}</div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
        </div>
      </div>
      <div className="blogReco-filler"></div>
    </div>
  );
}
