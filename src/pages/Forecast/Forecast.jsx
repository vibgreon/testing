import "./Forecast.scss";

export default function Forecast() {
  return (
    <>
      <div className="fc_wrapper">
        <div className="fc_title">
          <div>Forecast</div>
          <div>{`What's expected to come`}</div>
        </div>
        <ul>
          <li>
            Hands-on demo: AI-powered rapid prototyping in Figma using Design
            System.
          </li>
          <li>Release Onboarding case study.</li>
          <li>Hero section Rive motion & visual improvements.</li>
        </ul>
        <div>Stay tuned.</div>
      </div>
    </>
  );
}
