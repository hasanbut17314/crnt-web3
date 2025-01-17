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
  const [stakingAmount, setStakingAmount] = useState('');
  const [rewardToken, setRewardToken] = useState('');

  
    const { connect, connectors } = useConnect();
    const { isConnected } = useAccount();

  // const{write} = useContractWrite({
  //   address: stakingAddress,
  //   stakingAbi,
  //   functionName: 'stake',
  //   args: [BigInt(stakeInput)],
  // })
  const handleStakingInputChange = (e) => {
    setStakingAmount(e.target.value);
  };


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
      <div className="container " style={{marginTop:'-1.5rem'}} id="stake">
      <div className="row justify-content-center">
        <div className="col-md-5 mb-4">
          <div className="card" style={{backgroundColor:'#0412351A'}}>
            <div className="card-body">
            <h4 className="card-title text-center" style={{color:'#564DCA'}}>Staking</h4>
              <div className="form-group">
                <label htmlFor="stakingInput">CRNT Stake</label>
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  id="stakingInput"
                  value={stakingAmount}
                  onChange={handleStakingInputChange}
                />
              </div>
              <div className="d-flex justify-content-center gap-2 mt-4">
                <button className="btn btn-primary releaseBtn"
                
                style={{ backgroundColor: "#564DCA", borderColor: "#007bff" }}>Buy token</button>
                <button className="btn btn-primary releaseBtn"
                
                style={{ backgroundColor: "#564DCA", borderColor: "#007bff" }}>Buy token</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 mb-4">
          <div className="card" style={{backgroundColor:'#0412351A'}}>
            <div className="card-body">
              <h4 className="card-title text-center" style={{color:'#564DCA'}}>Reward</h4>
              <div className="form-group">
                <label htmlFor="rewardInput">Reward Token</label>
                <input
                  type="text"
                  className="form-control"
                  id="rewardInput"
                  style={{backgroundColor:'white'}}
                  value={rewardToken}
                  readOnly
                />
              </div>
              <div className="d-grid gap-2 mt-4 justify-content-center">
                <button className="btn btn-primary releaseBtn"
                
                style={{ backgroundColor: "#564DCA", borderColor: "#007bff" }} onClick={handleClaimReward}>
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <div className="container mb-5  overflow-hidden" id="stake">
      <h3 className="text-center mb-4 text-primary">Staking</h3>

        {/* <p className="my-4">Earn Reward Token</p> */}
        {/* <div className="row myrow">
          <div className="col-md-5 "> */}
            {/* <div className="card stakingcard p-3">
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
        > */}
          {/* Divider */}
        {/* </div> */}

          {/* <div className="col-md-5">
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
        </div> */}
      
    </ScrollAnimation>
  );
};
export default Staking;
