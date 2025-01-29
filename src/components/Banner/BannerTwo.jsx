import React, { useEffect, useState } from "react";
import icon from "../../assets/img/icon/scroll_icon.svg";
import bannerImg from "../../assets/img/banner/banner_img.png";
import { Link } from "react-router-dom";
import { handleClickScroll } from "../../lib/helpers";
import fireIcon from "../../assets/img/icon/fire.png";
import { icoAbi } from "../../utils/constants";
import { icoAddress } from "../../utils/constants";
import { useContractRead } from 'wagmi'

import BuyNow from "../Buttons/BuyNow";
import { useContext } from "react";
import { IcoContext } from "../../contexts/context";
import { ethers } from "ethers";
import ConnectWallet from "../Buttons/ConnectWallet";

const BannerTwo = () => {
  const [percentRaised, setPercentRaised] = useState(10);
  const [isHovered, setIsHovered] = useState(false);
  const { connectWallet, currentAccount } = useContext(IcoContext);

  // let targetRaised;
  const [targetRaised, setTargetRaised] = useState(0);
  let stageRaised0 = 0;
  let stageRaised1 = 0;
  let stageRaised2 = 0;

  const {
    data: currentStageData,
    isError: isCurrentStageError,
    isLoading: isCurrentStageLoading,
  } = useContractRead({
    address: icoAddress,
    abi: icoAbi,
    functionName: "currentStage",
  });

  

  const {
    data: stageDetailsData,
    isError: isStageDetailsError,
    isLoading: isStageDetailsLoading,
  } = useContractRead({
    address: icoAddress,
    abi: icoAbi,
    functionName: "stages",
    args: [`${currentStageData}`], // Pass currentStage only when available
  });
  

  let tokenRaised;


  

  let pricepertoken
  if (stageDetailsData) {
    pricepertoken = stageDetailsData[1];
    pricepertoken = Number(pricepertoken) / 1000000000000000000
    tokenRaised = stageDetailsData[5]
    tokenRaised= Number(tokenRaised)/1000000000000000000
  }

  //   console.log(typeof(currentStageData),'type of current stage')
  const {
    data: stageDetailsData0,
    isError: isStageDetailsError0,
    isLoading: isStageDetailsLoading0,
  } = useContractRead({
    address: icoAddress,
    abi: icoAbi,
    functionName: "stages",
    args: ["0"], // Pass currentStage only when available
  });
  if (stageDetailsData0) {
    stageRaised0 = stageDetailsData0[5]
    stageRaised0 = Number(stageRaised0)
  }


  const {
    data: stageDetailsData1,
    isError: isStageDetailsError1,
    isLoading: isStageDetailsLoading1,
  } = useContractRead({
    address: icoAddress,
    abi: icoAbi,
    functionName: "stages",
    args: ["1"], // Pass currentStage only when available
  });
  if (stageDetailsData1) {
    stageRaised1 = stageDetailsData1[5]
    stageRaised1 = Number(stageRaised1)
  }

  const {
    data: stageDetailsData2,
    isError: isStageDetailsError2,
    isLoading: isStageDetailsLoading2,
  } = useContractRead({
    address: icoAddress,
    abi: icoAbi,
    functionName: "stages",
    args: ["2"], // Pass currentStage only when available
  });
  if (stageDetailsData2) {
    stageRaised2 = stageDetailsData2[5]
    stageRaised2 = Number(stageRaised2)
  }


  // setTargetRaised(stageRaised1+stageRaised1+stageRaised2)
  let totalRagetRaised = stageRaised1 + stageRaised1 + stageRaised2

  const {
    stagePrice,
    currentStage,
    currentStageMinted,
    currentStageAllocation,
  } = useContext(IcoContext);
  // let currentStage = 0;
  const colorScales = {
    1: "#02C4F4",
    2: "#FF9700",
    3: "#12d176",
  };
  const calculateAmountRaised = async () => {
    const percentageMinted =
      (currentStageMinted / currentStageAllocation) * 100;
    // console.log(percentageMinted && percentageMinted);
    setPercentRaised(percentageMinted?.toFixed(2));
  };

  useEffect(() => {
    calculateAmountRaised();
  });

  return (
    <section className="banner-area-two" id="home">
      <div className="banner-bg-two"></div>
      <div className="container custom-container-four">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="banner-content text-center">
              {/* progress from home one */}
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="fade-in-up banner-content text-center">
                    {/* <img src={fireIcon} width={"25%"} alt="" /> */}
                    {/* <a
                      href="https://creationnetwork.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btn btn-secondary"
                        style={{
                          backgroundColor: "#007bff",
                          borderColor: "#007bff",
                        }}
                      >
                        App
                      </button>
                    </a> */}

                    <div style={{ marginTop: '-3rem' }}>


                      <h2 className="title"  >
                        An Innovative Platform Empowering <span>Global</span>{" "}
                        Internet Users
                      </h2>

                    </div>

                    <h6 className="title" style={{ marginTop: '-2rem' }}>Explore our  <span>AI </span> Platform </h6>
                    <div style={{ marginTop: '-3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <a
                        href="https://creationnetwork.ai"
                        target="_blank"
                        rel="noopener noreferrer"

                      >
                        <button
                          className=" btn-secondary"
                          style={{
                            backgroundColor: isHovered ? "#564DCA" : "#00C4F4",
                            lineHeight: "1",
                            fontSize: "14px",
                            padding: "15px 27px",
                            border: "none",
                            cursor: "pointer",
                            transition: "0.5s",
                            borderRadius: "7px",
                            marginBottom: '1rem'
                          }}
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                        >
                          <h6> creation Network </h6>
                        </button>
                      </a>

                      {/* {currentAccount == null? (
                        <>
                        

                          <li className="header-btn">
                           
                            <ConnectWallet />
                          </li>
                        </>
                      ) : (
                        <div style={{display:'flex ', justifyContent:'center' , alignItems:'center'}}>
                          <li className="header-lang">
                            {`${currentAccount?.slice(
                              0,
                              5
                            )}...${currentAccount?.slice(
                              currentAccount?.length - 4
                            )}`}
                          </li>

                          <li className="header-btn">
                            <BuyNow label={"Buy Now"}  />
                          </li>
                        </div>
                      )} */}
                    </div>
                  </div>
                  <div className="banner-progress-wrap" style={{ marginTop: '2.5rem' }}>
                    <ul className="d-flex justify-content-between" style={{ marginBottom: '0rem' }}>
                      <li className="d-flex align-items-center flex-column">
                        <p className="sm-stage">current stage  </p>
                        <span>stage 1</span>
                        <span>$ {pricepertoken} = crnt</span>
                      </li>
                      <li className="d-flex align-items-center flex-column">
                        <p className="sm-stage">next stage </p>
                        <span>stage 2</span>
                        <span>$ 0.022 = crnt</span>
                      </li>
                    </ul>

                    <div className="progress">
                      <div
                        className={
                          currentStage == 1
                            ? "progress-bar"
                            : currentStage == 2

                              ? "progress-bar stage-2"
                              : currentStage == 3
                                ? "progress-bar stage-3"
                                : currentStage == 4
                                  ? "progress-bar stage-4"
                                  : currentStage == 5
                                    ? "progress-bar stage-5"
                                    : "progress-bar"
                        }
                        role="progressbar"
                        style={{
                          width: `${percentRaised}%`,
                          background: `${colorScales[currentStage]}`,
                        }}
                        aria-valuenow={`${percentRaised}`}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <h4 className="target-banner title text-uppercase">
                      {tokenRaised} Target Raised
                      <span
                        style={{
                          color: `${colorScales[currentStage]}`,
                        }}
                      >
                        {" "}
                        {/* ${ethers.utils.formatEther(`${stagePrice}`)} = 1 CRNT */}
                        $ {pricepertoken} = 1 CRNT
                      </span>
                    </h4>
                  </div>
                </div>
              </div>

              <div style={{ height: 200 }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-social-wrap">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/share/18kBceJCyo/"
              target="_blank"
              className="banner-social-link"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <span>Facebook</span>
          </li>
          <li>
            <a
              href="https://x.com/CRNTNetworkAI?t=hH8bQ7IBpm6M252wZxwh8Q&s=09"
              target="_blank"
              className="banner-social-link"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <span>Twitter</span>
          </li>
          <li>
            <a
              href="https://www.pinterest.com/wwwcreationnetworkai/"
              target="_blank"
              className="banner-social-link"
            >
              <i className="fab fa-pinterest"></i>
            </a>
            <span>Pinterest</span>
          </li>
          <li>
            <a
              href="https://www.instagram.com/creationnetwork.ai/profilecard/?igsh=MTliOWE3b2w5M2gz"
              target="_blank"
              className="banner-social-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <span>Instagram</span>
          </li>
        </ul>
      </div>
      <div className="banner-scroll">
        <span>Scroll down</span>
        <Link
          to="#about"
          data-target="#about"
          onClick={() => handleClickScroll("about")}
        >
          <img src={icon} alt="" />
        </Link>
      </div>
    </section>
  );
};

export default BannerTwo;
