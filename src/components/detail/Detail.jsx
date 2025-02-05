import "./Detail.scss";

import Wrapper from "../wrapper/Wrapper";

import Context from "../context/Context";

export default function Detail({ title, desc, tag, context, snapshot }) {
  return (
    <>
      <div className="cont">
        <Wrapper>
          <div className="detl_cont">
            <div className="detl_header">
              <div className="detl_tag">
                {tag?.map((item) => {
                  return <div key={item}>{item}</div>;
                })}
              </div>
              <div className="detl_title">{title}</div>
              <div>{desc}</div>
            </div>
            <div className="detl_content">
              {context?.map((item) => {
                return (
                  <div key={item.key}>
                    <div>{item.subtitle}</div>
                    <div>{item.subcontent}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Wrapper>
        <div className="detl_scroll">
          <div className="detl_list">
            {snapshot?.map((item) => {
              return (
                <Context
                  key={item.key}
                  title={item.imgTitle}
                  desc={item.imgDesc}
                  cover={item.imgBg}
                  details={item.imgCont}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
