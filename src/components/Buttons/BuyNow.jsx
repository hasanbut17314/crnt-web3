import React, { useState ,useEffect} from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Tabs from "./Tabs";
import ToggleButton from "./ToggleButton";

import { AiOutlineClose } from "react-icons/ai";
import { formatEther, parseEther } from "ethers/lib/utils";
import { ToastContainer, toast } from "react-toastify";
import { Contract, ethers, providers } from "ethers";
import { useContext } from "react";
import { IcoContext } from "../../contexts/context";

import { icoAbi } from "../../utils/constants";
import { icoAddress } from "../../utils/constants";
import { useContractRead,useContractWrite,useConnect, useAccount } from 'wagmi'

import "react-toastify/dist/ReactToastify.css";
// import { icoAbi, icoAddress } from "../../utils/constants";
import { useEffect } from "react";
import LoadingOverlay from "react-loading-overlay";
import { Link } from "react-router-dom";
import IcoAbi from '../../contractabi/ICO.json'
const { Web3 } = require('web3');
const web3 = new Web3(window.ethereum);



const tabs = [
  { label: "USDT", value: "usdt", icon: "/images/icons/usdt.png" },
  
];

const BuyNow = (props) => {
  const { buyWithBusd, buyWithUsdt, stagePrice, isLoading } =
    useContext(IcoContext);

  const [show, setShow] = useState(false);
  const [hasReferral, setHasReferral] = useState(false);
  // const [hasReferral2, setHasReferral2] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [referralCode, setReferralCode] = useState("");
  const [dollarAmount, setDollarAmount] = useState("");
  const [receivingTokens, setReceivingTokens] = useState(0);

  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();

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
    
        let pricepertoken
        if(stageDetailsData){
          pricepertoken = stageDetailsData[1];
          pricepertoken = Number(pricepertoken)/1000000000000000000 
        }

        const { data, isLoadings, isSuccess, write,error:buytokenError } = useContractWrite({
          address: icoAddress,
          abi: icoAbi,
          functionName: 'buyTokens',
        });

          useEffect(() => {
            if (buytokenError) {
              // Safely check if the error has a shortMessage property
              const errorMessage = buytokenError?.shortMessage || "";
              
              // Extract the message after 'reason:'
              const updatedMessage = errorMessage.split("reason:")[1]?.trim();
          
              if (updatedMessage) {
                // Show the extracted error message in an alert
                window.alert(updatedMessage);
              } else {
                // Fallback if 'reason:' is not found
                window.alert("An error occurred. Please try again.");
              }
            }
          }, [buytokenError]);
        

  const handleClose = () => {
    setShow(false);
    setReferralCode("");
    setHasReferral(false);
    setDollarAmount("");
    setActiveTab(tabs[0]);
    setReceivingTokens(0);
  };
  const handleShow = () => setShow(true);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleBuy = async (activeTab, amount) => {
    try {
      

      if (!isConnected) {
        console.log(isConnected,'isConnected')
        console.error('Please connect your wallet before proceeding.');
        return;
      }
  

      // let stablecoinAddress = "0xC19b41ea237Aa3f874971911c3b1580B1d1A9eDF"
      let stablecoinAddress = "0x55d398326f99059ff775485246999027b3197955";

      write({
        args: [BigInt(dollarAmount), stablecoinAddress],
      });
      
    } catch (err) {
      const errormessage = err.toString();
      console.log(errormessage);
      const reasonMatch = errormessage.match(/reason="([^"]+)"/);
      const reason = reasonMatch ? reasonMatch[1] : "Failed";
      console.log(reason);

      toast.error(reason, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleDollarChange = async (e) => {
    let temp = e.target.value;
    if(temp > 0) {
     
      let buyerReceives  = temp/ pricepertoken
       setReceivingTokens(buyerReceives)
    }
    else{
      setReceivingTokens(0)
    }
    setDollarAmount(e.target.value);
  };

  const handleReferralChange = async (e) => {
    setReferralCode(e.target.value);
  };

  return (
    <div>
      {/* <Button className="btn"></Button> */}

      <button className="btn btn-two" onClick={handleShow}>
        {props.label}
      </button>

      <Modal
        className="custom-modal"
        show={show}
        onHide={isLoading ? undefined : handleClose}
        centered
      >
        <LoadingOverlay
          active={isLoading}
          spinner
          styles={{
            overlay: (base) => ({
              ...base,
              zIndex: 9999, // Increase the z-index value
            }),
          }}
        >
          <Modal.Header>
            <button
              className="all-unset close-button"
              onClick={() => setShow(false)}
              style={{ cursor: "pointer" }}
            >
              <AiOutlineClose />
            </button>
          </Modal.Header>
          <Modal.Body>
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              handleTabChange={handleTabChange}
            />
            {activeTab.value === "usdt" && (
              <>
                
                <div className={hasReferral ? "show-input" : "hide-input"}>
                  <input
                    type="text"
                    placeholder="Referral Code"
                    className="my-3 custom-input"
                    required={hasReferral}
                    onChange={(e) => handleReferralChange(e)}
                  />
                </div>

                <input
                  type="number"
                  placeholder="Amount in USDT"
                  className="my-3 custom-input number-input"
                  step="any"
                  value={dollarAmount}
                  required
                  onChange={(e) => handleDollarChange(e)}
                />
                <p className="mb-0 subtle-text">
                  {" "}
                  <p className="mb-0 subtle-text"> ${pricepertoken} = 1 CRNT</p>
                </p>
                <p className="mb-0 text-end subtle-text">
                  You'll get:{" "}
                  {receivingTokens}{" "}
                  CRNT
                </p>
                <p className="mb-0 text-end subtle-text tnc2">
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </p>
              </>
            )}
            {activeTab.value === "busd" && (
              <>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 subtle-text">Have a referral code? </p>
                  <ToggleButton on={hasReferral} setOnState={setHasReferral} />
                </div>
                <div className={hasReferral ? "show-input" : "hide-input"}>
                  <input
                    type="text"
                    placeholder="Referral Code"
                    className="my-3 custom-input"
                    required={hasReferral}
                    onChange={(e) => handleReferralChange(e)}
                  />
                </div>
                {/* <p className="subtle-text">Amount:</p> */}

                <input
                  type="number"
                  step="any"
                  value={dollarAmount}
                  placeholder="Amount in BUSD"
                  className="my-3 custom-input number-input"
                  onChange={(e) => handleDollarChange(e)}
                />
                <p className="mb-0 subtle-text"> ${pricepertoken} = 1 CRNT</p>

                <p className="mb-0 text-end subtle-text">
                  You'll get:{" "}
                  {receivingTokens}{" "}
                  CRNT
                </p>
                <p className="mb-0 text-end subtle-text tnc2">
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div className="header-btn">
              <button
                className="btn btn-two pu"
                onClick={() => {
                  handleBuy(activeTab, dollarAmount);
                }}
              >
                Purchase Tokens
              </button>
            </div>
          </Modal.Footer>
        </LoadingOverlay>
      </Modal>
    </div>
  );
};

export default BuyNow;
