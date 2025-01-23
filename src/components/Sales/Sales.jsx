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
                  
                >
                  <ul className="nav nav-tabs scroll-x" id="myTab" role="tablist" data-wow-delay=".2s"style={{
                    
                    whiteSpace: 'nowrap', 
                    display: 'flex', 
                    flexWrap: 'nowrap'
                  }} >
                    <SalesTabButton
                      title="Stage 1"
                      className="active"
                      id="stage1tab"
                      target="#stage1"
                      ariaControls="seedsale"
                      ariaSelected={true}
                    />

                    <SalesTabButton
                      title="Stage 2"
                      className=""
                      id="stage2tab"
                      target="#stage2"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 3"
                      className=""
                      id="stage3tab"
                      target="#stage3"
                      ariaControls="publicsale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 4"
                      className=""
                      id="stage4tab"
                      target="#stage4"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 5"
                      className=""
                      id="stage5tab"
                      target="#stage5"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 6"
                      className=""
                      id="stage6tab"
                      target="#stage6"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 7"
                      className=""
                      id="stage7tab"
                      target="#stage7"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 8"
                      className=""
                      id="stage8tab"
                      target="#stage8"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 9"
                      className=""
                      id="stage9tab"
                      target="#stage9"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 10"
                      className=""
                      id="stage10tab"
                      target="#stage10"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 11"
                      className=""
                      id="stage11tab"
                      target="#stage11"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 12"
                      className=""
                      id="stage12tab"
                      target="#stage12"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 13"
                      className=""
                      id="stage13tab"
                      target="#stage13"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 14"
                      className=""
                      id="stage14tab"
                      target="#stage14"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 15"
                      className=""
                      id="stage15tab"
                      target="#stage15"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 16"
                      className=""
                      id="stage16tab"
                      target="#stage16"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 17"
                      className=""
                      id="stage17tab"
                      target="#stage17"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 18"
                      className=""
                      id="stage18tab"
                      target="#stage18"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 19"
                      className=""
                      id="stage19tab"
                      target="#stage19"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                    <SalesTabButton
                      title="Stage 20"
                      className=""
                      id="stage20tab"
                      target="#stage20"
                      ariaControls="presale"
                      ariaSelected={false}
                    />
                  </ul>

                  <div className="tab-content" id="myTabContent">
                    <SalesTabContent
                      className={"show active"}
                      id="stage1"
                      ariaLabel="stage1tab"
                      title="1 CRNT = 0.02 USDT"
                      tokens="1,300,000 Crnt"
                      duration="30 days"
                      subtitle="Ignition Stage"
                      description="This initial phase introduces early adopters to the CreationNetwork platform at an entry price of 0.02 usdt per token, offering exclusive, low-cost access and paving the way for project growth and support."
                      link="/"
                    />

                    <SalesTabContent
                      className={""}
                      id="stage2"
                      ariaLabel="stage2tab"
                      title="1 CRNT = 0.022 USDT"
                      subtitle="Acceleration Stage"
                      tokens="1,600,000 CRNT"
                      duration="30 days"
                      description="As interest builds, this phase provides investors an opportunity at 0.022 usdt per token, allowing for increased engagement and support as the project progresses towards its development milestones."
                      link="/"
                    />
                    <SalesTabContent
                      className={""}
                      id="stage3"
                      ariaLabel="stage3tab"
                      title="1 CRNT = 0.024 USDT"
                      subtitle="Momentum Stage"
                      tokens="1,900,000  CRNT"
                      duration="30 days"
                      description="With heightened engagement, tokens are offered at 0.024 usdt per token, marking a period where the project gains traction and community involvement becomes pivotal to the project's momentum."
                      link="/"
                    />
                     <SalesTabContent
                      className={""}
                      id="stage4"
                      ariaLabel="stage4tab"
                      title="1 CRNT = 0.026 USDT"
                      subtitle="Momentum Stage"
                      tokens="2,300,000 CRNT"
                      duration="30 days"
                      description="(0.026 USDT/CRNT): Expansion Phase - As the project grows, this stage allows for increased accessibility at 0.026 USDT per token, supporting wider adoption and community expansion."
                      link="/"
                    />
                     <SalesTabContent
                      className={""}
                      id="stage5"
                      ariaLabel="stage5tab"
                      title="1 CRNT = 0.028 USDT"
                      subtitle="Momentum Stage"
                      tokens="2,600,000 CRNT"
                      duration="30 days"
                      description="(0.028 USDT/CRNT): Development Milestone - Tokens are offered at 0.028 USDT, coinciding with key development milestones that demonstrate the project's progress and potential."
                      link="/"
                    />
                     <SalesTabContent
                      className={""}
                      id="stage6"
                      ariaLabel="stage6tab"
                      title="1 CRNT = 0.03 USDT"
                      subtitle="Momentum Stage"
                      tokens="3,700,000 CRNT"
                      duration="30 days"
                      description=" (0.030 USDT/CRNT): Community Consolidation - With a focus on community engagement, this stage is priced at 0.030 USDT per token, strengthening the project's supporter base."
                      link="/"
                    />
                      <SalesTabContent
                      className={""}
                      id="stage7"
                      ariaLabel="stage7tab"
                      title="1 CRNT = 0.032 USDT"
                      subtitle="Momentum Stage"
                      tokens="4,000,000 CRNT"
                      duration="30 days"
                      description=" (0.032 USDT/CRNT): Ecosystem Integration - As the project integrates with wider ecosystems, tokens are available at 0.032 USDT, reflecting increased utility and demand."
                      link="/"
                    />
                     <SalesTabContent
                      className={""}
                      id="stage8"
                      ariaLabel="stage8tab"
                      title="1 CRNT = 0.034 USDT"
                      subtitle="Momentum Stage"
                      tokens="4,100,000 CRNT"
                      duration="30 days"
                      description="(0.034 USDT/CRNT): Adoption Acceleration - Priced at 0.034 USDT per token, this stage aims to drive wider adoption and usage of the platform."
                      link="/"
                    />
                    <SalesTabContent
                      className={""}
                      id="stage9"
                      ariaLabel="stage9tab"
                      title="1 CRNT = 0.036 USDT"
                      subtitle="Momentum Stage"
                      tokens="4,300,000 CRNT"
                      duration="30 days"
                      description=" (0.036 USDT/CRNT): Governance Participation - At this stage, 0.036 USDT per token allows for increased community governance and decision-making."
                      link="/"
                    />
                    <SalesTabContent
                      className={""}
                      id="stage10"
                      ariaLabel="stage10tab"
                      title="1 CRNT = 0.038 USDT"
                      subtitle="Momentum Stage"
                      tokens="4,600,000 CRNT"
                      duration="30 days"
                      description="(0.038 USDT/CRNT): Liquidity Provision - Tokens are offered at 0.038 USDT, incentivizing liquidity provision to support the project's growth."
                      link="/"
                    />
                     <SalesTabContent
                      className={""}
                      id="stage11"
                      ariaLabel="stage11tab"
                      title="1 CRNT = 0.04 USDT"
                      subtitle="Momentum Stage"
                      tokens="4,900,000 CRNT"
                      duration="30 days"
                      description="(0.040 USDT/CRNT): Stability and Maturity - This stage reflects the project's increased stability and maturity, with tokens offered at 0.040 USDT."
                      link="/"
                    />
                    <SalesTabContent
                      className={""}
                      id="stage12"
                      ariaLabel="stage12tab"
                      title="1 CRNT = 0.042 USDT"
                      subtitle="Momentum Stage"
                      tokens="5,100,000 CRNT"
                      duration="30 days"
                      description="(0.042 USDT/CRNT): Ecosystem Integration - Tokens are priced at 0.042 USDT, coinciding with deeper integration into broader blockchain ecosystems."
                      link="/"
                    />
                      <SalesTabContent
                      className={""}
                      id="stage13"
                      ariaLabel="stage13tab"
                      title="1 CRNT = 0.044 USDT"
                      subtitle="Momentum Stage"
                      tokens="5,300,000 CRNT"
                      duration="30 days"
                      description="(0.044 USDT/CRNT): Utility Expansion - At this stage, the token's utility is expanded, with a price of 0.044 USDT per token."
                      link="/"
                    />
                    <SalesTabContent
                      className={""}
                      id="stage14"
                      ariaLabel="stage14tab"
                      title="1 CRNT = 0.046 USDT"
                      subtitle="Momentum Stage"
                      tokens="5,600,000 CRNT"
                      duration="30 days"
                      description="(0.046 USDT/CRNT): Governance Evolution - Tokens are offered at 0.046 USDT, aligning with advancements in the project's governance model."
                      link="/"
                    />
                     <SalesTabContent
                      className={""}
                      id="stage15"
                      ariaLabel="stage15tab"
                      title="1 CRNT = 0.048 USDT"
                      subtitle="Momentum Stage"
                      tokens="5,900,000 CRNT"
                      duration="30 days"
                      description="(0.048 USDT/CRNT): Liquidity Incentivization - This stage focuses on incentivizing liquidity, with tokens priced at 0.048 USDT."
                      link="/"
                    />
                     <SalesTabContent
                      className={""}
                      id="stage16"
                      ariaLabel="stage16tab"
                      title="1 CRNT = 0.05 USDT"
                      subtitle="Momentum Stage"
                      tokens="6,000,000 CRNT"
                      duration="30 days"
                      description="(0.050 USDT/CRNT): Strategic Partnerships - Tokens are offered at 0.050 USDT, leveraging strategic partnerships to drive growth."
                      link="/"
                    />

                     <SalesTabContent
                      className={""}
                      id="stage17"
                      ariaLabel="stage17tab"
                      title="1 CRNT = 0.052 USDT"
                      subtitle="Momentum Stage"
                      tokens="6,300,000 CRNT"
                      duration="30 days"
                      description=" (0.052 USDT/CRNT): Ecosystem Diversification - At this stage, the project diversifies into new ecosystem verticals, with tokens priced at 0.052 USDT."
                      link="/"
                    />
                    <SalesTabContent
                      className={""}
                      id="stage18"
                      ariaLabel="stage18tab"
                      title="1 CRNT = 0.054 USDT"
                      subtitle="Momentum Stage"
                      tokens="6,600,000 CRNT"
                      duration="30 days"
                      description=" (0.054 USDT/CRNT): Adoption Milestones - Tokens are offered at 0.054 USDT, coinciding with significant user adoption and usage milestones."
                      link="/"
                    />
                    <SalesTabContent
                      className={""}
                      id="stage19"
                      ariaLabel="stage19tab"
                      title="1 CRNT = 0.056 USDT"
                      subtitle="Momentum Stage"
                      tokens="6,900,000 CRNT"
                      duration="30 days"
                      description="(0.056 USDT/CRNT): Tokenomics Refinement - This stage involves refining the token's economics, with tokens priced at 0.056 USDT."
                      link="/"
                    />
                    <SalesTabContent
                      className={""}
                      id="stage20"
                      ariaLabel="stage20tab"
                      title="1 CRNT = 0.058 USDT"
                      subtitle="Momentum Stage"
                      tokens="7,000,000 CRNT"
                      duration="30 days"
                      description="(0.058 USDT/CRNT): Long-term Value - Tokens are offered at 0.058 USDT, reflecting the project's long-term value proposition."
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
