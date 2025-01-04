import "./Contact.scss";

import Wrapper from "../../components/wrapper/Wrapper";

export default function Contact() {
  return (
    <>
      <Wrapper>
        <div className="contact_cont">
          <div className="contact_subcont">
            <a href="https://www.linkedin.com/in/vibgreon/" target="_blank">
              <div className="contact_item">
                <div>
                  <img src="./logo/logo-linkedin.svg" />
                  linkedin
                </div>
                <div>linkedin.com/in/vibgreon</div>
              </div>
            </a>
            <a href="https://linktr.ee/vibgreon" target="_blank">
              <div className="contact_item">
                <div>
                  <img src="./logo/logo-linktree.svg" />
                  linktreee
                </div>
                <div>linktr.ee/vibgreon</div>
              </div>
            </a>
            <a href="https://github.com/vibgreon" target="_blank">
              <div className="contact_item">
                <div>
                  <img src="./logo/logo-github.svg" />
                  github
                </div>
                <div>github.com/vibgreon</div>
              </div>
            </a>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
