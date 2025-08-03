import "./Gridshow.scss";

var data = [
  "saas-bill-landing-page.png",
  "mercury-card-dark.png",
  "mercury-card-light.png",
  "mark-redesign-curve.png",
  "mark-redesign-solid.png",
];

export default function Gridshow() {
  return (
    <>
      <div className="gridshow-cont">
        <img src={`/visuals/${data[0]}`} />
        <div className="gridshow-subcont">
          {data.slice(1).map((item, index) => (
            <div className="gridshow-item">
              <img src={`/visuals/${item}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
