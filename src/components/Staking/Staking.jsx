import React, {  useState } from "react";
// import StakingABI from "../.././contractabi/Staking.json";
// require('dotenv').config();
import { stakingAbi } from "../../utils/constants";
import { stakingAddress } from "../../utils/constants";
import { vestingAbi } from "../../utils/constants";
import { vestingAddress } from "../../utils/constants";
// import { useContractWrite, } from 'wagmi';
import { useContractRead,useContractWrite,useConnect, useAccount } from 'wagmi'
// import { ethers } from 'ethers';
import ScrollAnimation from "react-animate-on-scroll";
const { Web3 } = require("web3");
import './staking.css'

const Staking = () => {
  // const web3 = new Web3(window.ethereum);

  // const { data: hash, writeContract } = useWriteContract()

  const [stakeBalance, setStakeBalance] = useState(999900.0);
  const [stakeInput, setStakeInput] = useState(0);
  const [unstakeInput, setUnstakeInput] = useState(0);
  const [claimableReward, setClaimableReward] = useState(0.3);

  
    const { connect, connectors } = useConnect();
    const { isConnected } = useAccount();

  // const{write} = useContractWrite({
  //   address: stakingAddress,
  //   stakingAbi,
  //   functionName: 'stake',
  //   args: [BigInt(stakeInput)],
  // })

   const { data:stakedata, isLoadings:stakeisloading, isSuccess:stakeIsSuccess, write: stake } = useContractWrite({
            address: stakingAddress,
            abi: stakingAbi,
            functionName: 'stake',
          });

          const { data:unstakedata, isLoadings:unstakeisloading, isSuccess:unstakeIsSuccess, write: unstake } = useContractWrite({
            address: stakingAddress,
            abi: stakingAbi,
            functionName: 'withdraw',
          });
          const { data:rewarddata, isLoadings:rewardisloading, isSuccess:rewardIsSuccess, write: reward } = useContractWrite({
            address: stakingAddress,
            abi: stakingAbi,
            functionName: 'claimRewards',
          });
          const { data:vestingdata, isLoadings:vestingisloading, isSuccess:vestingIsSuccess, write: vesting } = useContractWrite({
            address: vestingAddress,
            abi: vestingAbi,
            functionName: 'releaseTokens',
          });
  // const [seconds, setSeconds] = useState(60);

  // useEffect(() => {
  //   // Start a countdown that decreases every second
  //   const interval = setInterval(() => {
  //     if (seconds > 0) {
  //       setSeconds(seconds - 1); // Decrease the timer by 1 second
  //     } else {
  //       clearInterval(interval); // Stop the timer when it reaches 0
  //     }
  //   }, 1000); // 1000ms = 1 second

  //   // Cleanup the interval on component unmount to avoid memory leaks
  //   return () => clearInterval(interval);
  // }, [seconds]);

  // Handle input changes
  const handleStakeChange = (e) => setStakeInput(e.target.value);

  // Placeholder functions for actions
  const handleStake = async () => {
    try{

      stake({
        args: [BigInt(stakeInput)],
      });

    }catch(error) {
      console.log('error with transaction', error)
    }
  };
  const handleUnstake = async () => {
    try{
      unstake({
        args: [BigInt(stakeInput)]
      })
    }
    catch(error){
      console.log(error,'error during unstake')
    }
  };

  const handleVesting = async() => {
    try{
      vesting();

    }
    catch(error) {
      console.log(error,'error')
    }
  }

  const handleClaimReward = async () => {
    try{
      reward();
    }
    catch(error) {
      console.log('error',error)
    }
 
  };

  return (
    <ScrollAnimation animateIn="fadeInUp">
      <div className="container mb-5  overflow-hidden" id="stake">
      <h3 className="text-center mb-4 text-primary">Staking</h3>

        {/* <p className="my-4">Earn Reward Token</p> */}
        <div className="row myrow">
          <div className="col-md-6 ">
            <div className="card stakingcard p-3">
              <p>100.0 CRNT STAKE</p>
              <div className="input-group mb-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="0"
                  value={stakeInput}
                  onChange={handleStakeChange}
                  min="0"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "2rem",
                }}
              >
                <button
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#007bff",
                    borderColor: "#007bff",
                    width: "150px",
                  }}
                  onClick={handleStake}
                >
                  Stake
                </button>
                <button
                  className="btn btn-secondary"
                  style={{
                    backgroundColor: "#007bff",
                    borderColor: "#007bff",
                    width: "150px",
                  }}
                  onClick={handleUnstake}
                >
                  Unstake
                </button>
              </div>
            </div>
          </div>
          <div
          className="col-md-1 d-none d-md-flex align-items-center justify-content-center"
          style={{ borderLeft: '2px solid #01C3F4' }}
        >
          {/* Divider */}
        </div>

          <div className="col-md-5">
            <div className="card claimreward p-3">
              <p>Reward Token:</p>
              <p>{claimableReward} CRNT</p>
              <button
                className="btn btn-primary"
                onClick={handleClaimReward}
                disabled={claimableReward === 0}
                style={{ backgroundColor: "#007bff", borderColor: "#007bff" }}
              >
                Claim
              </button>
            </div>
          </div>
        </div>
        {/* <div
          className="row  p-4 rounded bg-white"
          style={{
            boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
            borderBottomLeftRadius: "2px",
            borderBottomRightRadius: "2px",
            marginTop: "10px",
            marginBottom: "2px",
          }}
        >
          <p className="text-center mb-4 mt-6">Vesting</p>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <p>Totel token released </p>
            <p>0 CRNT</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <button
              className="btn btn-secondary"
              style={{
                backgroundColor: "#007bff",
                borderColor: "#007bff",
              }}
              onClick={handleVesting}
            >
              Release Token
            </button>
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center mt-3">
            <p>MAX Stack Ammount 44,280,000.00 CRNT</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center mt-3">
            <p>Timer: {seconds}s</p>
          </div>
        </div> */}
      </div>
    </ScrollAnimation>
  );
};
export default Staking;
