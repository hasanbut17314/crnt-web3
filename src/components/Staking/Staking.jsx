import React, { useEffect, useState } from "react";
import StakingABI from "../.././contractabi/Staking.json" 
// require('dotenv').config();
import ScrollAnimation from 'react-animate-on-scroll';
const { Web3 } = require('web3');



const Staking = () => {
  const web3 = new Web3(window.ethereum);

  const [stakeBalance, setStakeBalance] = useState(999900.0);
  const [stakeInput, setStakeInput] = useState(0);
  const [unstakeInput, setUnstakeInput] = useState(0);
  const [claimableReward, setClaimableReward] = useState(0.3);

  // Handle input changes
  const handleStakeChange = (e) => setStakeInput(e.target.value);

  // Placeholder functions for actions
  const handleStake = async() => {
    // Logic for staking tokens
    const contractAddress = process.env.STAKINGADDRESS
    const contract = new web3.eth.Contract(StakingABI, contractAddress);
    const accounts = await web3.eth.getAccounts();
    const userAccount = accounts[0];

    const tx = await contract.methods.stake(stakeInput).send({ from: userAccount });
    console.log('Transaction successful:', tx)

    console.log(`Staking ${stakeInput} tokens`);
  };

  const handleUnstake = async() => {
    // Logic for unstaking tokens
    const contractAddress = process.env.STAKINGADDRESS
    const contract = new web3.eth.Contract(StakingABI, contractAddress);
    const accounts = await web3.eth.getAccounts();
    const userAccount = accounts[0];

    const tx = await contract.methods.withdraw(stakeInput).send({ from: userAccount });
    console.log('Transaction successful:', tx)
    
    console.log(`Staking ${stakeInput} tokens`);
    console.log(`Unstaking ${unstakeInput} tokens`);
  };

  const handleClaimReward = async() => {
    // Logic for claiming reward tokens
    const contractAddress = process.env.STAKINGADDRESS
    const contract = new web3.eth.Contract(StakingABI, contractAddress);
    const accounts = await web3.eth.getAccounts();
    const userAccount = accounts[0];

    const tx = contract.methods.claimRewards();
    
    // Estimate gas for the transaction
    const gas = await tx.estimateGas({ from: userAccount });
    
    // Set up the transaction data
    const txData = {
        from: userAccount,
        to: contractAddress,
        data: tx.encodeABI(),
        gas,
        gasPrice: web3.utils.toWei('20', 'gwei'),  // Adjust gas price if needed
    };
    try {
      // Sign the transaction with your private key
      const signedTx = await web3.eth.accounts.signTransaction(txData, userAccount.privateKey);

      // Send the signed transaction
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      console.log('Transaction receipt:', receipt);  // Log the transaction receipt

  } catch (error) {
      console.error('Error claiming rewards:', error);  // Log any errors
  }
  };

  return (
    <ScrollAnimation animateIn="fadeInUp">
    <div className="container ">
      <p className="text-center mb-4">Staking</p>

      {/* <p className="my-4">Earn Reward Token</p> */}
      <div className="row">
        <div className="col-md-6 "  >
          <div className="card p-3" style={{ backgroundColor: '#E6E6FA' }}>
            
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
              style={{ display: "flex", justifyContent: "center", gap: "2rem" }}
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

        <div className="col-md-6">
          <div className="card p-3" style={{ backgroundColor: '#E6E6FA' }}>
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
    </div>
    </ScrollAnimation>
  );
};
export default Staking;
