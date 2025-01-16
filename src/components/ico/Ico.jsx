import React, { useState } from "react";
import './ico.css'
import { icoAbi } from "../../utils/constants";
import { icoAddress } from "../../utils/constants";
import { useContext } from "react";
import {
  useContractRead,
  useContractWrite,
  useConnect,
  useAccount,
} from "wagmi";
import { IcoContext } from "../../contexts/context";
import { flare } from "wagmi/chains";
const { Web3 } = require("web3");
const web3 = new Web3(window.ethereum);

const Ico = () => {
  const [dollarAmount, setDollarAmount] = useState("");
  const [receivingTokens, setReceivingTokens] = useState(0);
//   const [locked, setLocked] = useState(false);
  const { connectWallet, currentAccount } = useContext(IcoContext);
  const [userStage, setUserStage] = useState(0);


  const [tokens, setTokens] = useState(0);
  const tokenRate = 0.01;


  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();

//   console.log(currentAccount, "isConnected");

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
  let pricepertoken;
  if (stageDetailsData) {
    pricepertoken = stageDetailsData[2];
    pricepertoken = Number(pricepertoken) / 1000000000000000000;
  }

  const handleDollarChange = async (e) => {
    let temp = e.target.value;
    if (temp > 0 && pricepertoken > 0) {
      let buyerReceives = temp / pricepertoken;
      setReceivingTokens(buyerReceives);
    } else {
      setReceivingTokens(0);
    }
    setDollarAmount(e.target.value);
  };

  const {
    data: originalStagePurchase,
    isError: purchaseError,
    isLoading: purchaseIsLoading,
  } = useContractRead({
    address: icoAddress,
    abi: icoAbi,
    functionName: "originalStagePurchases",
    args: [currentAccount, userStage],
    enabled: !!currentAccount,
  });

  let userBalance = 0;
  if(originalStagePurchase !=undefined){
    userBalance = Number(originalStagePurchase);
  }
  console.log(originalStagePurchase,'originalStagePurchase')

  const {
    data: stagePurchases,
    isError: stagePurchasesError,
    isLoading: stagePurchasesIsLoading,
  } = useContractRead({
    address: icoAddress,
    abi: icoAbi,
    functionName: "stagePurchases",
    args: [currentAccount, userStage],
    enabled: !!currentAccount,
  });

  const {
    data: lastClaimTimestamp,
    isError: lastCliamError,
    isLoading: lastClaimIsLoading,
  } = useContractRead({
    address: icoAddress,
    abi: icoAbi,
    functionName: "lastClaimTimestamp",
    args: [currentAccount, userStage],
    enabled: !!currentAccount,
  });
  let lastClaimTime = 0;
  let lastClaimHour = 0;
  let lastClaimMin = 0;
  let lastClaimsec = 0;
  let lastClaimday = 0;

  let locked=false;

  if (lastClaimTimestamp != 0) {
    let timeDifference = 0;
    lastClaimTime = Number(lastClaimTimestamp);
    const currentTime = Math.floor(Date.now() / 1000);
    timeDifference = currentTime - lastClaimTime;

    lastClaimday = Math.floor(timeDifference / 86400);
    lastClaimHour = Math.floor(timeDifference / 3600); // 1 hour = 3600 seconds
    lastClaimMin = Math.floor((timeDifference % 3600) / 60); // Remaining minutes
    lastClaimsec = timeDifference % 60; // Remaining seconds

    if (timeDifference >= 30 * 24 * 60 * 60) {
        locked = false; // Unlock the button
    } else {
        locked= true; // Keep the button locked
    }
  } else if (Number(originalStagePurchase) == 0) {
    locked = false;
  }

  let crntAmount = 0;

  if (originalStagePurchase != undefined) {
    crntAmount = Number(originalStagePurchase);
    crntAmount = (crntAmount * 25) / 100;
  }
  const handleStageChange = (e) => {
    setUserStage(parseInt(e.target.value)); // Update the userStage state with the selected value
  };
  console.log(userStage,'userStage')

  return (
    <div className="container mt-5" id="ico">
      <h3 className="text-center mb-4 text-primary">Buy Token</h3>
      <div
        className="row justify-content-center myrow"
        style={{
          borderRadius: '8px',
          padding: '2rem',
          backgroundColor: '#FAFAFA',
        }}
      >
        <div className="col-md-5 d-flex flex-column align-items-center">
          <h5 className="mb-3 text-secondary">Buy Token</h5>
          <input
            type="number"
            className="form-control mb-3"
            placeholder="Amount in USD:"
            value={dollarAmount}
            onChange={(e) => handleDollarChange(e)}
            style={{ maxWidth: '100%' ,margin:'2rem 0'}}
          />
          <button
            className="btn btn-primary buybtn"
            style={{
              backgroundColor: '#01C3F4',
              border: 'none',
              width: '50%',
              marginBottom:'1rem'
            }}
          >
            Buy token
          </button>
        </div>

        <div
          className="col-md-1 d-none d-md-flex align-items-center justify-content-center"
          style={{ borderLeft: '2px solid #01C3F4' }}
        >
          {/* Divider */}
        </div>

        <div className="col-md-5 d-flex flex-column align-items-center">
          <h5 className="mb-3 text-secondary" style={{fontSize:'1.5rem'}}>You will receive</h5>
          <p className="mt-4" style={{fontSize:'1.6rem'}}>${pricepertoken} = 1 CRNT</p>
          <p className="fw-bold mt-3" style={{fontSize:'2rem'}}>
            You will get  {'   '}
            {receivingTokens} CRNT
          </p>
        </div>
      </div>

      <div className="container my-5  p-1">
      <h3 className="text-center mb-4 text-primary">Claim Token</h3>
      <div className="card realeasToken" >
        <div className="card-body">
          <div className="row" style={{width:'100%'}}>
            <div className="col-12 col-md-6">
              <div className="mb-3">
                <label htmlFor="totalCrntToken" className="form-label">
                  Total CRNT token in wallet
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="totalCrntToken"
                  value={userBalance}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="investedStage" className="form-label">
                  Invested in stage
                </label>
                <select className="form-select" id="investedStage" value={userStage}  onChange={handleStageChange}>
                  <option value="0">Stage1</option>
                  <option value="1">Stage2</option>
                  <option value="2">Stage3</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="lockedToken" className="form-label">
                  Locked token
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lockedToken"
                  value={userBalance}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="readyToReissueToken" className="form-label">
                  Ready to reissue token
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="readyToReissueToken"
                  value={crntAmount}
                  readOnly
                />
              </div>
            </div>
            
            <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
            {/* <input
                  type="text"
                  className="form-control"
                  id="readyToReissueToken"
                  value="0 CRNT"
                  
                /> */}
                <p>Token wil be unlock in {lastClaimHour}  </p>
              <button className="btn btn-primary mt-4 releaseBtn"  style={{
              backgroundColor: '#01C3F4',
              border: 'none',
            //   width: '60%',
              marginBottom:'1rem'
            }}>Release Token</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    // <div
    //   class="row justify-content-center"
    //   style={{ marginTop: "-1rem", marginBottom: "3rem", alignItems: "center" }}
    // >
    //   <div className="col-10 col-md-5">
    //     {" "}
    //     {/* Make this responsive: full width on small screens, 8/12 on medium+ screens */}
    //     <div
    //       className="card"
    //       style={{
    //         backgroundColor: "#E6E6FA",
    //         padding: "2rem",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       <div className="d-flex flex-column flex-md-row gap-2">
    //         <input
    //           type="number"
    //           className="form-control "
    //           placeholder="Amount in usdc"
    //           style={{ width: "300px" }}
    //           min="0"
    //           onChange={(e) => handleDollarChange(e)}
    //         />
    //         <button
    //           className="btn btn-primary"
    //           style={{
    //             backgroundColor: "#007bff",
    //             borderColor: "#007bff",
    //             width: "100%",
    //             maxWidth: "150px",
    //           }}
    //         >
    //           Buy
    //         </button>
    //       </div>
    //       <div
    //         className="d-flex gap-6"
    //         style={{
    //           justifyContent: "center",
    //           alignItems: "center",
    //           marginTop: "1rem",
    //         }}
    //       >
    //         <p style={{ marginRight: "0.7rem", marginLeft: "-0rem" }}>
    //           ${pricepertoken} = 1 CRNT
    //         </p>
    //         <p>you will get {receivingTokens} crnt</p>
    //       </div>

    //       <div
    //         className="d-flex flex-column flex-md-row"
    //         style={{ marginTop: "0.3rem", alignItems: "center" }}
    //       >
    //         <p>You will recieve {crntAmount} crnt (25%)</p>

    //         <select
    //           className="form-select "
    //           aria-label="Select stage"
    //           style={{ width: "110px", margin: "0 1rem 0.5rem 1rem" }}
    //           value={userStage}
    //           onChange={(e) => setUserStage(Number(e.target.value))}
    //         >
    //           {/* <option selected>Select stage</option> */}
    //           <option value="0">Stage 1</option>
    //           <option value="1">Stage 2</option>
    //           <option value="2">Stage 3</option>
    //         </select>

    //         <button
    //           className="btn btn-primary"
    //           style={{
    //             backgroundColor: "#007bff",
    //             borderColor: "#007bff",
    //             width: "100%",
    //             maxWidth: "150px",
    //           }}
    //         >
    //           Claim
    //         </button>
    //       </div>

    //       <div>
    //         <p>Token wil be unlock in 30 days</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Ico;
