import "./Snack.scss";

import Wrapper from "../../wrapper/Wrapper";

export default function Snack({ data }) {
  return (
    <>
      <div className="snack_cont">
        <Wrapper>
          <div className="snack_header_cont">
            <div className="snack_title_cont">
              <div className="snack_title">{data.title}</div>
              <div>{data.description}</div>
              <div className="snack_tags">
                {data.tags?.map((item) => {
                  return <div key={item}>{item}</div>;
                })}
              </div>
            </div>
            {data.content?.map((item) => {
              return (
                <>
                  <div className="snack_img_cont">
                    <div
                      key={item.key}
                      className="snack_img"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="snack_img_title">{`${item.desc}`}</div>
                  </div>
                </>
              );
            })}
          </div>
        </Wrapper>
      </div>
    </>
  );
}
