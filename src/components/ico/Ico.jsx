import React, { useState } from "react";
import "./ico.css";
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
import { ToastContainer, toast } from "react-toastify";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
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
  const { isConnected, address } = useAccount();

  console.log(address, "address");

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
  if (originalStagePurchase != undefined) {
    userBalance = Number(originalStagePurchase);
  }

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
    data: buyToken,
    isLoadings,
    isSuccess,
    write: writeBuyToken,
  } = useContractWrite({
    address: icoAddress,
    abi: icoAbi,
    functionName: "buyTokens",
  });

  const {
    data: claimToken,
    isLoadings: claimTokenLoading,
    isSuccess: claimTokenSuccess,
    write: writeClaimToken,
  } = useContractWrite({
    address: icoAddress,
    abi: icoAbi,
    functionName: "claimTokens",
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

  let locked = false;

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
      locked = true; // Keep the button locked
    }
  } else if (Number(originalStagePurchase) == 0) {
    locked = false;
    lastClaimday = 0;
    lastClaimHour = 0;
    lastClaimMin = 0;
    lastClaimsec = 0;
  }

  let crntAmount = 0;

  if (originalStagePurchase != undefined) {
    crntAmount = Number(originalStagePurchase);
    crntAmount = (crntAmount * 25) / 100;
  }
  const handleStageChange = (e) => {
    setUserStage(parseInt(e.target.value)); // Update the userStage state with the selected value
  };

  const handleClaimToken = async () => {
    try {
      if (!isConnected) {
        console.log(isConnected, "isConnected");
        console.log("please connect your metamast");
        return;
      }
      writeClaimToken({
        args: [userStage],
      });
    } catch (err) {
      console.log(err, "error during claiming");
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

  const handleBuy = async (activeTab, amount) => {
    try {
      if (!isConnected) {
        console.log(isConnected, "isConnected");
        console.error("Please connect your wallet before proceeding.");
        return;
      }

      let stablecoinAddress = "0xC19b41ea237Aa3f874971911c3b1580B1d1A9eDF";

      writeBuyToken({
        args: [BigInt(dollarAmount), stablecoinAddress],
      });
    } catch (err) {
      const errormessage = err.toString();
      console.log(errormessage);
      const reasonMatch = errormessage.match(/reason="([^"]+)"/);
      const reason = reasonMatch ? reasonMatch[1] : "Failed";
      console.log(reason);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center align-items-stretch" id="ico">
        {/* Buy Token Section */}
        <Col md={5} className="d-flex">
          <Card className="p-4 shadow-sm w-100 mycard" style={{backgroundColor:'#0412351A'}} >
            <h4 className="text-center mb-4" style={{ color: "#564DCA" }}>
              Buy Token
            </h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Amount in USDT:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter amount in USDT"
                  onChange={(e) => handleDollarChange(e)}
                />
              </Form.Group>
                <div className="d-grid align-items-center justify-content-center mt-5" >
                <button
                className="btn btn-primary releaseBtn"
                
                style={{ backgroundColor: "#564DCA", borderColor: "#007bff" }}
                onClick={() =>handleBuy()}
              >
                Buy Token
              </button>
              </div>
            </Form>
            <hr className="my-4" />
            <p className="text-center fw-bold" style={{fontSize:'2rem',color:'#564DCA'}} >You will receive</p>
            <p className="text-center" style={{fontSize:'1.2rem'}}>${pricepertoken} = 1 CRNT</p>
            <p className="text-center text-muted" style={{fontSize:'2rem'}}>You will get {receivingTokens} CRNT</p>
          </Card>
        </Col>

        {/* Claim Token Section */}
        <Col md={5} className="d-flex card2 ">
          <Card className="p-4 shadow-sm w-100"  style={{backgroundColor:'#0412351A'}}>
            <h4 className="text-center mb-4" style={{ color: "#564DCA" }}>
              Claim Token
            </h4>
            <Form>
              <Form.Group className="mb-3 row align-items-center">
                <Form.Label className=" col-7 col-form-label">
                  Total CRNT token in wallet:
                </Form.Label>
                <div className="col-5">
                  <Form.Control type="text" placeholder="0 CRNT" readOnly />
                </div>
              </Form.Group>
              <Form.Group className="mb-3 row align-items-center">
                <Form.Label className="col-7 col-form-label">
                  Invested in stage:
                </Form.Label>
                <div className="col-5">
                  <Form.Select>
                    <option value="0">Stage 1</option>
                    <option value="1">Stage 2</option>
                    <option value="2">Stage 3</option>
                  </Form.Select>
                </div>
              </Form.Group>
              <Form.Group className="mb-3 row align-items-center">
                <Form.Label className="col-7 col-form-label">
                  Locked token:
                </Form.Label>
                <div className="col-5">
                  <Form.Control type="text" placeholder="0 CRNT" readOnly />
                </div>
              </Form.Group>
              <Form.Group className="mb-3 row align-items-center">
                <Form.Label  className="col-7 col-form-label" >Ready to release token:</Form.Label>
                <div className="col-5">
                <Form.Control type="text" placeholder="0 CRNT" readOnly />
                </div>
                
              </Form.Group>
              <hr className="my-4" />
              <Form.Group className="mb-3">
                {/* <Form.Control type="text" placeholder="0 CRNT" readOnly /> */}
                <p>Your token will be unlock in 0 days </p>
              </Form.Group>
              <div className="d-grid align-items-center justify-content-center" >
                <button
                className="btn btn-primary releaseBtn"
                
                style={{ backgroundColor: "#564DCA", borderColor: "#007bff" }}
              >
                Release Token
              </button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Ico;
