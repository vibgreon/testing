import "./Explaination.scss";

import Wrapper from "../../wrapper/Wrapper";

import Context from "../../context/Context";

export default function Explaination({ data }) {
  return (
    <>
      <div className="blog_cont">
        <div className="blog_header_cont">
          <Wrapper>
            <div className="blog_header_subcont">
              <div className="blog_title_cont">
                <div className="blog_title">{data.title}</div>
                <div>{data.description}</div>
                <div className="tags">
                  {data.tags?.map((item) => {
                    return <div key={item}>{item}</div>;
                  })}
                </div>
              </div>
              <div className="blog_cover" style={{ backgroundImage: `url(${data.cover})` }}></div>
            </div>
          </Wrapper>
        </div>
        <Wrapper>
          <div className="blog_assess_cont">
            {data.content?.map((item) => {
              return (
                <div key={item.key}>
                  <div>{item.subtitle}</div>
                  <div>{item.subcontent}</div>
                </div>
              );
            })}
          </div>
        </Wrapper>
        <div className="blog_slides">
          <div className="blog_slides_list">
            {data.snapshots?.map((item) => {
              return (
                <Context
                  key={item.key}
                  title={item.imgTitle}
                  tag={item.tag}
                  desc={item.imgDesc}
                  cover={item.imgBg}
                  details={item.imgCont}
                />
              );
            })}
          </div>
        </div>
        <Wrapper>
          <div className="blog_conclusion_cont">
            <div className="conclusion">
              <div>{data.conclusion.conclusionTitle}</div>
              <div>{data.conclusion.conclusionDesc}</div>
            </div>
            <div className="notes">
              <div>{data.conclusion.note.noteTitle}</div>
              <div>{data.conclusion.note.noteDesc}</div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
