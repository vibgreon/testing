import "./Context.scss";

import { useState } from "react";

export default function Context({ cover, title, desc, details }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
      className="ctx_card"
        onClick={() => {
          setShow(!show);
        }}
      >
        <div>{title}</div>
        <div>{desc}</div>
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
              close
              <img src="./icon/exit.svg" />
            </div>
            <div className="ctx_details">
              <div className="ctx_intro">
                <div>{title}</div>
                <div>{desc}</div>
              </div>
              {/* <img src={cover} alt="" /> */}
              <div>{details}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}