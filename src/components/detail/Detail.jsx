import "./Detail.scss";

import Wrapper from "../wrapper/Wrapper";

import Context from "../context/Context";

export default function Detail({ data }) {
  return (
    <>
      <div className="cont">
        <Wrapper>
          <div className="detl_cont">
            <div className="detl_header">
              <div className="detl_tag">
                {data.tags?.map((item) => {
                  return <div key={item}>{item}</div>;
                })}
              </div>
              <div className="detl_title">{data.title}</div>
              <div>{data.desc}</div>
            </div>
            <div className="detl_content">
              {data.content?.map((item) => {
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
            {data.snapshots?.map((item) => {
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
        <Wrapper>
          <div className="conc_cont">
            <div className="conclusion">
              <div>{data.conclusion.conclusionTitle}</div>
              <div>{data.conclusion.conclusionDesc}</div>
            </div>
            <div className="notes">
              <div>{data.conclusion.note.noteTitle}</div>
              <div>{`${data.conclusion.note.noteDesc}`}</div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
