import "./Context.scss";

import { useState } from "react";

export default function Context({ cover, title, desc, details }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${cover})` }}
        className="ctx_card"
        onClick={() => {
          setShow(!show);
        }}
      >
        <div className="ctx_card_cont">
          <div>{title}</div>
          {/* <div>{desc}</div> */}
          <div>tap to know more</div>
        </div>
      </div>
      {show && (
        <div className="ctx_cont">
          <div
            className="ctx_close_ph"
            onClick={() => {
              setShow(!show);
            }}
          >
            <img src="./icon/exit.svg" />
          </div>
          <div className="ctx_subcont">
            <div
              className="ctx_close"
              onClick={() => {
                setShow(!show);
              }}
            >
              <div>Close</div>
              <img src="./icon/exit_black.svg" />
            </div>
            <div className="ctx_details">
              <div className="ctx_intro">
                <div>{title}</div>
                <div>{desc}</div>
              </div>
              <div>{details}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
