import React, { useState, useEffect } from "react";
import "./ico.css";
import { icoAbi } from "../../utils/constants";
import { icoAddress } from "../../utils/constants";
import { useContext } from "react";
import {
   BaseError,
   useReadContract,
  useWriteContract,
  useConnect,
  useAccount,
  useContractEvent,


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
  const [claimStage, setClaimStage] = useState(0);
  // const { data: hash, writeContract } = useWriteContract()

  const handleClaimChange = (e) => {
    setClaimStage(e.target.value);
  };
  const [tokens, setTokens] = useState(0);
  const tokenRate = 0.01;

  const { connect, connectors } = useConnect();
  const { isConnected, address } = useAccount();

  const {
    data: currentStageData,
    isError: isCurrentStageError,
    isLoading: isCurrentStageLoading,
  } = useReadContract({
    address: icoAddress,
    abi: icoAbi,
    functionName: "currentStage",
  });

  const {
    data: stageDetailsData,
    isError: isStageDetailsError,
    isLoading: isStageDetailsLoading,
  } = useReadContract({
    address: icoAddress,
    abi: icoAbi,
    functionName: "stages",
    args: [`${currentStageData}`], // Pass currentStage only when available
  });
  let pricepertoken;
  if (stageDetailsData) {
    pricepertoken = stageDetailsData[1];
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
    data:  purchases = [],
    isError: purchaseError,
    isLoading: purchaseIsLoading,
  } = useReadContract({
    address: icoAddress,
    abi: icoAbi,
    functionName: "purchases",
    args: [address],
    enabled: !!currentAccount,
  });
  let originalStagePurchase =0;

  let userBalance = 0;
  if (originalStagePurchase != undefined) {
    userBalance = Number(originalStagePurchase);
  }

  const { 
    data: hash, 
    isPending,
    writeContract ,
    error:errorExample
  } = useWriteContract() 

  useEffect(() => { 
    if (errorExample) {
      const errorMessage = errorExample?.shortMessage || "";
      
      // Extract the message after 'reason:'
      const updatedMessage = errorMessage.split("reason:")[1]?.trim();
  
      if (updatedMessage) {
        // Show the extracted error message in an alert
        window.alert(updatedMessage);
      } else {
        // Fallback if 'reason:' is not found
        
        // window.alert("An error occurred. Please try again.");
        console.log(errorMessage,'errorMessage')
      }
    }
  }, [errorExample]);

  let locked = false;

  let crntAmount = 0;

  if (originalStagePurchase != undefined) {
    crntAmount = Number(originalStagePurchase);
    crntAmount = (crntAmount * 25) / 100;
  }
  const handleStageChange = (e) => {
    setUserStage(parseInt(e.target.value)); // Update the userStage state with the selected value
  };

  const handleClaimToken = async (event) => {
    if (event) event.preventDefault();
    try {
      if (!isConnected) {
        console.log(isConnected, "isConnected");
        console.log("please connect your metamast");
        return;
      }

      writeContract({
        address:icoAddress,
        abi:icoAbi,
        functionName: 'claimTokens',
        args: [claimStage],
      })

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

  const handleBuy = async (event) => {
    if (event) event.preventDefault();

    try {
      if (!isConnected) {
        console.log(isConnected, "isConnected");
        console.error("Please connect your wallet before proceeding.");
        return;
      }
    
      let stablecoinAddress = "0x55d398326f99059ff775485246999027b3197955";
      writeContract({
        address:icoAddress,
        abi:icoAbi,
        functionName: 'buyTokens',
        args: [BigInt(dollarAmount), stablecoinAddress],
      })

   

     

  //  if(buyTokenError ){
  //   let errorMessage = buyTokenError.shortMessage;
  //   const updatedMessage = errorMessage.split('reason:')[1]?.trim();
  //   window.alert(updatedMessage)
  //  }
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
                onClick={(e) =>handleBuy(e)}
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
                  <Form.Control type="text" placeholder="0 CRNT" value={purchases.length ===0  || purchaseIsLoading ? "0" : Number(purchases[0]) } readOnly />
                </div>
              </Form.Group>
              <Form.Group className="mb-3 row align-items-center">
                <Form.Label className="col-7 col-form-label">
                  Invested in stage:
                </Form.Label>
                <div className="col-5">
                  <Form.Select  value={claimStage} onChange={handleClaimChange}>
                    <option value="0">Stage 1</option>
                    <option value="1">Stage 2</option>
                    <option value="2">Stage 3</option>
                    <option value="3">Stage 4</option>
                    <option value="4">Stage 5</option>
                    <option value="5">Stage 6</option>
                    <option value="6">Stage 7</option>
                    <option value="7">Stage 8</option>
                    <option value="8">Stage 9</option>
                    <option value="9">Stage 10</option>
                    <option value="10">Stage 11</option>
                    <option value="11">Stage 12</option>
                    <option value="12">Stage 13</option>
                    <option value="13">Stage 14</option>
                    <option value="14">Stage 15</option>
                    <option value="15">Stage 16</option>
                    <option value="16">Stage 17</option>
                    <option value="17">Stage 18</option>
                    <option value="18">Stage 19</option>
                    <option value="19">Stage 20</option>
                  </Form.Select>
                </div>
              </Form.Group>
              <Form.Group className="mb-3 row align-items-center">
                <Form.Label className="col-7 col-form-label">
                  Locked token:
                </Form.Label>
                <div className="col-5">
                  <Form.Control type="text" placeholder="0 CRNT" readOnly  value={purchases.length ===0  || purchaseIsLoading ? "0" : Number(purchases[1])}/>
                </div>
              </Form.Group>
              <Form.Group className="mb-3 row align-items-center">
                <Form.Label  className="col-7 col-form-label" >Ready to release token:</Form.Label>
                <div className="col-5">
                <Form.Control type="text" placeholder="0 CRNT" readOnly value={purchases.length ===0  || purchaseIsLoading ? "0" : Number(purchases[1])*(0.25)  } />
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
                onClick={(e) =>handleClaimToken(e)}
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
