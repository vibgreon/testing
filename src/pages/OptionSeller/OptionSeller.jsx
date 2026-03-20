import Wrapper from "../../components/wrapper/Wrapper";

import { useCursorProps } from "../../components/cursor/CursorContext";

import "./OptionSeller.scss";

export default function OptionSeller() {
  const cursorProps = useCursorProps();
  return (
    <>
      <div className="os_wrapper">
        <div className="os_cover_img_cont" {...cursorProps("Scroll down")}>
          <img src="/projects/options-seller/phone-in-a-frame.png" />
        </div>
        <Wrapper>
          <div className="os_cont">
            <div className="os_cont_content_cont">
              <div className="os_cont_content_title_cont">
                <div>SAHI : High Frequency Trading Platform</div>
                <div>Introducing Options Seller for Options Trading</div>
              </div>
              <div className="os_cont_context_cont">
                <div className="os_context_item_cont">
                  <div>mission</div>
                  <div>{`Make SAHI a daily habit for India's options traders by cracking the HNI market for predictable, scalable revenue.`}</div>
                </div>
                <div className="os_context_item_cont">
                  <div>approach</div>
                  <div>
                    We focus our positioning around Option Sellers. Since option
                    selling requires significant capital, it remains primarily a
                    professional and HNI activity, making it a high-value
                    segment worth targeting.
                  </div>
                </div>
              </div>
            </div>
            <div className="os_img_cont">
              <img
                src="/projects/options-seller/top/1.png"
                {...cursorProps("Option Chain")}
              />
              <img
                src="/projects/options-seller/top/2.png"
                {...cursorProps("Select Strike")}
              />
              <img
                src="/projects/options-seller/top/3.png"
                {...cursorProps("Strike Chart")}
              />
            </div>
            <div className="os_cont_execution_cont">
              <div className="os_cont_context_cont">
                <div className="os_context_item_cont">
                  <div>insight</div>
                  <div>{`More than 97% of individual traders in India are Option Buyers, yet roughly 70 to 80% of options expire worthless, giving sellers a clear statistical edge. Despite this opportunity, the segment remained largely underserved. Our previous Option Scalper for Options Trading, with its fast Limit Trigger and Take Profit execution, was adopted across multiple brokerage platforms, yet fewer than 18% of users were using it specifically for options trading, as most still preferred the Option Chain. This gap is exactly where we saw the opportunity.`}</div>
                </div>
                <div className="os_context_item_cont">
                  <div>idea</div>
                  <div>{`We segment Option Seller as a dedicated feature, giving us a clear market differentiator against competing brokerages. Known for our innovation, we take it further by building a richer analysis system, combining strike and instrument charts with the Option Chain, and integrating Basket Order, Analyze, and Payoff Graph into a unified summary view, eliminating the need to switch between multiple screens and reducing prep time for both new and experienced traders, building a deeply improved experience for both Option Buyers and Sellers, but marketing it as Option Seller mode to attract the right segment.`}</div>
                </div>
              </div>
              <div className="os_cont_insight_cont">
                <div className="os_insight_context">
                  <div>impact</div>
                  <div>{`Option sellers retain at 2× the rate of buyers (60% vs 30%), and with daily premiums compounding to 36.5% to 73% annualized gains, their higher AUM makes each seller structurally more valuable. Seller Mode is a deliberate shift in user base quality, and the DTU/DAU jump from 6.5% to 9.7% on normal days and 16.7% on expiry days proves it is working.`}</div>
                </div>
                <div className="os_insight_stats">
                  <div className="os_insight_stats_item">
                    <div>+49%</div>
                    <div>DTU/DAU base</div>
                  </div>
                  <div className="os_insight_stats_item">
                    <div>+157%</div>
                    <div>DTU/DAU peak</div>
                  </div>
                  <div className="os_insight_stats_item">
                    <div>2x</div>
                    <div>Seller Retention rate</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="os_cont_quote_cont">
              <img src="/projects/options-seller/quote.svg" />
              <div className="os_cont_quote">
                SAHI is a brokerage platform that enables trading in F&O,
                stocks, IPOs, and ETFs, with a strong focus on improving the
                Options Trading journey.
              </div>
              <div className="os_cont_quote_info_cont">
                <img src="/projects/options-seller/dale.png" />
                <div className="os_cont_quote_info">
                  <div>Dale Vaz</div>
                  <div>Founder & CEO</div>
                </div>
              </div>
            </div>
            <div className="os_img_cont">
              <img
                src="/projects/options-seller/bottom/1.png"
                {...cursorProps("Configure Option Chain")}
              />
              <img
                src="/projects/options-seller/bottom/2.png"
                {...cursorProps("Adjust Position")}
              />
              <img
                src="/projects/options-seller/bottom/3.png"
                {...cursorProps("Exit and Open Position")}
              />
            </div>
            <div className="os_cont_credit_cont">
              <div className="os_cont_credit_title">Credits</div>
              <div className="os_cont_contributor">
                <div className="os_cont_contributor_item">
                  <div>Reviewers</div>
                  <div>Dale Vaz</div>
                  <div>Anurag Arora</div>
                  <div>Harshit Anand</div>
                </div>
                <div className="os_cont_contributor_item">
                  <div>Product Manager</div>
                  <div>Deven Mehta</div>
                </div>
                <div className="os_cont_contributor_item">
                  <div>Product Designers</div>
                  <div>
                    Vivek Venkatesh <span>{`(me)`}</span>
                  </div>
                  <div>Vaibhav</div>
                </div>
                <div className="os_cont_contributor_item">
                  <div>Devs</div>
                  <div>Anupam</div>
                  <div>Ayush</div>
                </div>
                <div className="os_cont_contributor_item">
                  <div>Special Contributors</div>
                  <div>Sahi Alpha Testers</div>
                  <div>Current Users</div>
                  <div>Social Media Followers</div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}