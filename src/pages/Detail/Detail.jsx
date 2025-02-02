import "./Detail.scss";

import Wrapper from "../../components/wrapper/Wrapper";

import Context from "../../components/context/Context";

export default function Detail() {
  return (
    <>
      <div className="cont">
        <Wrapper>
          <div className="detl_cont">
            <div className="detl_header">
              <div className="detl_tag">
                <div>ux improvement</div>
                <div>ecommerce</div>
              </div>
              <div className="detl_title">
                Increase Product Awareness and Reduce CAC
              </div>
              <div>
                CAC covers range of elements not just money but the management
                of time and resource allocation. To reduce engagement on things
                which should be understood naturally and help users to get what
                they wish to get, certain design changes were made which is
                represented below.
              </div>
            </div>
            <div className="detl_content">
              <div>
                <div>Problem Discovery</div>
                <div>
                  Customer often raised questions asking if the product listed
                  on website is 2nd hand?
                </div>
              </div>
              <div>
                <div>Goals</div>
                <div>
                  Make customers understand that every product is bespoke /
                  customizable and made to order.
                </div>
              </div>
              <div>
                <div>Implementation & Approach</div>
                <div>
                  Based on common behavior of certain customer range, we created
                  User Personas and made changes across touchpoints specifics to
                  product info and purchase and areas outside our website, ie,
                  social media platforms and consultation meetings.
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
        <div className="detl_scroll">
          <div className="detl_list">
            <Context title={`Some Title`} desc={`Description about the title above`} details={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`} cover={`/card.webp`} />
            <Context title={`Some Title`} desc={`Description about the title above`} details={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`} cover={`/card.webp`} />
            <Context title={`Some Title`} desc={`Description about the title above`} details={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`} cover={`/card.webp`} />
            <Context title={`Some Title`} desc={`Description about the title above`} details={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`} cover={`/card.webp`} />
          </div>
        </div>
      </div>
    </>
  );
}
