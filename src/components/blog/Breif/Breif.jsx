import "./Breif.scss";

import Wrapper from "../../wrapper/Wrapper";
import { useState } from "react";

import Tooltip from "../../tooltip/Tooltip";

// import Context from "../../context/Context";

export default function Breif({ data }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Wrapper>
        <div className="breif-main__container">
          <div className="breif-header__container">
            <div className="breif-header__title">{data.title}</div>
            <div className="breif-header__desc">{data.responsibility}</div>
            <div className="breif-header__metaData">
              <div className="breif-header__metaData_ownedBy">
                <img src="./icon/blog/source-repo.svg" />
                <Tooltip message={data.metaData.source.desc}>
                  <div className="breif-header__metaData_ownedBy_text">
                    {data.metaData.source.ownedBy}
                  </div>
                </Tooltip>
              </div>
              <div className="breif-header__metaData_category">
                <img src="./icon/blog/small-shop.svg" />
                <Tooltip message={data.metaData.domain.desc}>
                  <div className="breif-header__metaData_category_text">
                    {data.metaData.domain.category}
                  </div>
                </Tooltip>
              </div>
              <div className="breif-header__metaData_readTime">
                <div className="breif-header__metaData_readTime_iconContainer">
                  {!show ? (
                    <div
                      onClick={() => {
                        setShow(!show);
                      }}
                      className="breif-header__metaData_readTime_icon--default"
                    >
                      <img src="./icon/blog/eye-empty.svg" />
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setShow(!show);
                      }}
                      className="breif-header__metaData_readTime_icon--active"
                    >
                      <img src="./icon/blog/eye-filled.svg" />
                    </div>
                  )}
                  {show ? (
                    <div
                      onClick={() => {
                        setShow(!show);
                      }}
                      className="breif-header__metaData_readTime_icon--default"
                    >
                      <img src="./icon/blog/clock-empty.svg" />
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setShow(!show);
                      }}
                      className="breif-header__metaData_readTime_icon--active"
                    >
                      <img src="./icon/blog/clock-filled.svg" />
                    </div>
                  )}
                </div>
                <div className="breif-header__metaData_readTime_text">
                  {!show ? (
                    <Tooltip message={`Read time for entire content`}>
                      <div>{`${data.metaData.time.read} min. reading`}</div>
                    </Tooltip>
                  ) : (
                    <Tooltip message={`Watch time for entire video content`}>
                      <div>{`${data.metaData.time.view} min. watching`}</div>
                    </Tooltip>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="breif-company__container">
            <div
              className="breif-company__cover"
              style={{ backgroundImage: `url(${data.cover})` }}
            ></div>
            <div className="breif-company__desc">
              {data.description}
              {data.caution && (
                <div className="breif-company__in-progress_cont">
                  <div className="breif-company__in-progress_tag">
                    <img src="./icon/blog/toast/sparks.svg" />
                    <div>{data.caution.type}</div>
                  </div>
                  <div>{data.caution.message}</div>
                </div>
              )}
            </div>
          </div>
          <div className="breif-content__container">
            <div className="breif-content__navigation">
              <div className="breif-content__navTitle">Table of contents</div>
              {data.content?.map((item) => {
                return (
                  <a
                    href={`#${item.subTitle}`}
                    key={item.key}
                    className="breif-content__navItem"
                  >
                    {item.subTitle}
                  </a>
                );
              })}
            </div>
            <div className="breif-content__subContainer">
              {data.content?.map((item) => {
                return (
                  <div
                    key={item.key}
                    className="breif-content__itemContainer"
                    id={`${item.subTitle}`}
                  >
                    <div className="breif-content__itemTitleContainer">
                      <div className="breif-content__itemTitle">
                        {item.subTitle}
                      </div>
                      <div
                        className="breif-content__itemDesc"
                        dangerouslySetInnerHTML={{ __html: item.subContent }}
                      />
                    </div>
                    {item.embed && (
                      <div className="brief-content__embedContainer">
                        <div className="breif-context__embedText">
                          figma/slides crashed? Try on desktop
                        </div>
                        <iframe
                          className="breif-content__embed"
                          src={item.embed}
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin"
                          allowFullScreen
                        />
                      </div>
                    )}
                    {item.image?.map((item) => {
                      return (
                        <div
                          key={item.key}
                          className="breif-content__image"
                          style={{ backgroundImage: `url(${item})` }}
                        ></div>
                      );
                    })}
                  </div>
                );
              })}
              <div className="breif-content__subContainer-end">
                <img src="./icon/blog/blog-end.svg" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
