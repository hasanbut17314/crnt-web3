import React from "react";
import chartImg from "../../assets/img/images/chart.png";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";
import ScrollAnimation from "react-animate-on-scroll";
import SalesPie from "./SalesPie";

const Sales = () => {
  const chart_info_list = [
    "33% - Seed, Pre-sale & Public Sale",
    "20% - Liquidity",
    "12% - Team/Advisors",
    "10% - Reserve",
    "20% - Marketing",
    "3% - Content Creators",
    "2% - Airdrop"
  ];

  return (
    <section id="sales" className="chart-area team-bg">
      <ScrollAnimation animateIn="fadeInUp">
        <div className="container">
          <div className="chart-inner">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10 order-0 order-lg-2">
                <div
                  className="chart-wrap wow fadeInRight"
                  data-wow-delay=".2s"
                >
                  <SalesPie />
                </div>
              </div>

              <div className="col-lg-6 col-md-10">
                <div
                  className="chart-content wow fadeInLeft"
                  data-wow-delay=".2s"
                >
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <SalesTabButton
                      title="Stage 1"
                      className="active"
                      id="seedsaletab"
                      target="#seedsale"
                      ariaControls="seedsale"
                      ariaSelected={true}
                    />

                    <SalesTabButton
                      title="Stage 2"
                      className=""
                      id="presaletab"
                      target="#presale"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 3"
                      className=""
                      id="publicsaletab"
                      target="#publicsale"
                      ariaControls="publicsale"
                      ariaSelected={false}
                    />
                  </ul>

                  <div className="tab-content" id="myTabContent">
                    <SalesTabContent
                      className={"show active"}
                      id="seedsale"
                      ariaLabel="seedsaletab"
                      title="1 CRNT = 0.100 USD"
                      tokens="4,369,000 CRNT"
                      duration="23 days"
                      subtitle="Ignition Stage"
                      description="This initial phase introduces early adopters to the CreationNetwork platform at an entry price of $0.100 per token, offering exclusive, low-cost access and paving the way for project growth and support."
                      link="/"
                    />

                    <SalesTabContent
                      className={""}
                      id="presale"
                      ariaLabel="presaletab"
                      title="1 CRNT = 0.125 USD"
                      subtitle="Acceleration Stage"
                      tokens="9,963,000 CRNT"
                      duration="26 days"
                      description="As interest builds, this phase provides investors an opportunity at $0.125 per token, allowing for increased engagement and support as the project progresses towards its development milestones."
                      link="/"
                    />
                    <SalesTabContent
                      className={""}
                      id="publicsale"
                      ariaLabel="publicsaletab"
                      title="1 CRNT = 0.150 USD"
                      subtitle="Momentum Stage"
                      tokens="18,369,000 CRNT"
                      duration="29 days"
                      description="With heightened engagement, tokens are offered at $0.150, marking a period where the project gains traction and community involvement becomes pivotal to the project's momentum."
                      link="/"
                    />
                    
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Sales;
