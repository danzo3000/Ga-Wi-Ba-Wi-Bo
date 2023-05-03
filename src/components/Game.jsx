import { useState } from "react";
import { PlayerIcon } from "./PlayerIcon";
import { CpuIcon } from "./CpuIcon";
import { ShowWinner } from "./ShowWinner";

export const Game = ({
  playerScore,
  setPlayerScore,
  cpuScore,
  setCpuScore,
  setIsPlusPlayer,
  setIsPlusCpu,
}) => {
  const [playerAction, setPlayerAction] = useState("");
  const [cpuAction, setCpuAction] = useState("");
  const [lastWinner, setLastWinner] = useState("");

  const handleSelectAction = (action) => {
    setIsPlusCpu(false);
    setIsPlusPlayer(false);
    setPlayerAction(action);
    let newCpuAction = randomAction();
    setCpuAction(newCpuAction);
    const winner = calculateWinner(action, newCpuAction);
    if (winner === -1) {
      setPlayerScore(playerScore + 1);
      setIsPlusPlayer(true);
      setLastWinner("player");
    } else if (winner === 1) {
      setCpuScore(cpuScore + 1);
      setIsPlusCpu(true);
      setLastWinner("cpu");
    } else {
      setLastWinner("draw");
    }
  };

  const randomAction = () => {
    const actions = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    const keys = Object.keys(actions);
    const index = Math.floor(Math.random() * keys.length);

    return keys[index];
  };

  const calculateWinner = (action1, action2) => {
    const actions = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (action1 === action2) {
      return 0;
    } else if (actions[action1] === action2) {
      return -1;
    } else if (actions[action2] === action1) {
      return 1;
    }

    return null;
  };

  const handleReset = () => {
    setPlayerScore(0);
    setCpuScore(0);
    setCpuAction("");
    setPlayerAction("");
    setLastWinner("");
    setIsPlusCpu(false);
    setIsPlusPlayer(false);
  };

  return (
    <section className="game">
      <div className="icon-box">
        {playerAction && <PlayerIcon action={playerAction} />}
        {cpuAction && <CpuIcon action={cpuAction} />}
      </div>
      <div className="buttons">
        <button
          className="game-button scissors"
          onClick={() => handleSelectAction("scissors")}
        >
          가위
          <br />
          Scissors
        </button>
        <button
          className="game-button rock"
          onClick={() => handleSelectAction("rock")}
        >
          바위
          <br />
          Rock
        </button>
        <button
          className="game-button paper"
          onClick={() => handleSelectAction("paper")}
        >
          보
          <br />
          Paper
        </button>
      </div>
      <div className="post-game">
        <ShowWinner winner={lastWinner} />
        <button onClick={handleReset}>Reset</button>
      </div>
    </section>
  );
};
