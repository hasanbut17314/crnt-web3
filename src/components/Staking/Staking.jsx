
import React, { useEffect, useState } from "react";

const Staking = () => {

    const [stakeBalance, setStakeBalance] = useState(999900.0);
  const [rewardBalance, setRewardBalance] = useState(5.000012666666666666666);
  const [stakeInput, setStakeInput] = useState(0);
  const [unstakeInput, setUnstakeInput] = useState(0);
  const [claimableReward, setClaimableReward] = useState(0.3);

  // Handle input changes
  const handleStakeChange = (e) => setStakeInput(e.target.value);
  const handleUnstakeChange = (e) => setUnstakeInput(e.target.value);

  // Placeholder functions for actions
  const handleStake = () => {
    // Logic for staking tokens
    console.log(`Staking ${stakeInput} tokens`);
  };

  const handleUnstake = () => {
    // Logic for unstaking tokens
    console.log(`Unstaking ${unstakeInput} tokens`);
  };

  const handleClaimReward = () => {
    // Logic for claiming reward tokens
    console.log('Claiming reward tokens');
  };

    return(
        <div className="container ">
            <h1 className="text-center mb-4">Staking</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-3 mb-3">
            <h5>Stake Token</h5>
            <p>{stakeBalance.toFixed(1)} $STAKE</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 mb-3">
            <h5>Reward Token</h5>
            <p>{rewardBalance} $REWARD</p>
          </div>
        </div>
      </div>

      <h4 className="my-4">Earn Reward Token</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-3">
            <h6>Stake Token:</h6>
            <p>100.0 $STAKE</p>
            <div className="input-group mb-2">
              <input
                type="number"
                className="form-control"
                placeholder="0"
                value={stakeInput}
                onChange={handleStakeChange}
              />
            </div>
            <button className="btn btn-primary btn-lg me-2" onClick={handleStake}>
              Stake
            </button>
            <button className="btn btn-secondary" onClick={handleUnstake}>
              Unstake
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <h6>Reward Token:</h6>
            <p>{claimableReward} $REWARD</p>
            <button
              className="btn btn-primary"
              onClick={handleClaimReward}
              disabled={claimableReward === 0}
            >
              Claim
            </button>
          </div>
        </div>
      </div>
    </div>
    );
}
export default Staking